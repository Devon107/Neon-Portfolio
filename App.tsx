import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { usePortfolioData } from './src/hooks/usePortfolioData';

const App: React.FC = () => {
  const data = usePortfolioData();

  return (
    <div className="bg-neon-dark min-h-screen text-slate-200 selection:bg-neon-purple selection:text-white">
      <Navbar />
      <main>
        <Hero data={data.hero} />
        <About about={data.about} skills={data.skills} />
        <Experience experiences={data.experience} />
        <Projects projects={data.projects} />
        <Testimonials testimonials={data.testimonials} />
        <Certifications certifications={data.certifications} />
        <Blog posts={data.blog} />
        <Contact contactInfo={data.contact} />
      </main>
      <Footer contactInfo={data.contact} socialLinks={data.social} />
    </div>
  );
};

export default App;