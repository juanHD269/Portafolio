'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'My Projects', href: '/projects' },
  { name: 'Contact Me', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-wide">Juan M. Portfolio</span>
        <div className="flex space-x-6 text-sm md:text-base font-medium">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={clsx(
                  'cursor-pointer hover:text-blue-300 transition-colors duration-200',
                  pathname === item.href && 'text-blue-400 underline underline-offset-4'
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
