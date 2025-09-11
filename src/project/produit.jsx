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
              <CardBody className="bg-white text-gray-900 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border border-gray-200 w-full h-auto rounded-xl p-6">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold"
                >
                  {product.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-600 text-sm max-w-sm mt-2"
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
                    className="text-xl font-bold text-blue-600"
                  >
                    {product.price}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
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
