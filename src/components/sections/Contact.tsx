'use client';

import Image from 'next/image';
import { IconBrandLinkedin, IconBrandTelegram, IconMail, IconPhone } from '@tabler/icons-react';
import { AppData } from '@/data';
import { useI18n } from '@/i18n';
import { Reveal, ResumeLinks, SocialLinks } from '@/components/common';

const Contact = () => {
  const { t } = useI18n();

  return (
    <section id='contact' className='section'>
      <div className='container'>
        <Reveal className='contact-card'>
          <span className='eyebrow'>{t.contact.eyebrow}</span>
          <h2 className='contact-title'>
            {t.contact.titleBefore} <span className='gradient-text'>{t.contact.titleAccent}</span>
          </h2>
          <p className='contact-sub'>{t.contact.sub}</p>

          <div className='contact-actions'>
            <a href={`mailto:${AppData.email}`} className='btn btn--primary'>
              <IconMail size={18} stroke={1.8} />
              {AppData.email}
            </a>
            <a href={`tel:${AppData.phone}`} className='btn'>
              <IconPhone size={18} stroke={1.8} />
              {AppData.phone}
            </a>
            <a href={AppData.socials.telegram} target='_blank' rel='noreferrer' className='btn'>
              <IconBrandTelegram size={18} stroke={1.8} />
              {t.contact.telegram}
            </a>
            <a href={AppData.socials.linkedin} target='_blank' rel='noreferrer' className='btn'>
              <IconBrandLinkedin size={18} stroke={1.8} />
              {t.contact.linkedin}
            </a>
            <ResumeLinks />
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
              <Image src='/me-square.png' alt={t.name} width={36} height={36} />
            </span>
            {t.name}
          </div>
          <span className='footer__meta'>
            © {new Date().getFullYear()} {t.name} · {t.contact.footerBuilt}
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
