import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { Press_Start_2P } from 'next/font/google';
import { DirectionProvider } from '../components/providers/DirectionProvider';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import dynamic from 'next/dynamic';
const NavLinks = dynamic(() => import('../components/NavLinks').then(m => m.NavLinks), { ssr: false });

const pixel = Press_Start_2P({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Computer Science Society (CSS)',
  description: 'Join the Computer Science Society — learn, build, and grow with peers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* Sticky top navigation */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
          <nav className="container-max flex items-center justify-between h-16">
            <Link href="#" className="flex items-center gap-3 font-bold tracking-wider">
              <Image
                src="/logo.png"
                alt="Computer Science Society logo"
                width={56}
                height={56}
                className="logo-img"
                priority
              />
              <span className={`${pixel.className} uppercase text-sm md:text-base`}>
                <span className="text-primary">COMPUTER SCIENCE</span> <span className="text-secondary">SOCIETY</span>
              </span>
            </Link>
            <NavLinks />
            <div className="md:hidden text-sm text-secondary">Menu</div>
          </nav>
        </header>

        <DirectionProvider>
          <main>{children}</main>
        </DirectionProvider>

        <div className="fixed bottom-4 right-4 z-50">
          <LanguageSwitcher />
        </div>

      </body>
    </html>
  );
}



