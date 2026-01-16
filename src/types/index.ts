export interface Project {
  title: string;
  handle: string;
  type: string;
  resume: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  images: string[];
  link: string;
}

export interface Comp {
  name: string;
  number: string; 
  description: string;
  details: string[];
  projects: string[];
  order: number;
  color: string;
}

