'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_9ry76cs',
        'template_bz5lr47',
        form.current,
        '7KAvQu-_v9WiYGkDH'
      )
      .then(() => {
        setSent(true);
        form.current?.reset();
        setTimeout(() => setSent(false), 3000); // Oculta el mensaje después de 3s
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 text-left text-white"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded text-sm sm:text-base"
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded text-sm sm:text-base"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded text-sm sm:text-base"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-800 text-white px-6 py-2 rounded shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Send
        </button>

        {/* ✅ Mensaje visual de confirmación */}
        {sent && (
          <p className="mt-4 text-green-400 text-sm animate-pulse">
            Message sent successfully!
          </p>
        )}
      </form>

      <div className="flex justify-center gap-6 mt-10 text-3xl text-white">
        <a
          href="https://www.linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/juanHD269"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:juanmiguelhernandezdelgado88@gmail.com"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
