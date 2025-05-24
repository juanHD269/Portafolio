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
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto text-center">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-10 shadow-lg border border-white/20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{project.title}</h2>

        {/* Imagen o Video */}
        <div className="overflow-hidden rounded-lg mb-10 max-w-full">
          {project.video ? (
            <video
              src={project.video}
              controls
              autoPlay
              loop
              muted
              className="w-full max-h-[500px] rounded-md shadow-md mx-auto object-cover"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={500}
              className="rounded-md mx-auto hover:scale-105 transition-transform duration-500 object-cover w-full h-auto"
            />
          )}
        </div>

        {/* Detalles del proyecto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left text-gray-300 mb-10">
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">Project Goal</h3>
            <p className="text-sm sm:text-base">{project.goal}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">Tools Used</h3>
            <p className="text-sm sm:text-base">{project.tools}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">My Role</h3>
            <p className="text-sm sm:text-base">{project.role}</p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base"
          >
            View Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
