'use client';

import { projects } from '../../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-16 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
