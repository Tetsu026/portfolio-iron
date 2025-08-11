import React from 'react';
import { Film, Sparkles, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre <span className="text-red-500">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8 text-center">
              <p className="text-xl text-gray-300 leading-relaxed">
                Sou <span className="text-yellow-400 font-semibold">Iron Cruz de Jesus</span>, 
                editor de vídeo com mais de <span className="text-red-400 font-semibold">5 anos de experiência</span> em projetos audiovisuais para criadores de conteúdo, empresas e campanhas comerciais.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                Transformo ideias em histórias visuais impactantes com qualidade técnica, 
                sensibilidade estética e estratégia de engajamento. Cada projeto é uma 
                oportunidade de criar algo único e memorável.
              </p>

              <div className="pt-8">
                <h3 className="text-2xl font-semibold text-white mb-8">Minha Abordagem:</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Film, title: 'Narrativa Visual', desc: 'Cada corte conta uma história' },
                    { icon: Sparkles, title: 'Criatividade Técnica', desc: 'Inovação em cada projeto' },
                    { icon: Target, title: 'Foco no Resultado', desc: 'Estratégia para engajamento' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;