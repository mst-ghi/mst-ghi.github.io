'use client';

import { useEffect, useState } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useI18n } from '@/i18n';

type Theme = 'dark' | 'light';

const ThemeToggle = () => {
  const { t } = useI18n();
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as Theme) || 'dark';
    setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'light' ? '#f4f5fa' : '#0a0b0d');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type='button'
      className='icon-btn theme-toggle'
      onClick={toggle}
      aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
      title={theme === 'dark' ? t.theme.light : t.theme.dark}
    >
      {theme === 'dark' ? <IconSun size={20} stroke={1.7} /> : <IconMoon size={20} stroke={1.7} />}
    </button>
  );
};

export default ThemeToggle;
