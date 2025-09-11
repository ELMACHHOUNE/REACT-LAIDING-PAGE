import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    
                    {/* Partie image */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <img 
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                                alt="Notre équipe et vision" 
                                className="w-full h-auto object-cover transform hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>
                    
                    {/* Partie texte */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            À propos de <span className="text-blue-600">nous</span>
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Fondée en 2020, notre entreprise s'est rapidement imposée comme 
                            une référence dans la vente de produits électroniques. Notre passion 
                            pour l'innovation et notre engagement envers la satisfaction client 
                            nous ont permis de construire une communauté de clients fidèles.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Nous sélectionnons rigoureusement chaque produit pour vous garantir 
                            qualité, performance et durabilité. Notre équipe d'experts est 
                            constamment à la recherche des dernières tendances technologiques 
                            pour vous offrir le meilleur du marché.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                                Innovation
                            </div>
                            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
                                Qualité
                            </div>
                            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium">
                                Service Client
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}