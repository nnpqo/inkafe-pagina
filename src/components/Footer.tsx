import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-headline font-semibold mb-4">Inkafe Hub</h3>
          <p className="text-sm">Un café, una conversación, un momento.</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook size={28} /></Link>
            <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={28} /></Link>
            <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={28} /></Link>
            <Link href="#" aria-label="YouTube" className="hover:text-primary transition-colors"><Youtube size={28} /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-headline font-semibold mb-4">Contacto Rápido</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={18} />
              <span>Av. Siempreviva 123, Lima, Perú</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} />
              <a href="tel:+51123456789" className="hover:text-primary transition-colors">(+51) 123-456-789</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} />
              <a href="mailto:hola@inkafe.com" className="hover:text-primary transition-colors">hola@inkafe.com</a>
            </li>
             <li className="flex items-center justify-center md:justify-start gap-2">
              <MessageCircle size={18} />
              <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp (+51) 987-654-321</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-headline font-semibold mb-4">Enlaces Útiles</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/menu" className="hover:text-primary transition-colors">Menú Digital</Link></li>
            <li><Link href="/events" className="hover:text-primary transition-colors">Eventos</Link></li>
            <li><Link href="/contact#faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</Link></li>
          </ul>
        </div>
      </div>
      <div className="container text-center mt-8 pt-8 border-t border-border">
        <p className="text-xs">&copy; {currentYear} Inkafe Hub. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
