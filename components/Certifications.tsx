import React from 'react';
import { Certification } from '../types';
import { Award, ExternalLink } from 'lucide-react';
import * as Icons from 'lucide-react';

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const getIcon = (iconName?: string) => {
    if (!iconName) return <Award size={20} />;
    const Icon = Icons[iconName as keyof typeof Icons];
    return Icon ? <Icon size={20} /> : <Award size={20} />;
  };

  return (
    <section id="certifications" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Certificaciones & Formación</h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative bg-neon-card p-6 rounded-xl border border-white/5 hover:border-neon-purple/30 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-neon-purple/10 text-neon-purple flex-shrink-0 mt-1">
                      {getIcon(cert.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg">{cert.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">{cert.organization}</p>
                      <p className="text-gray-500 text-xs mt-2">{cert.date}</p>
                    </div>
                  </div>

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 text-neon-cyan hover:text-neon-green transition-colors flex-shrink-0"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
