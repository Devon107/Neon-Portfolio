import { Project, Experience, Skill } from './types';
import { 
  Code2, Layout, Database, Cloud, ShoppingBag, Globe, 
  Terminal, Server, Cpu, Layers
} from 'lucide-react';

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'AWS', category: 'Backend' },
  { name: 'WordPress', category: 'Platform' },
  { name: 'Shopify', category: 'Platform' },
  { name: 'Webflow', category: 'Platform' },
  { name: 'Figma', category: 'Tools' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechSolutions Inc.",
    period: "2021 - Presente",
    description: "Lideré la migración de un monolito legado a una arquitectura de micro-frontends usando React y Next.js. Optimicé el rendimiento web mejorando el Core Web Vitals en un 40%.",
    technologies: ["React", "TypeScript", "AWS", "Jest"]
  },
  {
    id: 2,
    role: "Web Developer Freelance",
    company: "Independiente",
    period: "2018 - 2021",
    description: "Desarrollo de sitios e-commerce de alto impacto para marcas de moda. Especialización en temas custom de Shopify y plugins de WordPress.",
    technologies: ["Shopify", "Liquid", "WordPress", "PHP", "CSS3"]
  },
  {
    id: 3,
    role: "Junior Web Dev",
    company: "Creative Agency",
    period: "2016 - 2018",
    description: "Maquetación de diseños UI/UX pixel-perfect. Colaboración estrecha con diseñadores para implementar animaciones complejas.",
    technologies: ["HTML5", "SASS", "JavaScript", "Gulp"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon E-commerce",
    shortDescription: "Plataforma de venta de ropa urbana con diseño futurista.",
    fullDescription: "Un e-commerce completo desarrollado desde cero. El objetivo era crear una experiencia de compra inmersiva que reflejara la identidad cyberpunk de la marca. Incluye carrito en tiempo real, pasarela de pagos customizada y un panel de administración.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    thumbnail: "https://picsum.photos/id/103/600/400",
    process: [
      {
        title: "Investigación y Wireframing",
        description: "Analizamos a la competencia y creamos wireframes de baja fidelidad enfocados en la usabilidad móvil.",
        imageUrl: "https://picsum.photos/id/1/600/300"
      },
      {
        title: "Diseño UI Dark Mode",
        description: "Implementamos una paleta de colores neón sobre fondo oscuro para resaltar los productos.",
        imageUrl: "https://picsum.photos/id/6/600/300"
      },
      {
        title: "Desarrollo e Integración",
        description: "Integración con Stripe API y gestión de estado global con Zustand.",
        imageUrl: "https://picsum.photos/id/4/600/300"
      }
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Dashboard Analítico AWS",
    shortDescription: "Visualización de datos de servidores en tiempo real.",
    fullDescription: "Dashboard para administradores de sistemas que permite monitorear el estado de instancias EC2 y buckets S3. Utiliza WebSockets para actualizaciones en tiempo real y D3.js para gráficos complejos.",
    technologies: ["React", "AWS SDK", "D3.js", "Node.js"],
    thumbnail: "https://picsum.photos/id/107/600/400",
    process: [
      {
        title: "Arquitectura de Datos",
        description: "Diseño de la estructura de datos para soportar miles de eventos por segundo.",
        imageUrl: "https://picsum.photos/id/60/600/300"
      },
      {
        title: "Implementación de Gráficos",
        description: "Creación de componentes de gráficos reutilizables con D3.js.",
        imageUrl: "https://picsum.photos/id/20/600/300"
      }
    ]
  },
  {
    id: 3,
    title: "Portafolio Creativo Webflow",
    shortDescription: "Sitio web para una agencia de marketing digital.",
    fullDescription: "Desarrollo de un sitio altamente interactivo utilizando Webflow. Se implementaron animaciones complejas al hacer scroll y transiciones de página suaves.",
    technologies: ["Webflow", "JavaScript", "GSAP"],
    thumbnail: "https://picsum.photos/id/119/600/400",
    process: [
      {
        title: "Diseño en Figma",
        description: "Prototipado de alta fidelidad con interacciones definidas.",
        imageUrl: "https://picsum.photos/id/48/600/300"
      },
      {
        title: "Desarrollo en Webflow",
        description: "Traducción pixel-perfect del diseño a Webflow, optimizando para SEO.",
        imageUrl: "https://picsum.photos/id/96/600/300"
      }
    ]
  },
    {
    id: 4,
    title: "App Gestión de Tareas",
    shortDescription: "Aplicación SaaS para gestión de equipos remotos.",
    fullDescription: "SaaS enfocado en la productividad. Permite asignar tareas, trackear tiempo y generar reportes automáticos.",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    thumbnail: "https://picsum.photos/id/180/600/400",
    process: [
      {
        title: "MVP",
        description: "Lanzamiento rápido de funcionalidades core.",
        imageUrl: "https://picsum.photos/id/160/600/300"
      }
    ]
  }
];
