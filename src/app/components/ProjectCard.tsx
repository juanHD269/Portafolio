import { Project } from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const isPlaceholder = project.liveUrl === '#' && project.githubUrl === '#';

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 w-full max-w-xs overflow-hidden flex flex-col">
      {/* Imagen con aspecto fijo */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={project.image || '/placeholder-project.png'}
          alt={project.title}
          fill
          className="object-cover rounded-t-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 text-center flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-white text-lg font-semibold">{project.title}</h3>
          <p className="text-gray-300 text-sm mt-1 mb-4">{project.description}</p>
        </div>

        <Link href={isPlaceholder ? '#' : `/${project.id}`}>
          <button
            disabled={isPlaceholder}
            className={`px-5 py-2 rounded text-sm sm:text-base transition duration-200 ${
              isPlaceholder
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-blue-800 text-white hover:bg-blue-700'
            }`}
          >
            {isPlaceholder ? 'Coming Soon' : 'View More'}
          </button>
        </Link>
      </div>
    </div>
  );
}
