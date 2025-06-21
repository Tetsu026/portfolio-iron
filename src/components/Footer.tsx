import React from 'react';
import { Film, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-400 rounded-lg flex items-center justify-center">
                <Film className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">Iron</span>
                <span className="text-red-600 ml-1">Cruz</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Editor de Vídeo Profissional
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Navegação Rápida</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['Sobre', 'Habilidades', 'Projetos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Back to Top */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end items-center space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/iron-cruz-de-jesus-36634235a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a
                href="https://www.instagram.com/ironc.post/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
              >
                <span className="text-sm font-bold">ig</span>
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg flex items-center justify-center text-white hover:from-red-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-500 text-xs">
              Voltar ao topo
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-sm text-gray-500">
            <p>
              © 2025 Iron Cruz | Editor de Vídeo Profissional. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;