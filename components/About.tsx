import React from 'react';
import { AboutInfo, Skill } from '../types';
import { Code, Database, Layout, PenTool } from 'lucide-react';

interface AboutProps {
  about: AboutInfo;
  skills: Skill[];
}

const About: React.FC<AboutProps> = ({ about, skills }) => {
  return (
    <section id="about" className="py-24 bg-neon-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">

          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Más que código, <span className="text-neon-cyan">creo experiencias.</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {about.bio}
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Mi enfoque es minimalista pero potente. Entiendo que detrás de cada línea de código
              hay un usuario final esperando resolver un problema o disfrutar de un servicio.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Stat number="50+" label="Proyectos Completados" />
              <Stat number="5+" label="Años de Experiencia" />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-neon-purple pl-4">Stack Tecnológico</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-neon-card p-4 rounded-xl border border-white/5 hover:border-neon-cyan/50 hover:bg-white/5 transition-all duration-300 group cursor-default"
                >
                  <div className="text-gray-300 group-hover:text-white font-medium flex items-center gap-2">
                    {getIcon(skill.category)}
                    {skill.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="border-l border-white/20 pl-4">
    <div className="text-3xl font-bold text-neon-purple">{number}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

const getIcon = (category: string) => {
  switch(category) {
    case 'Frontend': return <Layout size={16} className="text-blue-400"/>;
    case 'Backend': return <Database size={16} className="text-green-400"/>;
    case 'Tools': return <PenTool size={16} className="text-yellow-400"/>;
    default: return <Code size={16} className="text-purple-400"/>;
  }
}

export default About;