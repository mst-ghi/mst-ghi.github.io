'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useI18n } from '@/i18n';
import { LanguageToggle, ThemeToggle } from '@/components/common';

const LINK_HREFS = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'vibe', href: '#vibecoding' },
  { key: 'soft', href: '#softskills' },
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
  const [overflow, setOverflow] = useState({ left: false, right: false });
  const scrollerRef = useRef<HTMLDivElement>(null);

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

  const updateOverflow = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const links = [...el.children];
    if (!links.length) {
      setOverflow({ left: false, right: false });
      return;
    }
    const box = el.getBoundingClientRect();
    const edges = links.map((node) => node.getBoundingClientRect());
    const minLeft = Math.min(...edges.map((rect) => rect.left));
    const maxRight = Math.max(...edges.map((rect) => rect.right));
    setOverflow({
      left: minLeft < box.left - 2,
      right: maxRight > box.right + 2,
    });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateOverflow();
    el.addEventListener('scroll', updateOverflow, { passive: true });
    const observer = new ResizeObserver(updateOverflow);
    observer.observe(el);
    window.addEventListener('resize', updateOverflow);
    return () => {
      el.removeEventListener('scroll', updateOverflow);
      observer.disconnect();
      window.removeEventListener('resize', updateOverflow);
    };
  }, [updateOverflow, t.nav]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    const current = el?.querySelector<HTMLElement>('.nav__link.is-active');
    if (!el || !current) return;
    const elBox = el.getBoundingClientRect();
    const linkBox = current.getBoundingClientRect();
    const delta = linkBox.left + linkBox.width / 2 - (elBox.left + elBox.width / 2);
    if (Math.abs(delta) > 4) {
      el.scrollBy({ left: delta, behavior: 'smooth' });
    }
  }, [active]);

  return (
    <nav className='nav'>
      <div className={`nav__inner ${scrolled ? 'is-scrolled' : ''}`}>
        <a href='#top' className='nav__brand' aria-label={t.nav.home}>
          <span className='brand-avatar'>
            <Image src='/me-square.png' alt={t.name} width={36} height={36} />
          </span>
          <span>mst-ghi</span>
        </a>

        <div
          className={`nav__scroller${overflow.left ? ' is-overflow-left' : ''}${overflow.right ? ' is-overflow-right' : ''}`}
        >
          <div className='nav__links' ref={scrollerRef}>
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
