'use client';

import { FaHtml5, FaJs, FaJava, FaPython } from 'react-icons/fa';

export default function About() {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-20 max-w-5xl mx-auto text-center space-y-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>

      <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
        Im a Software Engineering student passionate about building full-stack applications. I work with Java, Python,
        JavaScript, and HTML. I’m excited about the future of tech and always exploring ways to grow as a developer.
      </p>

      <a
        href="/cv.pdf"
        download
        className="inline-block bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-200"
      >
        Download CV
      </a>

      <div>
        <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-4xl sm:text-5xl text-sky-200">
          <FaHtml5 title="HTML5" />
          <FaJs title="JavaScript" />
          <FaJava title="Java" />
          <FaPython title="Python" />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
        <div className="text-gray-300 space-y-1">
          <p className="text-base sm:text-lg font-medium">2023 – Present</p>
          <p className="text-base sm:text-lg">Software Engineering Student</p>
          <p className="text-sm text-gray-400">Universidad Cooperativa de Colombia</p>
        </div>
      </div>
    </section>
  );
}
