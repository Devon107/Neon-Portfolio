export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Platform';
  icon?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ProjectStep {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  thumbnail: string;
  process: ProjectStep[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  url?: string | null;
  icon?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export interface AboutInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  image: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  image: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  timezone: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  codepen: string;
}

export interface PortfolioData {
  about: AboutInfo;
  hero: HeroContent;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  testimonials: Testimonial[];
  certifications: Certification[];
  blog: BlogPost[];
  contact: ContactInfo;
  social: SocialLinks;
}