'use client';

import { useEffect, useState } from 'react';
import { IconMenu2, IconX, IconArrowUpRight } from '@tabler/icons-react';
import { AppData } from '@/data';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
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
        <a href='#top' className='nav__brand' aria-label='Home'>
          <span className='nav__brand-badge'>MG</span>
          <span>mst-ghi</span>
        </a>

        <div className='nav__links'>
          {LINKS.map((link) => (
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
          <a
            href={AppData.resume}
            target='_blank'
            rel='noreferrer'
            className='btn btn--primary btn--sm nav__desktop-cta'
          >
            Resume
            <IconArrowUpRight size={16} stroke={2.2} />
          </a>
          <button
            type='button'
            className='nav__burger'
            aria-label='Toggle menu'
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className='nav__mobile'>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='nav__link'
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={AppData.resume}
            target='_blank'
            rel='noreferrer'
            className='btn btn--primary btn--sm'
            style={{ marginTop: 8 }}
            onClick={() => setOpen(false)}
          >
            Download Resume
            <IconArrowUpRight size={16} stroke={2.2} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
