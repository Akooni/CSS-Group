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
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };
    // Check immediately
    checkMobile();
    // Also check after a short delay to ensure window is available
    const timeoutId = setTimeout(checkMobile, 100);
    window.addEventListener('resize', checkMobile);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkMobile);
    };
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

  // Close dropdown when clicking outside (desktop only)
  React.useEffect(() => {
    if (isMobile) return; // Don't handle click outside on mobile, overlay handles it
    
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
  }, [isOpen, isMobile]);

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

      {/* Desktop dropdown */}
      {isOpen && !isMobile && (
        <div 
          className={cn(
            'absolute top-full mt-2 w-56 p-2 z-50 dropdown-menu',
            dir === 'rtl' ? 'left-0' : 'right-0'
          )}
        >
          <nav className="flex flex-col gap-2">
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
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSffQ9x9CS9Vnk3DR0gTfZcsNzBQAAvFCVaWfKm1EqzKIf5Wrw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className={cn(
                'mt-4 btn btn-primary',
                'flex items-center justify-center gap-2',
                'text-base font-bold'
              )}
            >
              <Sparkles size={20} />
              {t('cta.join')}
            </Link>
          </nav>
        </div>
      )}

      {/* Mobile slide-in drawer */}
      {isOpen && isMobile && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 z-[100]"
            onClick={() => setIsOpen(false)}
          />
          {/* Drawer */}
          <div 
            className={cn(
              'fixed top-0 bottom-0 w-80 max-w-[85vw] flex flex-col dropdown-menu-mobile dropdown-slide z-[101]',
              dir === 'rtl' ? 'left-0' : 'right-0'
            )}
          >
            {/* Header with close button */}
            <div className="flex justify-end p-4 border-b border-white/10">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>
            
            {/* Navigation content */}
            <nav className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    'text-base uppercase tracking-wide text-white',
                    'hover:text-primary hover:bg-white/10',
                    'px-4 py-4 rounded-lg transition-all',
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
                  'mt-6 btn btn-primary',
                  'flex items-center justify-center gap-2',
                  'text-base font-bold w-full py-4'
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

