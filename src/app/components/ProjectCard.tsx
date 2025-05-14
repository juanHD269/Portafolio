import { Project } from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-80">
      {/* Imagen */}
      <Image
        src={project.image}
        alt={project.title}
        width={320}
        height={180}
        className="rounded-t-xl object-cover w-full h-48"
      />

      <div className="p-4 text-center">
        <h3 className="text-white text-lg font-semibold">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <Link href={`/${project.id}`}>
          <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
