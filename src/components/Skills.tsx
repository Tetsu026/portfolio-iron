import React from 'react';
import { Scissors, Palette, Monitor, Smartphone, Film, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Scissors,
      title: 'Edição Profissional',
      description: 'Cortes precisos, transições fluidas e narrativa envolvente',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Motion Graphics',
      description: 'Animações e efeitos visuais que capturam a atenção',
      gradient: 'from-yellow-400 to-yellow-500'
    },
    {
      icon: Palette,
      title: 'Color Grading',
      description: 'Correção e estilização de cores para impacto visual',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Conteúdo para TikTok, Reels e Shorts',
      description: 'Edição otimizada para algoritmos e viralização',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Monitor,
      title: 'Edição para YouTube',
      description: 'Conteúdo longo com retenção e engajamento',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Film,
      title: 'Comerciais e Institucionais',
      description: 'Vídeos corporativos com qualidade broadcast',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas <span className="text-yellow-400">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Domínio técnico e criativo em todas as etapas da produção audiovisual
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-800 hover:border-gray-700"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {skill.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {skill.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${skill.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-6">
            Pronto para transformar sua ideia em realidade?
          </p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
          >
            Vamos Conversar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;