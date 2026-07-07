'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { IconArrowUpRight, IconMail } from '@tabler/icons-react';
import { AppData } from '@/data';
import { SocialLinks } from '@/components/common';

const Hero = () => {
  const sequence = AppData.headlineStacks.flatMap((s) => [s, 1800]);

  return (
    <header id='top' className='hero'>
      <div className='container'>
        <div className='hero__grid'>
          <div>
            <span className='hero__badge'>
              <span className='dot' />
              Available for new opportunities
            </span>

            <h1 className='hero__title'>
              <span className='hi'>Hi, I&apos;m</span>
              <span className='gradient-text'>Mostafa Gholami</span>
            </h1>

            <p className='hero__role'>
              {AppData.headline} <span className='accent'>· {AppData.subHeadline}</span>
            </p>

            <TypeAnimation
              sequence={sequence}
              wrapper='span'
              cursor
              repeat={Infinity}
              className='hero__type'
              speed={55}
            />

            <p className='hero__desc'>{AppData.description}</p>

            <div className='hero__actions'>
              <a href='#projects' className='btn btn--primary'>
                View my work
                <IconArrowUpRight size={18} stroke={2.2} />
              </a>
              <a href={`mailto:${AppData.email}`} className='btn'>
                <IconMail size={18} stroke={1.8} />
                Get in touch
              </a>
            </div>

            <div className='hero__socials'>
              <SocialLinks />
            </div>
          </div>

          <div className='hero__visual'>
            <div className='avatar-wrap'>
              <div className='avatar-ring' />
              <div className='avatar-img'>
                <Image src='/me-square.png' alt={AppData.name} width={400} height={400} priority />
              </div>
              <div className='avatar-chip avatar-chip--1'>
                <span className='emoji'>⚡</span> 8+ yrs
              </div>
              <div className='avatar-chip avatar-chip--2'>
                <span className='emoji'>🧩</span> Fullstack
              </div>
              <div className='avatar-chip avatar-chip--3'>
                <span className='emoji'>🚀</span> Next.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
