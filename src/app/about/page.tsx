import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye, Heart } from 'lucide-react';

const teamMembers = [
  { name: 'Ana García', role: 'Fundadora y Barista Jefe', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'woman portrait' },
  { name: 'Carlos Vera', role: 'Gerente de Operaciones', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'man portrait' },
  { name: 'Lucía Paz', role: 'Chef Pastelera', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'woman chef' },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle title="Sobre Inkafe Hub" subtitle="Conoce la pasión y el propósito detrás de cada taza de café." centered />

        <section className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-4">Nuestra Historia</h3>
              <p className="text-lg text-foreground/80 mb-4">
                Inkafe nació de un sueño: crear un espacio donde la comunidad pudiera reunirse, conectar y disfrutar de café de la más alta calidad en un ambiente acogedor y moderno. Desde nuestra apertura en 2020, nos hemos dedicado a seleccionar los mejores granos peruanos, apoyar a los productores locales y ofrecer una experiencia única a cada visitante.
              </p>
              <p className="text-lg text-foreground/80">
                Nuestro nombre, "Inkafe", fusiona la rica herencia cultural del Perú con la universalidad del café, reflejando nuestro compromiso con la autenticidad y la excelencia.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image src="https://placehold.co/800x600.png" alt="Equipo de Inkafe trabajando" fill style={{ objectFit: 'cover' }} data-ai-hint="coffee shop team" />
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-8 text-center">Misión, Visión y Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-2">
                  <Target size={32} />
                </div>
                <CardTitle className="text-xl text-primary">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">Ofrecer una experiencia de café excepcional, promoviendo la cultura cafetera peruana y creando un ambiente inspirador para nuestra comunidad.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-2">
                  <Eye size={32} />
                </div>
                <CardTitle className="text-xl text-primary">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">Ser reconocidos como el principal referente de cafeterías de especialidad en Perú, destacando por nuestra calidad, innovación y compromiso social.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-2">
                  <Heart size={32} />
                </div>
                <CardTitle className="text-xl text-primary">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-left text-foreground/80 space-y-1">
                  <li>Calidad</li>
                  <li>Comunidad</li>
                  <li>Pasión</li>
                  <li>Sostenibilidad</li>
                  <li>Respeto</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-8 text-center">Nuestro Equipo</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-lg overflow-hidden">
                <div className="relative h-64 w-full">
                 <Image src={member.imageUrl} alt={member.name} fill style={{ objectFit: 'cover' }} data-ai-hint={member.imageHint} />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-accent font-semibold">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
