'use client';

import { projects } from '../../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-20 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-12">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
