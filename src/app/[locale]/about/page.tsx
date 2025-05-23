'use client';

import { FaHtml5, FaJs, FaJava, FaPython } from 'react-icons/fa';

export default function About() {
  return (
    <section className="min-h-screen px-6 py-20 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        Im a Software Engineering student passionate about building full-stack applications. I work with Java, Python, JavaScript, and HTML. I’m excited about the future of tech and always exploring ways to grow as a developer.
      </p>

      <a
        href="/cv.pdf"
        download
        className="inline-block bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-200 mb-12"
      >
        Download CV
      </a>

      <h3 className="text-2xl font-semibold mb-4 text-white">Skills</h3>
      <div className="flex justify-center gap-12 text-5xl text-sky-200 mb-16">
        <FaHtml5 title="HTML5" /> 
        <FaJs title="JavaScript" />
        <FaJava title="Java" />
        <FaPython title="Python" />
      </div>


      <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
      <div className="text-gray-300 space-y-2">
        <p className="text-lg font-medium">2023 – Present</p>
        <p className="text-lg">Software Engineering Student</p>
        <p className="text-sm text-gray-400">Universidad Cooperativa de Colombia</p>
      </div>
    </section>
  );
}
