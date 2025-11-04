"use client";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export function NavLinks() {
  const { t } = useTranslation();
  return (
    <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wide text-secondary">
      <Link href="#about" className="hover-glow px-1">{t('nav.about')}</Link>
      <Link href="#what-is" className="hover-glow px-1">{t('nav.whatIs')}</Link>
      <Link href="#activities" className="hover-glow px-1">{t('nav.activities')}</Link>
      <Link href="#majors" className="hover-glow px-1">{t('nav.majors')}</Link>
      <Link href="#join" className="hover-glow px-1">{t('nav.join')}</Link>
    </div>
  );
}


