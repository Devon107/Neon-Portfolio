import React from 'react';
import { Experience as ExperienceType } from '../types';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experiencia Profesional</h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-transparent opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center md:items-start gap-8`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-dark border-2 border-neon-cyan rounded-full z-10 shadow-[0_0_10px_#00d4ff]"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-neon-card p-6 rounded-2xl border border-white/5 hover:border-neon-purple/30 transition-all duration-300 shadow-lg group">
                    <div className={`flex items-center gap-2 mb-2 text-neon-cyan font-bold ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-xl text-white font-bold mb-1">{exp.role}</h3>
                    <p className="text-sm text-gray-500 mb-4 font-mono">{exp.period}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;