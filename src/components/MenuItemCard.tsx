
"use client";

import Image from 'next/image';
import type { MenuItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, WheatOff, MinusCircle, PlusCircle, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity(0); // Allow temporarily empty for typing
    } else {
      const numValue = parseInt(value, 10);
      if (!isNaN(numValue) && numValue > 0) {
        setQuantity(numValue);
      } else if (!isNaN(numValue) && numValue <= 0) {
        setQuantity(1); // Enforce min 1 if typed less
      }
    }
  };

  const handleInputBlur = () => {
    if (quantity === 0 || isNaN(quantity)) {
      setQuantity(1); // Default to 1 if left empty or invalid
    }
  };

  const handleAddToCartClick = () => {
    if (quantity <= 0 || isNaN(quantity)) {
       toast({
        title: "Cantidad Inválida",
        description: "Por favor, ingrese una cantidad válida (mayor a 0).",
        variant: "destructive",
      });
      setQuantity(1);
      return;
    }
    onAddToCart(item, quantity);
    setQuantity(1); // Reset quantity for next item
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-52 w-full">
        <Image src={item.imageUrl} alt={item.name} fill style={{ objectFit: 'cover' }} data-ai-hint={item.imageHint}/>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary">{item.name}</CardTitle>
        <CardDescription className="text-muted-foreground font-semibold">{item.price}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-foreground/80 mb-3 text-sm">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.includes('vegano') && (
              <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
                <Leaf className="mr-1 h-3 w-3" /> Vegano
              </Badge>
            )}
            {item.tags.includes('sin gluten') && (
              <Badge variant="outline" className="border-orange-500 text-orange-700 bg-orange-50">
                <WheatOff className="mr-1 h-3 w-3" /> Sin Gluten
              </Badge>
            )}
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-3">
            <Label htmlFor={`quantity-${item.id}`} className="text-sm font-medium text-foreground/80">Cantidad:</Label>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1} className="h-8 w-8">
                <MinusCircle className="h-4 w-4" />
              </Button>
              <Input
                id={`quantity-${item.id}`}
                type="text" 
                inputMode="numeric"
                value={quantity === 0 ? '' : quantity.toString()}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onFocus={(e) => e.target.select()}
                className="w-12 h-8 text-center"
              />
              <Button variant="outline" size="icon" onClick={() => handleQuantityChange(1)} className="h-8 w-8">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button onClick={handleAddToCartClick} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <ShoppingCart className="mr-2 h-4 w-4" /> Agregar al Pedido
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
