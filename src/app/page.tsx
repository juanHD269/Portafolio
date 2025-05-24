'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="pt-36 pb-20 flex flex-col items-center text-center px-6 space-y-6">
      {/* Avatar */}
      <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300">
        <Image
          src="/avatar.png"
          alt="Juan Miguel"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Nombre y descripción */}
      <div className="px-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Juan Miguel Hernández
        </h1>
        <p className="text-blue-400 font-medium mt-2 text-base sm:text-lg">
          Full-stack Developer
        </p>
        <p className="text-gray-300 mt-3 text-sm sm:text-base max-w-md sm:max-w-xl lg:max-w-2xl mx-auto">
          I&apos;m passionate about building digital solutions and exploring the future of software development.
        </p>
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-4">
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
      </div>
    </section>
  );
}
