'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'My Projects', href: '/projects' },
  { name: 'Contact Me', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-wide">Juan M. Portfolio</span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={clsx(
                  'cursor-pointer hover:text-blue-300 transition',
                  pathname === item.href && 'text-blue-400 underline underline-offset-4'
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 text-sm font-medium bg-slate-900 border-t border-slate-700">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setMenuOpen(false)}>
              <span
                className={clsx(
                  'cursor-pointer hover:text-blue-300 transition',
                  pathname === item.href && 'text-blue-400 underline underline-offset-4'
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
