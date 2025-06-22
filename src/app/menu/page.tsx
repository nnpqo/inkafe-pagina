
"use client";

import { useState, useMemo, useEffect } from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import { MenuItemCard } from '@/components/MenuItemCard';
import { menuItems as allMenuItems, candidateFeaturedItemIds } from '@/lib/data';
import type { MenuItem } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShoppingCart, Trash2, MinusCircle, PlusCircle, ShoppingBag, Loader2, Sparkles, Search, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

interface CartItem {
  item: MenuItem;
  quantity: number;
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [isVegan, setIsVegan] = useState<boolean>(false);
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const { toast } = useToast();

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allMenuItems.map(item => item.category)));
    return ['Todas', ...uniqueCategories.sort()];
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const baseFilterLogic = (item: MenuItem): boolean => {
    const categoryMatch = selectedCategory === 'Todas' || item.category === selectedCategory;
    const veganMatch = !isVegan || item.tags.includes('vegano');
    const glutenFreeMatch = !isGlutenFree || item.tags.includes('sin gluten');
    const searchMatch = !searchTerm ||
                        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && veganMatch && glutenFreeMatch && searchMatch;
  };

  const filteredItems = useMemo(() => {
    return allMenuItems.filter(baseFilterLogic);
  }, [selectedCategory, isVegan, isGlutenFree, searchTerm]);

  const featuredItemsToDisplay = useMemo(() => {
    const potentialFeatured = allMenuItems.filter(item => candidateFeaturedItemIds.includes(item.id));
    return potentialFeatured.filter(baseFilterLogic);
  }, [selectedCategory, isVegan, isGlutenFree, searchTerm]);


  const parsePrice = (priceString: string): number => {
    return parseFloat(priceString.replace('Bs. ', '').replace(',', '.'));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('es-BO', { style: 'currency', currency: 'BOB' }).format(amount);
  };

  const handleAddToCart = (itemToAdd: MenuItem, quantityToAdd: number) => {
    if (quantityToAdd <= 0) return;

    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem.item.id === itemToAdd.id);
      if (existingItemIndex > -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += quantityToAdd;
        return updatedCartItems;
      } else {
        return [...prevCartItems, { item: itemToAdd, quantity: quantityToAdd }];
      }
    });
    toast({
      title: "Producto Agregado",
      description: `${quantityToAdd} x ${itemToAdd.name} a tu pedido. ¡Qué buena elección!`,
    });
  };

  const handleRemoveFromCart = (itemIdToRemove: string) => {
    setCartItems(prevCartItems => prevCartItems.filter(cartItem => cartItem.item.id !== itemIdToRemove));
    toast({
      title: "Producto Eliminado",
      description: "El producto ha sido eliminado de tu pedido.",
      variant: "default",
    });
  };

  const handleUpdateCartQuantity = (itemIdToUpdate: string, change: number) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(cartItem =>
        cartItem.item.id === itemIdToUpdate
          ? { ...cartItem, quantity: cartItem.quantity + change }
          : cartItem
      ).filter(cartItem => cartItem.quantity > 0) 
    );
  };

   const handleDirectCartQuantityChange = (itemIdToUpdate: string, newQuantityStr: string) => {
    const newQuantity = parseInt(newQuantityStr, 10);
    if (newQuantityStr === "" ) {
       setCartItems(prevCartItems =>
        prevCartItems.map(cartItem =>
          cartItem.item.id === itemIdToUpdate
            ? { ...cartItem, quantity: 0 } 
            : cartItem
        )
      );
      return;
    }

    if (!isNaN(newQuantity) && newQuantity > 0) {
      setCartItems(prevCartItems =>
        prevCartItems.map(cartItem =>
          cartItem.item.id === itemIdToUpdate
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
      );
    } else if (!isNaN(newQuantity) && newQuantity <= 0) {
       handleRemoveFromCart(itemIdToUpdate);
    }
  };

  const handleCartQuantityInputBlur = (itemIdToUpdate: string, currentQuantity: number) => {
    if (currentQuantity === 0 || isNaN(currentQuantity)) {
      const itemInCart = cartItems.find(ci => ci.item.id === itemIdToUpdate);
      if (itemInCart && itemInCart.quantity === 0) { 
         handleRemoveFromCart(itemIdToUpdate);
      } else { 
         setCartItems(prevCartItems =>
          prevCartItems.map(cartItem =>
            cartItem.item.id === itemIdToUpdate
              ? { ...cartItem, quantity: 1 }
              : cartItem
          )
        );
      }
    }
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, cartItem) => {
      return total + parsePrice(cartItem.item.price) * cartItem.quantity;
    }, 0);
  }, [cartItems]);

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      toast({
        title: "Tu Pedido está Vacío",
        description: "Agrega algunas delicias bolivianas a tu pedido antes de continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsPlacingOrder(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    setCartItems([]);
    setOrderConfirmed(true);
    setIsPlacingOrder(false);
    toast({
      title: "¡Pedido Completado con Sabor Boliviano!",
      description: "Tu pedido ha sido realizado con éxito. Gracias por elegir Inkafe.",
    });

    setTimeout(() => setOrderConfirmed(false), 7000);
  };

  if (!isMounted) {
    return (
      <div className="container py-16 md:py-24 min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-lg">Cargando nuestro menú cochabambino...</p>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle title="Nuestro Menú Inkafe" subtitle="Explora la riqueza de sabores bolivianos: cafés de altura, delicias tradicionales, postres y más. ¡Usa los filtros y arma tu pedido!" centered />

        {orderConfirmed && (
          <Alert variant="default" className="mb-8 bg-accent/10 border-accent text-accent">
            <ShoppingBag className="h-5 w-5 text-accent" />
            <AlertTitle className="font-semibold">¡Pedido Realizado con Éxito!</AlertTitle>
            <AlertDescription>
              Gracias por tu compra en Inkafe. ¡Esperamos que disfrutes nuestros sabores cochabambinos!
            </AlertDescription>
          </Alert>
        )}

        <div className="mb-8 p-6 bg-card rounded-lg shadow-md space-y-6">
          {/* Primera fila: Búsqueda y Categoría */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div>
              <Label htmlFor="search-input" className="text-sm font-medium text-foreground/80 mb-1 block">Buscar Producto</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search-input"
                  type="text"
                  placeholder="Ej: Salteña Vegana, Espresso Yungueño..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background w-full" 
                />
              </div>
            </div>
            <div>
              <Label htmlFor="category-select" className="text-sm font-medium text-foreground/80 mb-1 block">Filtrar por Categoría</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger id="category-select" className="w-full bg-background">
                  <SelectValue placeholder="Selecciona categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Segunda fila: Checkboxes Vegano y Sin Gluten */}
          <div className="flex items-center space-x-4 pt-2 hidden">
            <div className="flex items-center space-x-2">
              <Checkbox id="vegan-filter" checked={isVegan} onCheckedChange={(checked) => setIsVegan(Boolean(checked))} />
              <Label htmlFor="vegan-filter" className="text-sm font-medium text-foreground/80 whitespace-nowrap">Vegano</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="gluten-free-filter" checked={isGlutenFree} onCheckedChange={(checked) => setIsGlutenFree(Boolean(checked))} />
              <Label htmlFor="gluten-free-filter" className="text-sm font-medium text-foreground/80 whitespace-nowrap">Sin Gluten</Label>
            </div>
          </div>
        </div>


        <div className="lg:grid lg:grid-cols-[2fr,1fr] lg:gap-x-12 items-start">
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-2 flex items-center">
                <Sparkles className="mr-3 h-7 w-7 text-accent" />
                Especiales Destacados de la Llajta
              </h3>
              <p className="text-muted-foreground mb-6">¡Nuestras recomendaciones cochabambinas para ti, filtradas según tus preferencias!</p>
              {featuredItemsToDisplay.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {featuredItemsToDisplay.map((item) => (
                    <MenuItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
                  ))}
                </div>
              ) : (
                <Alert variant="default" className="bg-card border-border text-foreground/80">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <AlertTitle className="font-semibold text-primary">¡Ajusta tus Filtros!</AlertTitle>
                    <AlertDescription>
                    No hay especiales destacados que coincidan con tus filtros actuales. Prueba cambiar tu búsqueda o selección para descubrir nuestras delicias.
                    </AlertDescription>
                </Alert>
              )}
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary pt-8 border-t border-border">
                Todo Nuestro Menú Boliviano
              </h3>
              <p className="text-muted-foreground mb-6">Explora todos nuestros productos disponibles, desde cafés de altura hasta delicias tradicionales.</p>
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredItems.map((item: MenuItem) => (
                    <MenuItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
                  ))}
                </div>
              ) : (
                <Alert variant="default" className="bg-card border-border text-foreground/80 mt-8">
                  <Search className="h-5 w-5 text-accent" />
                  <AlertTitle className="font-semibold text-primary">¡Sin Coincidencias!</AlertTitle>
                  <AlertDescription>
                    No encontramos productos que coincidan con tus filtros o término de búsqueda. ¡Intenta con otros sabores de nuestra Bolivia!
                  </AlertDescription>
                </Alert>
              )}
            </section>
          </div>

          <div className="lg:sticky lg:top-28 mt-12 lg:mt-0 lg:w-96">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <ShoppingCart className="mr-3 h-7 w-7" /> Tu Pedido
                </CardTitle>
                {cartItems.length > 0 && !orderConfirmed && (
                  <CardDescription>Revisa los productos de tu pedido y prepárate para disfrutar.</CardDescription>
                )}
              </CardHeader>

              {!orderConfirmed && (
                <>
                  {cartItems.length > 0 ? (
                    <>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[40%]">Producto</TableHead>
                              <TableHead className="text-center w-[25%]">Cantidad</TableHead>
                              <TableHead className="text-right w-[15%]">Precio Unit.</TableHead>
                              <TableHead className="text-right w-[15%]">Subtotal</TableHead>
                              <TableHead className="w-[5%]"></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {cartItems.map((cartItem) => (
                              <TableRow key={cartItem.item.id}>
                                <TableCell className="font-medium break-words">{cartItem.item.name}</TableCell>
                                <TableCell className="text-center">
                                  <div className="flex items-center justify-center gap-1">
                                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleUpdateCartQuantity(cartItem.item.id, -1)} disabled={isPlacingOrder}>
                                      <MinusCircle className="h-4 w-4" />
                                    </Button>
                                    <Input
                                      type="text"
                                      inputMode="numeric"
                                      value={cartItem.quantity === 0 ? '' : cartItem.quantity.toString()}
                                      onChange={(e) => handleDirectCartQuantityChange(cartItem.item.id, e.target.value)}
                                      onBlur={() => handleCartQuantityInputBlur(cartItem.item.id, cartItem.quantity)}
                                      className="w-10 h-7 text-center px-1"
                                      disabled={isPlacingOrder}
                                    />
                                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleUpdateCartQuantity(cartItem.item.id, 1)} disabled={isPlacingOrder}>
                                      <PlusCircle className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </TableCell>
                                <TableCell className="text-right">{formatCurrency(parsePrice(cartItem.item.price))}</TableCell>
                                <TableCell className="text-right">{formatCurrency(parsePrice(cartItem.item.price) * cartItem.quantity)}</TableCell>
                                <TableCell className="text-right">
                                  <Button variant="ghost" size="icon" onClick={() => handleRemoveFromCart(cartItem.item.id)} className="text-destructive hover:text-destructive" disabled={isPlacingOrder}>
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardFooter className="flex flex-col items-end space-y-2 pt-6">
                        <div className="text-xl font-semibold">
                          Total: {formatCurrency(cartTotal)}
                        </div>
                        <Button onClick={handlePlaceOrder} size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isPlacingOrder || cartItems.length === 0}>
                          {isPlacingOrder ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Procesando Pedido...
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="mr-2 h-5 w-5" /> Realizar Pedido
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </>
                  ) : (
                    <CardContent className="text-center py-12 text-muted-foreground">
                      <ShoppingCart className="mx-auto h-12 w-12 mb-4 opacity-40" />
                      <p className="text-lg font-medium">Tu carrito de sabores está vacío</p>
                      <p className="text-sm">Agrega delicias bolivianas del menú para comenzar tu pedido.</p>
                    </CardContent>
                  )}
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
