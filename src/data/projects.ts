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
}

  // podés agregar más...
];
