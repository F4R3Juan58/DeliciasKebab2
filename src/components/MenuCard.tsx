import { motion } from 'framer-motion';

interface MenuCardProps {
  name: string;
  description?: string;
  price: string;
  index: number;
}

export default function MenuCard({ name, description, price, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-surface/50 hover:bg-surface border border-white/5 rounded-lg p-4 flex justify-between items-center group transition-colors"
    >
      <div className="flex-1 pr-4">
        <h4 className="text-lg font-bold text-primary group-hover:text-yellow-300 transition-colors">
          {name}
        </h4>
        {description && (
          <p className="text-gray-400 text-sm italic mt-1">
            {description}
          </p>
        )}
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-xl font-bold text-white whitespace-nowrap">{price}</span>
        <a 
          href="https://www.just-eat.es/restaurants-delicia-kebab-2-11500/menu?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder#categoria_e224e17f-2044-4a89-a4b4-fe09f6eea310"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-secondary hover:bg-red-600 text-white px-3 py-1 rounded-full transition-colors"
        >
          Pedir
        </a>
      </div>
    </motion.div>
  );
}
