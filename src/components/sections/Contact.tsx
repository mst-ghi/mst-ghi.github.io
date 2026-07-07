'use client';

import Image from 'next/image';
import { IconMail, IconArrowUpRight, IconPhone } from '@tabler/icons-react';
import { AppData } from '@/data';
import { Reveal, SocialLinks } from '@/components/common';

const Contact = () => {
  return (
    <section id='contact' className='section'>
      <div className='container'>
        <Reveal className='contact-card'>
          <span className='eyebrow'>Get in touch</span>
          <h2 className='contact-title'>
            Let&apos;s build something <span className='gradient-text'>great</span>
          </h2>
          <p className='contact-sub'>
            I&apos;m open to full-time roles, freelance projects, and collaborations. Drop me a line
            and I&apos;ll get back to you soon.
          </p>

          <div className='contact-actions'>
            <a href={`mailto:${AppData.email}`} className='btn btn--primary'>
              <IconMail size={18} stroke={1.8} />
              {AppData.email}
            </a>
            <a href={`tel:${AppData.phone}`} className='btn'>
              <IconPhone size={18} stroke={1.8} />
              {AppData.phone}
            </a>
            <a href={AppData.resume} target='_blank' rel='noreferrer' className='btn'>
              Resume
              <IconArrowUpRight size={16} stroke={2.2} />
            </a>
          </div>

          <div className='contact-socials'>
            <SocialLinks />
          </div>
        </Reveal>
      </div>

      <footer className='footer'>
        <div className='container footer__inner'>
          <div className='footer__brand'>
            <span className='brand-avatar'>
              <Image src='/me-square.png' alt={AppData.name} width={36} height={36} />
            </span>
            {AppData.name}
          </div>
          <span className='footer__meta'>
            © {new Date().getFullYear()} {AppData.name} · Built with Next.js &amp; Mantine
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
