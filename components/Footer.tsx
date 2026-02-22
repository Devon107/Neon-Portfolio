import React from 'react';
import { ContactInfo, SocialLinks } from '../types';

interface FooterProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLinks;
}

const Footer: React.FC<FooterProps> = ({ contactInfo, socialLinks }) => {
  return (
    <footer className="bg-[#020203] py-8 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-gray-500 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} {contactInfo.location} Portfolio. Todos los derechos reservados.
        </div>
        <div className="flex space-x-6 text-gray-500">
          <a href={socialLinks.twitter} className="hover:text-neon-cyan transition-colors">Twitter</a>
          <a href={socialLinks.linkedin} className="hover:text-neon-cyan transition-colors">LinkedIn</a>
          <a href={socialLinks.github} className="hover:text-neon-cyan transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;