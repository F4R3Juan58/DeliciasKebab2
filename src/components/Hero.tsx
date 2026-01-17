import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-10" />
        <img
          src="https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,w_1537,h_480/f_auto/q_auto/dpr_1.0/d_es:cuisines:kebab-3.jpg/v1/es/restaurants/98283"
          alt="Delicious Kebab and Pizza"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-primary/50 text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
            Halal Food & Pizzeria
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Sabor Auténtico <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
              Delicia Kebab 2
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 px-4">
            Las mejores pizzas y kebabs de El Puerto de Santa María. 
            Ingredientes frescos, sabor inigualable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#menu"
              className="bg-primary text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,193,7,0.3)]"
            >
              Ver Menú
            </a>
            <a
              href="#contact"
              className="bg-surface border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-transform hover:scale-105"
            >
              Cómo llegar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
