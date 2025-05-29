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
  liveUrl: 'https://portafolio-indol-sigma.vercel.app/',
  githubUrl: 'https://github.com/juanHD269/Portafolio', 
},

  {
    id: 'card-ui-tailwind',
    title: 'Card UI Challenge',
    description: 'Replication of a professional-looking card using Tailwind CSS.',
    goal: 'Accurately recreate a graphical user interface card as part of a technical UI skills test.',
    tools: 'Tailwind CSS, TypeScript',
    role: 'I designed and developed the entire interface from scratch, ensuring visual fidelity to the original design.',
    image: '/images/card.png',
    video: '/video/card.mp4', // opcional
    liveUrl: 'https://examenm2.vercel.app/',
    githubUrl: 'https://github.com/juanHD269/examenm2',
  },

  {
    id: 'coming soon',
    title: 'Coming soon',
    description: 'This space is reserved for future projects Im developing.',
    goal: 'Share new developments that reflect my evolution as a full-stack developer.',
    tools: 'Technologies to be defined based on the focus of the next project.',
    role: 'Will be defined based on the type of project and collaboration.',
    image: '/images/Future.png', // You can use a generic image
    video: '', // No video yet
    liveUrl: '#',
    githubUrl: '#',
  },
];
