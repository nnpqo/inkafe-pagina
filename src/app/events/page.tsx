import { SectionTitle } from '@/components/SectionTitle';
import { EventCard } from '@/components/EventCard';
import { eventItems } from '@/lib/data';
import type { EventItem } from '@/lib/data';

export default function EventsPage() {
  const musicEvents = eventItems.filter(event => event.type === 'Música en vivo');
  const readingEvents = eventItems.filter(event => event.type === 'Lecturas');
  const gameEvents = eventItems.filter(event => event.type === 'Juegos de mesa');
  const promotionEvents = eventItems.filter(event => event.type === 'Promoción');

  const renderEventSection = (title: string, events: EventItem[]) => {
    if (events.length === 0) return null;
    return (
      <section className="mb-12">
        <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-6">{title}</h3>
        {events.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
           <p className="text-muted-foreground">Próximamente más eventos de este tipo.</p>
        )}
      </section>
    );
  };

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle title="Eventos y Promociones" subtitle="Descubre lo que está sucediendo en Inkafe. ¡Siempre hay algo nuevo!" centered />

        {renderEventSection('Promociones Especiales', promotionEvents)}
        {renderEventSection('Música en Vivo', musicEvents)}
        {renderEventSection('Clubes de Lectura y Talleres', readingEvents)}
        {renderEventSection('Noches de Juegos de Mesa', gameEvents)}

        {eventItems.length === 0 && (
          <p className="text-center text-lg text-muted-foreground py-12">
            Actualmente no hay eventos programados. ¡Vuelve pronto!
          </p>
        )}
      </div>
    </div>
  );
}
