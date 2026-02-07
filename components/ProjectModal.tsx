import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#0f0f13] w-full max-w-5xl h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/10 animate-[float_0.3s_ease-out]">
        
        {/* Header Image */}
        <div className="h-64 sm:h-80 w-full relative shrink-0">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-[#0f0f13]/50 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-all"
          >
            <X size={24} />
          </button>

          <div className="absolute bottom-6 left-6 md:left-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-neon-green/20 text-neon-green border border-neon-green/30 rounded-full text-xs font-semibold backdrop-blur-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Main Info */}
            <div className="md:col-span-2 space-y-10">
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-neon-cyan block rounded-full"></span>
                  Descripción
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-neon-purple block rounded-full"></span>
                  El Proceso
                </h3>
                <div className="space-y-8">
                  {project.process.map((step, idx) => (
                    <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex flex-col md:flex-row gap-6">
                        {step.imageUrl && (
                          <img 
                            src={step.imageUrl} 
                            alt={step.title} 
                            className="w-full md:w-48 h-32 object-cover rounded-lg"
                          />
                        )}
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-neon-dark text-gray-400 border border-gray-700 flex items-center justify-center text-xs">
                              {idx + 1}
                            </div>
                            {step.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar / Links */}
            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-4">Enlaces</h4>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-3 bg-neon-purple text-white rounded-lg hover:bg-neon-purple/80 transition-all font-medium"
                    >
                      <span>Ver Proyecto</span>
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-3 bg-transparent border border-gray-600 text-gray-300 rounded-lg hover:border-white hover:text-white transition-all font-medium"
                    >
                      <span>Código Fuente</span>
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-4">Tecnologías</h4>
                <ul className="space-y-2">
                  {project.technologies.map(tech => (
                    <li key={tech} className="flex items-center gap-2 text-gray-400 text-sm">
                      <ChevronRight size={14} className="text-neon-cyan" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;