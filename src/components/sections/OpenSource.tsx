'use client';

import { IconBrandGithub, IconArrowUpRight } from '@tabler/icons-react';
import { AppOpenSource } from '@/data';
import { useI18n } from '@/i18n';
import { Reveal } from '@/components/common';

const OpenSource = () => {
  const { t } = useI18n();

  return (
    <section id='opensource' className='section section--tight'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>{t.opensource.eyebrow}</span>
          <h2 className='section-title'>
            {t.opensource.titleBefore}{' '}
            <span className='gradient-text'>{t.opensource.titleAccent}</span>
          </h2>
          <p className='section-sub'>{t.opensource.sub}</p>
        </Reveal>

        <div className='os-grid'>
          {AppOpenSource.map((repo, idx) => (
            <Reveal key={repo.name} className='os-card' delay={idx * 100}>
              <div className='os-head'>
                <span className='os-icon'>
                  <IconBrandGithub size={22} stroke={1.7} />
                </span>
                <span className='os-name'>{repo.name}</span>
              </div>
              <p className='os-desc'>
                {t.opensource.items[repo.name as keyof typeof t.opensource.items]}
              </p>
              <div className='project-tags'>
                {repo.stack.map((tech) => (
                  <span key={tech} className='tag'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='project-links'>
                <a href={repo.url} target='_blank' rel='noreferrer' className='project-link'>
                  {t.opensource.viewGithub}
                  <IconArrowUpRight size={14} stroke={2.2} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
