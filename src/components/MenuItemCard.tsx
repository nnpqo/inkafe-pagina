import Image from 'next/image';
import type { MenuItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, WheatOff } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-52 w-full">
        <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.imageHint}/>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary">{item.name}</CardTitle>
        <CardDescription className="text-muted-foreground font-semibold">{item.price}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-foreground/80 mb-3 text-sm">{item.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
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
      </CardContent>
    </Card>
  );
}
