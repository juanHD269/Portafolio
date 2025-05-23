'use client';

import { useParams } from 'next/navigation';
import { projects, Project } from '../../data/projects';
import Image from 'next/image';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p: Project) => p.id === id);

  if (!project) {
    return <div className="text-center mt-20 text-white">Project not found.</div>;
  }

  return (
    <section className="min-h-screen px-6 py-20 max-w-5xl mx-auto text-center">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6">{project.title}</h2>

        {/* Imagen o Video */} 
        <div className="overflow-hidden rounded-lg mb-10">
          {project.video ? (
            <video
              src={project.video}
              controls
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-md shadow-md mx-auto"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={500}
              className="rounded-md mx-auto hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
        
        {/* Detalles del proyecto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-gray-300">
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">Project Goal</h3>
            <p className="text-sm">{project.goal}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">Tools Used</h3>
            <p className="text-sm">{project.tools}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">My Role</h3>
            <p className="text-sm">{project.role}</p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
