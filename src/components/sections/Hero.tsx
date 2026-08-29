'use client';

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

            <p className='hero__role'>{AppData.headline}</p>

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
        </div>
      </div>
    </header>
  );
};

export default Hero;
