import { Project } from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 w-full max-w-xs sm:max-w-sm">
      {/* Imagen */}
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={200}
        className="rounded-t-xl object-cover w-full h-48 sm:h-52"
      />

      <div className="p-4 text-center">
        <h3 className="text-white text-lg font-semibold">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <Link href={`/${project.id}`}>
          <button className="bg-blue-800 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
