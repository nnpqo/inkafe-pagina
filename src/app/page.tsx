
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionTitle } from '@/components/SectionTitle';
import { ArrowRight, Coffee, CalendarDays, Users, BookmarkPlus } from 'lucide-react';
import { menuItems, eventItems } from '@/lib/data';
import type { MenuItem, EventItem } from '@/lib/data';

export default function Home() {
  const featuredMenuItems = menuItems.filter(item => item.tags.includes('popular')).slice(0, 3);
  const upcomingEvents = eventItems.slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[500px] flex items-center justify-center text-center text-primary-foreground">
        <Image
          src="/imagenPrincipal2.jpeg"
          alt="Interior acogedor de Inkafe en Cochabamba con detalles andinos"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute z-0 filter brightness-75"
          data-ai-hint="interior acogedor cafeteria Cochabamba detalles andinos luz calida"
          priority
        />
        <div className="relative z-10 p-6 bg-black/30 rounded-lg backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4">
            Inkafe
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Sabor boliviano, corazón cochabambino. Un café, una conversación, un momento único.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="/menu">Ver Nuestro Menú <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="shadow-lg transition-transform hover:scale-105">
              <Link href="/reservations">Reservar Mesa <BookmarkPlus className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionTitle title="Bienvenido a Inkafe" subtitle="Donde cada taza cuenta una historia de nuestra tierra y cada rincón invita a la calma y la tradición cochabambina." centered />
          <div className="max-w-3xl mx-auto text-center text-lg text-foreground/80 mb-8">
            <p className="mb-4">
              En Inkafe, celebramos la magia de los pequeños momentos: una conversación amena al calor de un api, el aroma embriagador de nuestro café de los Yungas recién tostado, la calidez de un espacio que se siente como casa. Somos más que una cafetería en Cochabamba; somos un punto de encuentro, un refugio para el alma, donde todos quienes buscan una pausa reconfortante pueden disfrutar de lo mejor de Bolivia.
            </p>
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/about">Conoce Nuestra Historia y Pasión <Users className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <SectionTitle title="Nuestros Favoritos de la Llajta" subtitle="Delicias seleccionadas con cariño, amadas por nuestros clientes y con el auténtico sabor boliviano." centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMenuItems.map((item: MenuItem) => (
              <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-60 w-full">
                  <Image src={item.imageUrl} alt={item.name} fill style={{ objectFit: 'cover' }} data-ai-hint={item.imageHint} />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{item.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4 text-sm">{item.description}</p>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href={`/menu?search=${encodeURIComponent(item.name)}`}>Ver en Menú <Coffee className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
           {featuredMenuItems.length === 0 && (
             <p className="text-center text-lg text-muted-foreground py-12">
                Pronto destacaremos nuestras delicias más populares. ¡Visita nuestro menú completo!
             </p>
           )}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionTitle title="Próximos Eventos en Inkafe" subtitle="No te pierdas nuestras actividades culturales, promociones especiales y momentos únicos para compartir en Cochabamba." centered />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event: EventItem) => (
              <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <div className="relative h-60 w-full">
                  <Image src={event.imageUrl} alt={event.name} fill style={{ objectFit: 'cover' }} data-ai-hint={event.imageHint} />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{event.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{event.date} - {event.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4 text-sm">{event.description}</p>
                  <Button asChild variant="default" className="w-full">
                    <Link href="/events">Más Detalles del Evento <CalendarDays className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
             {upcomingEvents.length === 0 && (
                <p className="text-center text-lg text-muted-foreground md:col-span-2 py-12">
                    Actualmente estamos cocinando nuevas sorpresas. ¡Vuelve pronto para no perderte nada!
                </p>
            )}
          </div>
           {upcomingEvents.length > 0 && (
            <div className="text-center mt-12">
                 <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/events">Ver Todos los Eventos</Link>
                </Button>
            </div>
            )}
        </div>
      </section>

      {/* Call to Action for Reservations */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl text-center">
          <SectionTitle 
            title="¿Listo para Vivir la Experiencia Inkafe?" 
            subtitle="Asegura tu mesa en nuestro rincón cochabambino. Es rápido, fácil y te espera un momento inolvidable." 
            centered 
          />
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105 mt-4">
            <Link href="/reservations">Reservar una Mesa Ahora <BookmarkPlus className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
