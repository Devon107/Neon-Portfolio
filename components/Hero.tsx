import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-neon-dark">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 z-10 text-center">
        <h2 className="text-neon-cyan font-mono text-sm md:text-base mb-4 tracking-widest uppercase">
          Diseñador UI/UX & Desarrollador Full Stack
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Construyendo el <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
            Futuro Digital
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
          Transformo ideas complejas en experiencias web fluidas, escalables y visualmente impactantes. 
          Especialista en React, Next.js y Diseño Moderno.
        </p>

        <div className="flex justify-center space-x-6 mb-16">
          <SocialButton icon={<Github size={20} />} href="#" />
          <SocialButton icon={<Linkedin size={20} />} href="#" />
          <SocialButton icon={<Mail size={20} />} href="#contact" />
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  );
};

const SocialButton: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a 
    href={href}
    className="p-3 rounded-full border border-white/10 hover:border-neon-purple hover:bg-neon-purple/10 hover:text-white text-gray-400 transition-all duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

export default Hero;