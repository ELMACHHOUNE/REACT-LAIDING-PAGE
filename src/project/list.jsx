import React from "react";
export default function List(){
    const products = [
    {
      id: 1,
      title: "Smartphone Ultra X",
      description: "Écran 6.7 pouces, 128GB de stockage, appareil photo 48MP et batterie longue durée.",
      price: "599,99 Dhs",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Écouteurs Sans Fil Pro",
      description: "Annulation de bruit active, autonomie 24h, qualité sonore premium et design ergonomique.",
      price: "179,99 Dhs",
      image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Montre Connectée Series 5",
      description: "Suivi santé avancé, étanche 50m, GPS intégré et autonomie de 7 jours.",
      price: "249,99 Dhs",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Tablette Elite Pro",
      description: "Écran 11 pouces Retina, processeur ultra-rapide, stylet inclus et clavier détachable.",
      price: "429,99 Dhs",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Enceinte Bluetooth 360",
      description: "Son surround, résistante à l'eau, autonomie 12h et design compact et portable.",
      price: "129,99 Dhs",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Casque VR Immersif",
      description: "Expérience de réalité virtuelle à 360°, écran 4K, confortable et compatible avec tous les appareils.",
      price: "349,99 Dhs",
      image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];
  return products;
}