import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionTitle } from '@/components/SectionTitle';
import { ArrowRight, Coffee, CalendarDays, Users } from 'lucide-react';
import { menuItems, eventItems } from '@/lib/data';
import type { MenuItem, EventItem } from '@/lib/data';

export default function Home() {
  const featuredMenuItems = menuItems.slice(0, 3);
  const upcomingEvents = eventItems.slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[500px] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Interior acogedor de Inkafe"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 filter brightness-75"
          data-ai-hint="cafe interior"
          priority
        />
        <div className="relative z-10 p-6 bg-black/30 rounded-lg backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4">
            Inkafe Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Un café, una conversación, un momento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="/menu">Ver Menú <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="/contact#reservar">Reservar</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20 shadow-lg transition-transform hover:scale-105">
              <Link href="/contact#mapa">Cómo Llegar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionTitle title="Bienvenido a Inkafe" subtitle="Donde cada taza cuenta una historia y cada rincón invita a la calma." centered />
          <div className="max-w-3xl mx-auto text-center text-lg text-foreground/80 mb-8">
            <p className="mb-4">
              En Inkafe, creemos en la magia de los pequeños momentos: una conversación amena, el aroma del café recién hecho, la calidez de un espacio acogedor. Somos más que una cafetería, somos un punto de encuentro para estudiantes, trabajadores remotos y todos aquellos que buscan una pausa reconfortante en su día.
            </p>
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/about">Conoce Nuestra Historia <Users className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <SectionTitle title="Nuestros Favoritos" subtitle="Delicias seleccionadas por nuestros baristas y amadas por nuestros clientes." centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMenuItems.map((item: MenuItem) => (
              <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-60 w-full">
                  <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.imageHint} />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{item.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{item.description}</p>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/menu">Ver en Menú <Coffee className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionTitle title="Próximos Eventos" subtitle="No te pierdas nuestras actividades especiales, promociones y momentos únicos." centered />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event: EventItem) => (
              <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <div className="relative h-60 w-full">
                  <Image src={event.imageUrl} alt={event.name} layout="fill" objectFit="cover" data-ai-hint={event.imageHint} />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{event.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{event.date} - {event.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{event.description}</p>
                  <Button asChild variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/events">Más Detalles <CalendarDays className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
