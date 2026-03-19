'use client';
import { useEffect, useState, useTransition } from 'react';

const LANGS = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'AR', flag: '🇩🇿' },
];

export default function LanguageSwitcher() {
  const [, startTransition] = useTransition();
  const [current, setCurrent] = useState('en');

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
    setCurrent(match?.[1] || 'en');
  }, []);

  function switchLang(lang: string) {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`;
    startTransition(() => window.location.reload());
  }

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border bg-muted/40 p-0.5">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLang(l.code)}
          title={l.label}
          className={`px-2 py-1 rounded-md text-xs font-semibold transition-colors ${
            current === l.code
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {l.flag} {l.label}
        </button>
      ))}
    </div>
  );
}
