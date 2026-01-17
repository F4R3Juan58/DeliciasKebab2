import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

interface OfferCardProps {
  title: string;
  price: string;
  description?: string;
  delay?: number;
  image?: string;
}

export default function OfferCard({ title, price, description, delay = 0, image }: OfferCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="bg-surface rounded-xl overflow-hidden shadow-lg border border-white/5 group relative"
    >
      <div className="absolute top-0 right-0 bg-secondary text-white px-3 py-1 rounded-bl-lg font-bold text-sm flex items-center gap-1 z-10">
        <Tag size={14} />
        OFERTA
      </div>
      
      {/* Image Placeholder */}
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
        <img 
          src={image || `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=delicious%20pizza%20combo%20fast%20food%20${encodeURIComponent(title)}&image_size=landscape_4_3`} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 relative z-20 -mt-10">
        <div className="bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/10 text-center h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-primary mb-2 leading-tight">{title}</h3>
            {description && <p className="text-gray-400 text-sm mb-4">{description}</p>}
          </div>
          
          <div className="mt-4">
            <span className="text-3xl font-black text-white block">{price}</span>
            <a 
              href="https://www.just-eat.es/restaurants-delicia-kebab-2-11500/menu?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder#categoria_e224e17f-2044-4a89-a4b4-fe09f6eea310"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-white/10 hover:bg-primary hover:text-black text-white py-2 rounded font-bold transition-colors block"
            >
              Pedir Ahora
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
