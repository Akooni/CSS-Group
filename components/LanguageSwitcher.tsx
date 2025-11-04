"use client";
import * as React from 'react';
import i18n from '../lib/i18n';

export function LanguageSwitcher() {
  const [lng, setLng] = React.useState(i18n.language);
  React.useEffect(() => {
    const onChanged = (l: string) => setLng(l);
    i18n.on('languageChanged', onChanged);
    return () => i18n.off('languageChanged', onChanged);
  }, []);
  return (
    <div className="flex items-center gap-2 text-xs">
      <button className="btn btn-secondary py-1 px-2" onClick={() => i18n.changeLanguage('en')} aria-pressed={lng.startsWith('en')}>EN</button>
      <button className="btn btn-secondary py-1 px-2" onClick={() => i18n.changeLanguage('ar')} aria-pressed={lng.startsWith('ar')}>العربية</button>
    </div>
  );
}


