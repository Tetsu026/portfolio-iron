import React from 'react';
import { ExternalLink, Play, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Comercial Empresarial',
      description: 'Produção para campanha de marca com identidade forte e acabamento profissional.',
      techniques: 'edição multicâmera, color grading, motion graphics, CTA com trilha sonora',
      videoUrl: 'https://www.youtube.com/watch?v=c80MH1zZEIk',
      thumbnail: 'https://i.imgur.com/c1PFksX.jpg',
      category: 'Comercial',
      gradient: 'from-red-500 to-red-600'
    },
    {
      id: 2,
      title: 'Demonstração de Aplicativo',
      description: 'Edição otimizada para viralização em redes sociais com estética mobile.',
      techniques: 'hook sonoro, cortes rítmicos, animação de texto estilo TikTok, formato Shorts',
      videoUrl: 'https://www.youtube.com/watch?v=nh6IGUBqC_A',
      thumbnail: 'https://i.imgur.com/hpQZc14.jpeg',
      category: 'App Demo',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Conteúdo Digital (YouTube/Instagram)',
      description: 'Edição para criadores digitais com foco em engajamento multiplataforma.',
      techniques: 'edição ágil, memes estratégicos, legendas animadas, trilha com ritmo',
      videoUrl: 'https://www.youtube.com/watch?v=aKFI6WQ_W6w',
      thumbnail: 'https://i.imgur.com/rGyJS4e.jpg',
      category: 'Social Media',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'Conteúdo TikTok/Reels (Versão PRO)',
      description: 'Conteúdo otimizado para o algoritmo e tendências virais.',
      techniques: 'hook nos 3s iniciais, texto animado em 45 graus, sincronização com música',
      videoUrl: 'https://www.youtube.com/watch?v=nLs7eAlVRZk',
      thumbnail: 'https://i.imgur.com/tFf5boO.jpeg',
      category: 'Viral Content',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 5,
      title: 'Vlog de Viagem',
      description: 'Edição dinâmica capturando paisagens, emoções e momentos únicos da jornada.',
      techniques: 'transições suaves, correção de cor, ambientação sonora e ritmo envolvente',
      videoUrl: 'https://www.youtube.com/watch?v=JCI661NxRJM',
      thumbnail: 'https://img.youtube.com/vi/JCI661NxRJM/maxresdefault.jpg',
      category: 'Vlog',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 6,
      title: 'Vídeo de Curiosidades',
      description: 'Conteúdo educativo com narrativa envolvente e elementos visuais marcantes.',
      techniques: 'storytelling com narração, motion graphics, efeitos sonoros, cortes criativos',
      videoUrl: 'https://www.youtube.com/watch?v=wzY5mLJdTb8',
      thumbnail: 'https://i.imgur.com/hBMR6Y0.jpeg',
      category: 'Educativo',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos em <span className="text-red-500">Destaque</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais impactantes, demonstrando versatilidade 
            e qualidade técnica em diferentes formatos e plataformas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-black rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border border-gray-800 hover:border-gray-600"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600';
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold rounded-full`}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                {/* Techniques */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wide">
                      Técnicas
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {project.techniques}
                  </p>
                </div>
                {/* Action Button */}
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  <Play className="w-4 h-4" />
                  <span>Assistir Vídeo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Gostou do que viu? <span className="text-red-500">Vamos criar algo incrível juntos!</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Cada projeto é único e desenvolvido sob medida para atender suas necessidades específicas. 
            Entre em contato para discutirmos sua próxima produção.
          </p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
