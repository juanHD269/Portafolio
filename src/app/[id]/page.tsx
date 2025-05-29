'use client';

import { useParams } from 'next/navigation';
import { projects, Project } from '../../data/projects';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p: Project) => p.id === id);

  if (!project) {
    return (
      <div className="text-center mt-20 text-white text-xl font-semibold">
        Project not found.
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-10 shadow-lg border border-white/20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          {project.title}
        </h2>

        {/* Imagen o Video */}
        <motion.div
          className="overflow-hidden rounded-lg mb-10 max-w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
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
        </motion.div>

        {/* Detalles del proyecto */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left text-gray-300 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[['Project Goal', project.goal], ['Tools Used', project.tools], ['My Role', project.role]].map(
            ([title, content], index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
                <p className="text-sm sm:text-base">{content}</p>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
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
        </motion.div>

        {/* Botón para volver */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="inline-block text-blue-400 hover:text-blue-200 text-sm sm:text-base underline transition-colors duration-200"
          >
            ← Back to Projects
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
