'use client';

import { useEffect, useState } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

type Theme = 'dark' | 'light';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as Theme) || 'dark';
    setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
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
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <IconSun size={20} stroke={1.7} /> : <IconMoon size={20} stroke={1.7} />}
    </button>
  );
};

export default ThemeToggle;
