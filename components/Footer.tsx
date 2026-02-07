import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020203] py-8 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-gray-500 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} NeonDev Portfolio. Todos los derechos reservados.
        </div>
        <div className="flex space-x-6 text-gray-500">
          <a href="#" className="hover:text-neon-cyan transition-colors">Twitter</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;