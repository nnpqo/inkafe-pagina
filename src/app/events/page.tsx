import { SectionTitle } from '@/components/SectionTitle';
import { EventCard } from '@/components/EventCard';
import { eventItems } from '@/lib/data';
import type { EventItem } from '@/lib/data';

export default function EventsPage() {
  const musicEvents = eventItems.filter(event => event.type === 'Música en vivo');
  const readingEvents = eventItems.filter(event => event.type === 'Lecturas y Tertulias');
  const gameEvents = eventItems.filter(event => event.type === 'Juegos de mesa');
  const promotionEvents = eventItems.filter(event => event.type === 'Promoción');
  const workshopEvents = eventItems.filter(event => event.type === 'Taller');


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
           <p className="text-muted-foreground">Próximamente más eventos de este tipo. ¡Mantente atento a nuestras sorpresas bolivianas!</p>
        )}
      </section>
    );
  };

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle title="Eventos y Promociones en Inkafe" subtitle="Descubre la movida cultural y las delicias que te esperan en tu café cochabambino. ¡Siempre hay algo nuevo para compartir!" centered />

        {renderEventSection('Promociones Especiales de la Llajta', promotionEvents)}
        {renderEventSection('Música en Vivo con Sabor Boliviano', musicEvents)}
        {renderEventSection('Clubes de Lectura y Tertulias Culturales', readingEvents)}
        {renderEventSection('Noches de Juegos de Mesa y Tradición', gameEvents)}
        {renderEventSection('Talleres Creativos y de Café', workshopEvents)}


        {eventItems.length === 0 && (
          <p className="text-center text-lg text-muted-foreground py-12">
            De momento, estamos preparando nuevas sorpresas. ¡Vuelve pronto para descubrir los próximos eventos en Inkafe Cochabamba!
          </p>
        )}
      </div>
    </div>
  );
}
