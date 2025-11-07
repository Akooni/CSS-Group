"use client";
import * as React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useDir } from './providers/DirectionProvider';
import { cn } from '../utils/cn';
import { Sparkles } from 'lucide-react';

export function NavDropdown() {
  const { t } = useTranslation();
  const dir = useDir();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Detect mobile viewport
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when menu is open on mobile
  React.useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#what-is', label: t('nav.whatIs') },
    { href: '#activities', label: t('nav.activities') },
    { href: '#majors', label: t('nav.majors') },
    { href: '#join', label: t('nav.join') },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center justify-center text-secondary',
          'hover:text-primary transition-colors',
          'p-2 rounded-lg',
          isOpen && 'text-primary'
        )}
        aria-label="Navigation menu"
        aria-expanded={isOpen}
      >
        <i className={cn('fa-solid text-2xl', isOpen ? 'fa-xmark' : 'fa-bars')}></i>
      </button>

      {isOpen && (
        <>
          {/* Mobile overlay */}
          {isMobile && (
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
          <div 
            className={cn(
              'p-2 z-50 dropdown-menu',
              isMobile 
                ? 'fixed inset-0 flex flex-col justify-center items-center dropdown-menu-mobile' 
                : 'absolute top-full mt-2 w-56',
              !isMobile && (dir === 'rtl' ? 'left-0' : 'right-0')
            )}
          >
            <nav className={cn('flex flex-col gap-2', isMobile && 'w-full max-w-md px-4')}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    'text-sm uppercase tracking-wide text-white',
                    'hover:text-primary hover:bg-white/10',
                    'px-4 py-3 rounded-lg transition-all',
                    'proximity-hover'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Join the Community - Featured */}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSffQ9x9CS9Vnk3DR0gTfZcsNzBQAAvFCVaWfKm1EqzKIf5Wrw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className={cn(
                  'mt-4 btn btn-primary',
                  'flex items-center justify-center gap-2',
                  'text-base font-bold',
                  isMobile && 'w-full'
                )}
              >
                <Sparkles size={20} />
                {t('cta.join')}
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

