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