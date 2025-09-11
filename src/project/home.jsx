import React from 'react';

function Home() {
  return (
    <section className="px-12 py-12 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Partie texte - col-6 */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bienvenue dans notre <span className="text-blue-600">boutique d'électronique</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Découvrez l'excellence technologique à portée de main. Des produits innovants alliant performance, design et prix compétitifs pour votre quotidien connecté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                Voir les produits
              </button>
              <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                En savoir plus
              </button>
            </div>
          </div>
          
          {/* Partie image - col-6 */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Produits électroniques innovants" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Home;