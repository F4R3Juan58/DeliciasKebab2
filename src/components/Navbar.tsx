import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Ofertas', href: '#offers' },
    { name: 'Menú', href: '#menu' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-primary tracking-tighter">
          Delicia Kebab <span className="text-white">2</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+34956000000" // Replace with actual number if available, using placeholder
            className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors"
          >
            <Phone size={18} />
            <span>Llamar</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10 overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-4 gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-primary text-lg font-medium py-2 border-b border-white/5 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+34956000000"
                className="flex items-center justify-center gap-2 bg-primary text-black px-4 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors mt-2"
              >
                <Phone size={20} />
                <span>Llamar Ahora</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
