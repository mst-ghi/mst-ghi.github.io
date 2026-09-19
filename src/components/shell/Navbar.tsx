'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useI18n } from '@/i18n';
import { LanguageToggle, ThemeToggle } from '@/components/common';

const LINK_HREFS = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'opensource', href: '#opensource' },
  { key: 'writing', href: '#writing' },
  { key: 'contact', href: '#contact' },
] as const;

const Navbar = () => {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#about');

  const links = LINK_HREFS.map((link) => ({
    href: link.href,
    label: t.nav[link.key],
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = LINK_HREFS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className='nav'>
      <div className={`nav__inner ${scrolled ? 'is-scrolled' : ''}`}>
        <a href='#top' className='nav__brand' aria-label={t.nav.home}>
          <span className='brand-avatar'>
            <Image src='/me-square.png' alt={t.name} width={36} height={36} />
          </span>
          <span>mst-ghi</span>
        </a>

        <div className='nav__links'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav__link ${active === link.href ? 'is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='nav__right'>
          <ThemeToggle />
          <LanguageToggle />
          <button
            type='button'
            className='nav__burger'
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className='nav__mobile'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='nav__link'
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
