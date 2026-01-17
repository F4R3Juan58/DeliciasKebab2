import { MapPin, Phone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Delicia Kebab 2</h2>
            <p className="text-gray-400 mb-6">
              Auténtico sabor Halal en el corazón de El Puerto. 
              Pizzas caseras y los mejores kebabs de la ciudad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-primary inline-block pb-1">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" />
                <span className="text-gray-300">
                  Pl. el Molino, Av. Sanlúcar, 5, local 9,<br />
                  11500 El Puerto de Sta María, Cádiz
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" />
                <span className="text-gray-300">+34 956 00 00 00</span>
              </li>
            </ul>
            <a 
              href="tel:+34956000000"
              className="mt-6 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-500 transition-colors w-full justify-center md:w-auto"
            >
              <Phone size={18} />
              Llamar Ahora
            </a>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-primary inline-block pb-1">Horario</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Lunes - Jueves</span>
                <span>12:00 - 00:00</span>
              </li>
              <li className="flex justify-between text-primary font-medium">
                <span>Viernes - Domingo</span>
                <span>12:00 - 01:00</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-surface rounded-lg border border-primary/20 text-center">
              <span className="text-primary font-bold text-lg tracking-widest uppercase">100% Halal</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Delicia Kebab 2. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
