
"use client";

import { useState, useMemo, useEffect } from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import { MenuItemCard } from '@/components/MenuItemCard';
import { menuItems as allMenuItems } from '@/lib/data';
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
import { Download, ShoppingCart, Trash2, MinusCircle, PlusCircle, ShoppingBag, Loader2, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  item: MenuItem;
  quantity: number;
}

const featuredSeasonalItemIds = ['5', '6', '7']; // Cheesecake Maracuyá, Jugo Lúcuma, Ensalada Fresas
const featuredSeasonalItems: MenuItem[] = allMenuItems.filter(item => 
  featuredSeasonalItemIds.includes(item.id)
);

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [isVegan, setIsVegan] = useState<boolean>(false);
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const { toast } = useToast();

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allMenuItems.map(item => item.category)));
    return ['Todas', ...uniqueCategories];
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredItems = useMemo(() => {
    return allMenuItems.filter(item => {
      const categoryMatch = selectedCategory === 'Todas' || item.category === selectedCategory;
      const veganMatch = !isVegan || item.tags.includes('vegano');
      const glutenFreeMatch = !isGlutenFree || item.tags.includes('sin gluten');
      return categoryMatch && veganMatch && glutenFreeMatch;
    });
  }, [selectedCategory, isVegan, isGlutenFree]);

  const parsePrice = (priceString: string): number => {
    return parseFloat(priceString.replace('S/ ', '').replace(',', '.'));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(amount);
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
      description: `${quantityToAdd} x ${itemToAdd.name} al pedido.`,
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
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + change) }
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
            ? { ...cartItem, quantity: 0 } // Temporarily allow 0 for onBlur check
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
        title: "Carrito Vacío",
        description: "Agrega productos a tu pedido antes de continuar.",
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
      title: "¡Pedido Completado!",
      description: "Tu pedido ha sido realizado con éxito. Gracias por tu compra.",
    });

    setTimeout(() => setOrderConfirmed(false), 7000);
  };

  if (!isMounted) {
    return (
      <div className="container py-16 md:py-24 min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-lg">Cargando menú...</p>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle title="Nuestro Menú Digital" subtitle="Explora nuestra variedad de cafés, postres, desayunos y más. Filtra según tus preferencias y arma tu pedido." centered />

        {orderConfirmed && (
          <Alert variant="default" className="mb-8 bg-green-50 border-green-500 text-green-700">
            <ShoppingBag className="h-5 w-5 text-green-700" />
            <AlertTitle className="font-semibold">¡Pedido Realizado con Éxito!</AlertTitle>
            <AlertDescription>
              Gracias por tu compra en Inkafe Hub. Puedes seguir explorando o realizar un nuevo pedido.
            </AlertDescription>
          </Alert>
        )}

        <div className="mb-8 p-6 bg-card rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="w-full sm:w-auto">
              <Label htmlFor="category-select" className="text-sm font-medium text-foreground/80 mb-1 block">Categoría</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger id="category-select" className="w-full sm:w-[200px] bg-background">
                  <SelectValue placeholder="Selecciona categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 pt-6 sm:pt-7">
              <Checkbox id="vegan-filter" checked={isVegan} onCheckedChange={(checked) => setIsVegan(Boolean(checked))} />
              <Label htmlFor="vegan-filter" className="text-sm font-medium text-foreground/80">Vegano</Label>
            </div>
            <div className="flex items-center space-x-2 pt-6 sm:pt-7">
              <Checkbox id="gluten-free-filter" checked={isGlutenFree} onCheckedChange={(checked) => setIsGlutenFree(Boolean(checked))} />
              <Label htmlFor="gluten-free-filter" className="text-sm font-medium text-foreground/80">Sin Gluten</Label>
            </div>
          </div>
          <Button variant="outline" className="w-full md:w-auto mt-4 md:mt-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Download className="mr-2 h-4 w-4" /> Descargar Menú (PDF)
          </Button>
        </div>

        <div className="lg:grid lg:grid-cols-[2fr,1fr] lg:gap-x-12 items-start">
          {/* Columna Izquierda: Contenido del Menú */}
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-2 flex items-center">
                <Sparkles className="mr-3 h-7 w-7 text-accent" />
                Especiales Destacados
              </h3>
              <p className="text-muted-foreground mb-6">¡Nuestras recomendaciones seleccionadas para ti!</p>
              {featuredSeasonalItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {featuredSeasonalItems.map((item) => (
                    <MenuItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
                  ))}
                </div>
              ) : (
                <Alert variant="default" className="bg-amber-50 border-amber-400 text-amber-700">
                    <Sparkles className="h-5 w-5 text-amber-700" />
                    <AlertTitle className="font-semibold">¡Pronto Novedades!</AlertTitle>
                    <AlertDescription>
                    Estamos preparando nuestras recomendaciones especiales. ¡Vuelve pronto!
                    </AlertDescription>
                </Alert>
              )}
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary pt-8 border-t border-border">
                Todo Nuestro Menú
              </h3>
              <p className="text-muted-foreground mb-6">Explora todos nuestros productos disponibles.</p>
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredItems.map((item: MenuItem) => (
                    <MenuItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-lg text-muted-foreground py-12">No se encontraron productos que coincidan con tus filtros.</p>
              )}
            </section>
          </div>

          {/* Columna Derecha: Carrito de Compras */}
          <div className="lg:sticky lg:top-28 mt-12 lg:mt-0">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <ShoppingCart className="mr-3 h-7 w-7" /> Tu Pedido
                </CardTitle>
                {cartItems.length > 0 && !orderConfirmed && (
                  <CardDescription>Revisa los productos en tu carrito y procede a realizar el pedido.</CardDescription>
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
                                <TableCell className="font-medium">{cartItem.item.name}</TableCell>
                                <TableCell className="text-center">
                                  <div className="flex items-center justify-center gap-1">
                                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleUpdateCartQuantity(cartItem.item.id, -1)} disabled={cartItem.quantity <= 1 && !isPlacingOrder}>
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
                        <Button onClick={handlePlaceOrder} size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isPlacingOrder || cartItems.length === 0}>
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
                      <p className="text-lg font-medium">Tu carrito está vacío</p>
                      <p className="text-sm">Agrega productos del menú para comenzar tu pedido.</p>
                    </CardContent>
                  )}
                </>
              )}
              {/* Si orderConfirmed es true, el Alert global maneja el mensaje, y el carrito aquí no muestra contenido viejo o vacío. */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
