"use client";
import * as React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useDir } from './providers/DirectionProvider';
import { cn } from '../utils/cn';

export function NavDropdown() {
  const { t } = useTranslation();
  const dir = useDir();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

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
        <div 
          className="absolute top-full mt-2 w-56 p-2 z-50 dropdown-menu"
          style={dir === 'rtl' ? { left: 0 } : { right: 0 }}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  'text-sm uppercase tracking-wide text-secondary',
                  'hover:text-primary hover:bg-white/5',
                  'px-4 py-2 rounded-lg transition-colors',
                  'proximity-hover'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

