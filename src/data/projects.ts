export type Project = {
  id: string;
  title: string;
  description: string;
  video: string;
  image: string;
  goal: string;
  tools: string;
  role: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
{
  id: 'portfolio-website',
  title: 'Portfolio Website',
  description: 'Personal site to showcase my projects and skills.',
  image: '/images/portfolio-preview.png',
  video: '/video/portfolio-demo.mp4',
  goal: 'Create a portfolio to showcase my skills and previous work as a full-stack developer.',
  tools: 'React, Tailwind CSS, Figma, GitHub',
  role: 'I designed and developed the full project: from layout in Figma to deployment.',
  liveUrl: 'https://portafolio-indol-sigma.vercel.app/', // ← tu enlace real aquí
  githubUrl: 'https://github.com/juanHD269/Portafolio', // ← tu repo real aquí
},

  {
    id: 'nuevo-proyecto',
    title: 'Mi Nuevo Proyecto',
    description: 'Descripción corta del nuevo proyecto.',
    goal: 'Explica el propósito del nuevo proyecto.',
    tools: 'Tecnologías usadas como JavaScript, Node.js, etc.',
    role: 'Tu rol en este proyecto.',
    image: '/images/card.png',
    video: '/videos/nuevo-proyecto.mp4', // opcional
    liveUrl: 'https://examenm2.vercel.app/',
    githubUrl: 'https://github.com/juanHD269/examenm2',
  },

    {
    id: 'nuevo-proyecto',
    title: 'Mi Nuevo Proyecto',
    description: 'Descripción corta del nuevo proyecto.',
    goal: 'Explica el propósito del nuevo proyecto.',
    tools: 'Tecnologías usadas como JavaScript, Node.js, etc.',
    role: 'Tu rol en este proyecto.',
    image: '/nuevo-proyecto.png',
    video: '/videos/nuevo-proyecto.mp4', // opcional
    liveUrl: 'https://mi-nuevo-proyecto.vercel.app',
    githubUrl: 'https://github.com/juanHD269/nuevo-proyecto',
  },

    {
    id: 'nuevo-proyecto',
    title: 'Mi Nuevo Proyecto',
    description: 'Descripción corta del nuevo proyecto.',
    goal: 'Explica el propósito del nuevo proyecto.',
    tools: 'Tecnologías usadas como JavaScript, Node.js, etc.',
    role: 'Tu rol en este proyecto.',
    image: '/nuevo-proyecto.png',
    video: '/videos/nuevo-proyecto.mp4', // opcional
    liveUrl: 'https://mi-nuevo-proyecto.vercel.app',
    githubUrl: 'https://github.com/juanHD269/nuevo-proyecto',
  },
];
