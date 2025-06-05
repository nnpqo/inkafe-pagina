"use client";

import { useState, useMemo, useEffect } from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import { MenuItemCard } from '@/components/MenuItemCard';
import { menuItems as allMenuItems } from '@/lib/data';
import type { MenuItem } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Download } from 'lucide-react';

const categories = ['Todas', ...Array.from(new Set(allMenuItems.map(item => item.category)))];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [isVegan, setIsVegan] = useState<boolean>(false);
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

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

  if (!isMounted) {
    // You can render a loading skeleton here if you want
    return <div className="container py-16 md:py-24 min-h-screen">Cargando menú...</div>;
  }

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle title="Nuestro Menú Digital" subtitle="Explora nuestra variedad de cafés, postres, desayunos y más. Filtra según tus preferencias." centered />

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

        {filteredItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item: MenuItem) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground py-12">No se encontraron productos que coincidan con tus filtros.</p>
        )}
      </div>
    </div>
  );
}
