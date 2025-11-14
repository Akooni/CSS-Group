import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { Press_Start_2P, Montserrat, Poppins, Inter, Tajawal, Fira_Code, Work_Sans } from 'next/font/google';
import { DirectionProvider } from '../components/providers/DirectionProvider';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { FontAwesomeLoader } from '../components/FontAwesomeLoader';
import dynamic from 'next/dynamic';
const NavDropdown = dynamic(() => import('../components/NavDropdown').then(m => m.NavDropdown), { ssr: false });

const pixel = Press_Start_2P({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['600','700','800'], subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const firaCode = Fira_Code({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-fira-code' });
const workSans = Work_Sans({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--font-work-sans' });
const tajawal = Tajawal({ weight: ['400','500','700'], subsets: ['arabic'], variable: '--font-arabic' });

export const metadata: Metadata = {
  title: 'Computer Science Society (CSS)',
  description: 'Join the Computer Science Society — learn, build, and grow with peers.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body className={`min-h-screen antialiased ${firaCode.variable} ${workSans.variable} ${tajawal.variable} ${workSans.className}`}>
        {/* Sticky top navigation */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
          <nav className="container-max flex items-center justify-between h-16">
            <Link href="#" className="flex items-center gap-3 font-bold tracking-wider">
              <Image
                src="/logo.png"
                alt="Computer Science Society logo"
                width={72}
                height={72}
                className="logo-img"
                priority
              />
              <span className={`${pixel.className} uppercase text-sm md:text-base`}>
                <span className="text-primary">COMPUTER SCIENCE</span> <span className="text-secondary">SOCIETY</span>
              </span>
            </Link>
            <NavDropdown />
          </nav>
        </header>

        <FontAwesomeLoader />
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



