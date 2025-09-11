import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire ici
    console.log("Données du formulaire:", formData);
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-<span className="text-blue-600">nous</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre disposition pour toute question ou demande d'information concernant nos produits électroniques.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Formulaire de contact - col-6 */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Objet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    placeholder="Objet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
          
          {/* Carte Google Maps - col-6 */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre localisation</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Adresse</h4>
                <p className="text-gray-600">123 Rue du Commerce, 75000 Paris, France</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Téléphone</h4>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Email</h4>
                <p className="text-gray-600">contact@electronix.fr</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Horaires</h4>
                <p className="text-gray-600">Lun-Ven: 9h-19h</p>
                <p className="text-gray-600">Sam: 10h-18h</p>
                <p className="text-gray-600">Dim: Fermé</p>
              </div>
              
              {/* Iframe Google Maps */}
              <div className="rounded-xl overflow-hidden shadow-md h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.99144060821!2d2.292292615807365!3d48.85837007928735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1643031062966!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de notre magasin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;