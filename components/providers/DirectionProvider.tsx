"use client";
import * as React from 'react';
import i18n from '../../lib/i18n';

type Dir = 'ltr' | 'rtl';
const DirectionContext = React.createContext<Dir>('ltr');
export const useDir = () => React.useContext(DirectionContext);

export function DirectionProvider({ children }: { children: React.ReactNode }) {
  const [dir, setDir] = React.useState<Dir>((i18n.language || 'en').startsWith('ar') ? 'rtl' : 'ltr');

  React.useEffect(() => {
    const apply = (lng: string) => {
      const d: Dir = lng.startsWith('ar') ? 'rtl' : 'ltr';
      setDir(d);
      document.documentElement.setAttribute('dir', d);
      document.documentElement.setAttribute('lang', lng);
    };
    apply(i18n.language);
    const onChanged = (lng: string) => apply(lng);
    i18n.on('languageChanged', onChanged);
    return () => i18n.off('languageChanged', onChanged);
  }, []);

  return <DirectionContext.Provider value={dir}>{children}</DirectionContext.Provider>;
}


