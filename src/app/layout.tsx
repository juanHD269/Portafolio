import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Juan Miguel Portfolio',
  description: 'My developer portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white font-sans">
        <Navbar />
        <main className="pt-24 px-6 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
