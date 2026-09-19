'use client';

import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';
import { applyDocumentLang } from './apply-lang';
import { defaultLocale, type Locale } from './config';
import { readLangCookie, writeLangCookie } from './cookie';
import { en, type Dictionary } from './locales/en';
import { fa } from './locales/fa';

const dictionaries: Record<Locale, Dictionary> = { en, fa };

interface LanguageContextValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useLayoutEffect(() => {
    const saved = readLangCookie();
    setLocaleState(saved);
    applyDocumentLang(saved);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeLangCookie(next);
    applyDocumentLang(next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: locale === 'fa' ? 'rtl' : 'ltr',
      t: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useI18n must be used within LanguageProvider');
  }
  return ctx;
};
