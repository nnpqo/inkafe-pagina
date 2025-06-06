
import Image from 'next/image';
import type { EventItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-52 w-full">
        <Image src={event.imageUrl} alt={event.name} fill style={{ objectFit: 'cover' }} data-ai-hint={event.imageHint}/>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary">{event.name}</CardTitle>
        <CardDescription className="text-muted-foreground flex items-center gap-1">
            <CalendarDays size={16}/> {event.date} - {event.time}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-foreground/80 mb-3 text-sm">{event.description}</p>
        <div className="mt-auto">
          <Badge className="bg-green-600 text-primary-foreground hover:bg-green-700">{event.type}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
