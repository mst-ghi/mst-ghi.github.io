export const locales = ['en', 'fa'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const LANG_COOKIE = 'lang';
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const isLocale = (value: string | null | undefined): value is Locale =>
  value === 'en' || value === 'fa';
