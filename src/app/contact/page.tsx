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
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="px-6 py-12 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-800 text-white px-6 py-2 rounded shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          {sent ? 'Sent!' : 'Send'}
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-6 text-3xl text-white [&>a]:hover:text-blue-300 transition-colors duration-200">
        <a
          href="https://www.linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/juanHD269"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:juanmiguelhernandezdelgado88@gmail.com"
          className="hover:text-blue-700"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
