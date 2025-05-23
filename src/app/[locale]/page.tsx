'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <section className="pt-36 pb-20 flex flex-col items-center text-center px-6 space-y-6">
      {/* Avatar */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300">
        <Image
          src="/avatar.png"
          alt="Juan Miguel"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Nombre y título */}
      <div>
        <h1 className="text-4xl font-bold text-white">{t('title')}</h1>
        <p className="text-blue-400 font-medium mt-1 text-lg">{t('subtitle')}</p>
        <p className="text-gray-300 mt-2 max-w-xl">{t('description')}</p>
      </div>

      {/* Botones */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Link href="/about">
          <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            {t('about')}
          </button>
        </Link>
        <Link href="/projects">
          <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            {t('projects')}
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            {t('contact')}
          </button>
        </Link>
      </div>
    </section>
  );
}
