import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-neon-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Proyectos Destacados</h2>
            <p className="text-gray-400">Una selección de mi trabajo más reciente.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-neon-cyan hover:text-white transition-colors">
            Ver GitHub <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-neon-purple/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="h-64 md:h-80 w-full overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-100 group-hover:via-black/80 transition-all duration-500"></div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-2 flex gap-2 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.technologies.slice(0, 3).map(t => (
                    <span key={t} className="text-xs font-bold text-neon-cyan uppercase tracking-wider">{t}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">{project.title}</h3>
                <p className="text-gray-300 line-clamp-2 text-sm group-hover:text-white transition-colors">{project.shortDescription}</p>
                
                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Ver Detalles <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Projects;