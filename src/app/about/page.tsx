import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle title="Sobre Inkafe" subtitle="Conoce la pasión y el propósito que se infunde en cada taza de nuestro café boliviano." centered />

        <section className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-4">Nuestra Historia en el Corazón de Bolivia</h3>
              <p className="text-lg text-foreground/80 mb-4">
                Inkafe nació de un sueño cochabambino: crear un espacio donde la comunidad pudiera reunirse, conectar y disfrutar de café de la más alta calidad, cultivado en nuestras tierras y preparado con orgullo, en un ambiente que respira la calidez de la llajta. Desde nuestra apertura en 2020, nos hemos dedicado a seleccionar los mejores granos de los Yungas y otras regiones cafetaleras de Bolivia, apoyando con fervor a los productores locales y ofreciendo una experiencia auténtica a cada visitante.
              </p>
              <p className="text-lg text-foreground/80">
                Nuestro nombre, "Inkafe", fusiona la rica herencia ancestral del país con la universalidad del café, reflejando nuestro compromiso con las raíces bolivianas y la excelencia en cada detalle. Queremos ser tu rincón favorito en Cochabamba.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image src="/creatio.jpg" alt="Equipo de Inkafe preparando café en un ambiente cálido y boliviano" fill style={{ objectFit: 'cover' }} data-ai-hint="cafeteria Cochabamba ambiente calido textiles andinos" />
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-8 text-center">Nuestra Esencia Boliviana</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-2">
                  <Target size={32} />
                </div>
                <CardTitle className="text-xl text-primary">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">Ofrecer una experiencia de café excepcional, promoviendo con orgullo la rica cultura cafetera boliviana y creando un ambiente inspirador y acogedor para nuestra querida comunidad cochabambina.</p>
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
                <p className="text-foreground/80">Ser reconocidos como el principal referente de cafeterías de especialidad en Cochabamba y Bolivia, destacando por la calidad de nuestro café de origen, nuestra innovación constante y un profundo compromiso social con nuestros productores y nuestra tierra.</p>
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
                  <li>Calidad Boliviana</li>
                  <li>Comunidad Llajtamanta</li>
                  <li>Pasión por lo Nuestro</li>
                  <li>Sostenibilidad Andina</li>
                  <li>Respeto y Calidez</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
