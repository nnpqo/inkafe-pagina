
import { SectionTitle } from '@/components/SectionTitle';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle title="Contáctanos en Cochabamba" subtitle="Estamos aquí para servirte. Envíanos un mensaje o visita nuestra acogedora cafetería en el corazón de la Llajta." centered />
        
        <p className="text-center text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
          En Inkafe, valoramos la conexión directa. Si tienes preguntas, sugerencias o simplemente quieres charlar sobre nuestro café boliviano, no dudes en contactarnos. ¡Esperamos recibirte pronto y compartir la hospitalidad cochabambina!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg" id="contact-form">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-foreground/80">Calle Aroma Boliviano 456, Zona Queru Queru, Cochabamba, Bolivia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <a href="tel:+59144123456" className="text-foreground/80 hover:text-primary">(+591) 4-4123456</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Correo Electrónico</h4>
                    <a href="mailto:hola@inkafe.bo" className="text-foreground/80 hover:text-primary">hola@inkafe.bo</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Horario de Atención</h4>
                    <p className="text-foreground/80">Lunes a Viernes: 7:30 AM - 9:30 PM</p>
                    <p className="text-foreground/80">Sábados y Domingos: 8:30 AM - 8:30 PM</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <MessageCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <a 
                      href="https://wa.me/59171234567?text=Hola%20Inkafe%20Cochabamba%2C%20quisiera%20hacer%20una%20consulta." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary flex items-center gap-1"
                    >
                      Chatea con nosotros (+591) 712-34567
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Síguenos en Redes</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <Link href="#" aria-label="Facebook Inkafe" className="text-foreground/80 hover:text-primary transition-colors"><Facebook size={32} /></Link>
                <Link href="#" aria-label="Instagram Inkafe" className="text-foreground/80 hover:text-primary transition-colors"><Instagram size={32} /></Link>
                <Link href="#" aria-label="Twitter Inkafe" className="text-foreground/80 hover:text-primary transition-colors"><Twitter size={32} /></Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16" id="mapa">
          <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-6 text-center">Encuéntranos en el Corazón de la Llajta</h3>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60918.88445468209!2d-66.19300344970795!3d-17.38288447727313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373e0d9e28999%3A0x783ba6a894ea5f79!2sCochabamba%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1678886012345!5m2!1ses!2sbo"
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Inkafe en Cochabamba"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
