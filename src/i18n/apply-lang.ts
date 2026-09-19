import type { Locale } from './config';

export const applyDocumentLang = (locale: Locale) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.lang = locale;
  root.dir = locale === 'fa' ? 'rtl' : 'ltr';
  root.setAttribute('data-lang', locale);
  document.title = locale === 'fa' ? 'مصطفی غلامی (mst-ghi)' : 'Mostafa Gholami (mst-ghi)';
};
