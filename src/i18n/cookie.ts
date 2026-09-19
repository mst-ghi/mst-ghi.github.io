import { defaultLocale, isLocale, LANG_COOKIE, LANG_COOKIE_MAX_AGE, type Locale } from './config';

export const readLangCookie = (): Locale => {
  if (typeof document === 'undefined') return defaultLocale;
  const match = document.cookie.match(new RegExp(`(?:^|; )${LANG_COOKIE}=([^;]*)`));
  const value = match ? decodeURIComponent(match[1]) : '';
  return isLocale(value) ? value : defaultLocale;
};

export const writeLangCookie = (locale: Locale) => {
  if (typeof document === 'undefined') return;
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${LANG_COOKIE}=${locale}; Path=/; Max-Age=${LANG_COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
};
