import React from 'react';
import { Mail, MessageCircle, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      info: 'iron.comercial26@gmail.com',
      action: 'mailto:iron.comercial26@gmail.com',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+55 (71) 99285-3309',
      action: 'https://wa.me/5571992853309',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      info: 'Iron Cruz de Jesus',
      action: 'https://www.linkedin.com/in/iron-cruz-de-jesus-36634235a/',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      info: '@ironc.post',
      action: 'https://www.instagram.com/ironc.post/',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos <span className="text-yellow-400">Conversar</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pronto para transformar sua ideia em um vídeo impactante? 
            Entre em contato e vamos criar algo incrível juntos!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Formas de <span className="text-yellow-400">Contato</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {method.info}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;