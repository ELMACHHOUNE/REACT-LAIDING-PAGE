import React from "react";
import List from "./list";
import { CardContainer, CardBody, CardItem } from "./3d-card";

export default function Product() {
  // Récupérer les données des produits depuis le composant List
  const products = List();
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Nos <span className="text-blue-600">produits</span> populaires
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <CardContainer key={product.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {product.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {product.description}
                </CardItem>
                <CardItem 
                  translateZ="100" 
                  className="w-full mt-4"
                >
                  <img
                    src={product.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={product.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    className="text-xl font-bold text-blue-600 dark:text-blue-400"
                  >
                    {product.price}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-blue-600 dark:bg-blue-700 dark:text-white text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    Ajouter au panier
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}