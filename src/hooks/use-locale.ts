'use client';
import { useEffect, useState } from 'react';
import type { Locale } from '@/types';

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
    setLocaleState((match?.[1] || 'en') as Locale);
  }, []);

  function setLocale(lang: Locale) {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`;
    setLocaleState(lang);
    window.location.reload();
  }

  return { locale, setLocale, isRTL: locale === 'ar' };
}
