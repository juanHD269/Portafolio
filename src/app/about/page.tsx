'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaJs,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiDjango,
} from 'react-icons/si';

export default function About() {
  return (
    <motion.section
      className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-20 max-w-5xl mx-auto text-center space-y-10"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I’m a 5th-semester Software Engineering student at Universidad Cooperativa de Colombia with hands-on experience
        in full-stack development. My main stack includes JavaScript, Python, Java, and modern frameworks like React,
        Next.js and Django. I enjoy creating intuitive user interfaces and backend systems. I’m constantly learning new
        technologies and best practices to build better and more scalable applications. I’m passionate about technology,
        clean code, and problem-solving. I’m also comfortable working in agile teams, handling databases, and deploying
        apps to the cloud.
      </motion.p>

      <motion.a
        href="/cv.pdf"
        download
        className="inline-block bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-200"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Download CV
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-4xl sm:text-5xl">
          <FaHtml5 className="text-orange-600 hover-spin" title="HTML5" />
          <FaCss3Alt className="text-blue-500 hover-spin" title="CSS3" />
          <FaJs className="text-yellow-400 hover-spin" title="JavaScript" />
          <SiTypescript className="text-blue-600 hover-spin" title="TypeScript" />
          <FaReact className="text-cyan-400 hover-spin" title="React" />
          <SiNextdotjs className="text-white hover-spin" title="Next.js" />
          <SiTailwindcss className="text-sky-400 hover-spin" title="Tailwind CSS" />
          <FaNodeJs className="text-green-600 hover-spin" title="Node.js" />
          <FaJava className="text-orange-500 hover-spin" title="Java" />
          <FaPython className="text-yellow-300 hover-spin" title="Python" />
          <SiDjango className="text-green-800 hover-spin" title="Django" />
          <SiMongodb className="text-green-500 hover-spin" title="MongoDB" />
          <SiMysql className="text-blue-700 hover-spin" title="MySQL" />
          <FaDatabase className="text-gray-400 hover-spin" title="SQL Databases" />
          <FaGithub className="text-white hover-spin" title="GitHub" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
        <div className="text-gray-300 space-y-1">
          <p className="text-base sm:text-lg font-medium">2023 – Present</p>
          <p className="text-base sm:text-lg">Software Engineering Student</p>
          <p className="text-sm text-gray-400">Universidad Cooperativa de Colombia</p>
        </div>
      </motion.div>

      {/* NUEVA SECCIÓN: TESTIMONIALS */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-white">Testimonials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-gray-200 shadow-md">
            <p className="italic mb-4">
              “Juan Miguel is a dedicated and skilled developer. Working with him was always a pleasure.”
            </p>
            <h4 className="font-semibold text-white">Luis Miguel</h4>
            <p className="text-sm text-gray-400">Software Engineering Student</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-gray-200 shadow-md">
            <p className="italic mb-4">
              “He brings creative solutions to the table and communicates effectively with the team.”
            </p>
            <h4 className="font-semibold text-white">Sebastian Alejandro</h4>
            <p className="text-sm text-gray-400">Software Engineering Student</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
