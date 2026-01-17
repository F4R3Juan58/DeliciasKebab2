import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfferCard from './components/OfferCard';
import MenuCard from './components/MenuCard';
import Footer from './components/Footer';
import { superOffers, menuCategories } from './data/menu';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Offers Section */}
        <section id="offers" className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Super <span className="text-primary">Ofertas</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Ahorra más con nuestros packs especiales. La mejor calidad al mejor precio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {superOffers.map((offer, index) => (
              <OfferCard 
                key={index}
                title={offer.title}
                price={offer.price}
                description={offer.description}
                delay={index * 0.2}
                image={offer.image}
              />
            ))}
          </div>
        </section>

        {/* Menu Sections */}
        <div id="menu" className="py-10 bg-surface/30 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-white mb-4">
                Nuestro <span className="text-primary">Menú</span>
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
              <p className="text-gray-400 mt-4">
                Calidad y sabor en cada plato
              </p>
            </div>

            {menuCategories.map((category) => (
              <section key={category.id} className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, index) => (
                    <MenuCard
                      key={index}
                      index={index}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
