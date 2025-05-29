'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.section
      className="pt-36 pb-20 flex flex-col items-center text-center px-6 space-y-6"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <Image
          src="/avatar.png"
          alt="Juan Miguel"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Nombre y descripción */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="px-2"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Juan Miguel Hernández
        </h1>
        <p className="text-blue-400 font-medium mt-2 text-base sm:text-lg">
          Future Full-stack Developer
        </p>
        <p className="text-gray-300 mt-3 text-sm sm:text-base max-w-md sm:max-w-xl lg:max-w-2xl mx-auto">
          I&apos;m passionate about building digital solutions and exploring the future of software development.
        </p>
      </motion.div>

      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-4"
      >
        <Link href="/about">
          <button className="bg-blue-800 text-white px-6 py-2 rounded text-sm sm:text-base hover:bg-blue-700 transition">
            About Me
          </button>
        </Link>
        <Link href="/projects">
          <button className="bg-blue-800 text-white px-6 py-2 rounded text-sm sm:text-base hover:bg-blue-700 transition">
            View Projects
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-blue-800 text-white px-6 py-2 rounded text-sm sm:text-base hover:bg-blue-700 transition">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
