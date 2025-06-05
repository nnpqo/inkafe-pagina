
import { SectionTitle } from '@/components/SectionTitle';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle title="Contáctanos" subtitle="Estamos aquí para ayudarte. Envíanos un mensaje o visita nuestra cafetería." centered />

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
                    <p className="text-foreground/80">Av. Siempreviva 123, Distrito Ficticio, Lima, Perú</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <a href="tel:+51123456789" className="text-foreground/80 hover:text-primary">(+51) 123-456-789</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Correo Electrónico</h4>
                    <a href="mailto:hola@inkafe.com" className="text-foreground/80 hover:text-primary">hola@inkafe.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Horario de Atención</h4>
                    <p className="text-foreground/80">Lunes a Viernes: 8:00 AM - 9:00 PM</p>
                    <p className="text-foreground/80">Sábados y Domingos: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <MessageCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <a 
                      href="https://wa.me/51987654321?text=Hola%20Inkafe%2C%20quisiera%20hacer%20una%20consulta." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary flex items-center gap-1"
                    >
                      Chatea con nosotros (+51) 987-654-321
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Síguenos</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <Link href="#" aria-label="Facebook" className="text-foreground/80 hover:text-primary transition-colors"><Facebook size={32} /></Link>
                <Link href="#" aria-label="Instagram" className="text-foreground/80 hover:text-primary transition-colors"><Instagram size={32} /></Link>
                <Link href="#" aria-label="Twitter" className="text-foreground/80 hover:text-primary transition-colors"><Twitter size={32} /></Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16" id="mapa">
          <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-6 text-center">Encuéntranos Aquí</h3>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.931508015585!2d-77.036383585696!3d-12.047008991467735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d86c8e4b%3A0x335352e60520877!2sPlaza%20Mayor%20de%20Lima!5e0!3m2!1ses!2spe!4v1603500000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Inkafe"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
