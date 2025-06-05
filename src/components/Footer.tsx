import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-headline font-semibold mb-4">Inkafe</h3>
          <p className="text-sm">Sabor boliviano, corazón cochabambino.</p>
          <p className="text-xs mt-1">Un café, una conversación, un momento único en la Llajta.</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link href="#" aria-label="Facebook Inkafe" className="hover:text-primary transition-colors"><Facebook size={28} /></Link>
            <Link href="#" aria-label="Instagram Inkafe" className="hover:text-primary transition-colors"><Instagram size={28} /></Link>
            <Link href="#" aria-label="Twitter Inkafe" className="hover:text-primary transition-colors"><Twitter size={28} /></Link>
            <Link href="#" aria-label="YouTube Inkafe" className="hover:text-primary transition-colors"><Youtube size={28} /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-headline font-semibold mb-4">Contacto Rápido (Cochabamba)</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={18} />
              <span>Calle Aroma Boliviano 456, Cochabamba</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} />
              <a href="tel:+59144123456" className="hover:text-primary transition-colors">(+591) 4-4123456</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} />
              <a href="mailto:hola@inkafe.bo" className="hover:text-primary transition-colors">hola@inkafe.bo</a>
            </li>
             <li className="flex items-center justify-center md:justify-start gap-2">
              <MessageCircle size={18} />
              <a href="https://wa.me/59171234567" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp (+591) 712-34567</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-headline font-semibold mb-4">Enlaces Útiles</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary transition-colors">Nuestra Historia Boliviana</Link></li>
            <li><Link href="/menu" className="hover:text-primary transition-colors">Menú con Sabor Local</Link></li>
            <li><Link href="/events" className="hover:text-primary transition-colors">Eventos en la Llajta</Link></li>
            <li><Link href="/contact#faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</Link></li>
             <li><Link href="/reservations" className="hover:text-primary transition-colors">Reservar Mesa</Link></li>
          </ul>
        </div>
      </div>
      <div className="container text-center mt-8 pt-8 border-t border-border">
        <p className="text-xs">&copy; {currentYear} Inkafe. Sabor y tradición de Cochabamba, Bolivia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
