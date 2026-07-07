'use client';

import { IconBrandGithub, IconArrowUpRight } from '@tabler/icons-react';
import { AppOpenSource } from '@/data';
import { Reveal } from '@/components/common';

const OpenSource = () => {
  return (
    <section id='opensource' className='section section--tight'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>Open source</span>
          <h2 className='section-title'>
            Repositories &amp; <span className='gradient-text'>libraries</span>
          </h2>
          <p className='section-sub'>
            Reusable building blocks and reference projects — visit my GitHub to explore more.
          </p>
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
              <p className='os-desc'>{repo.description}</p>
              <div className='project-tags'>
                {repo.stack.map((tech) => (
                  <span key={tech} className='tag'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='project-links'>
                <a href={repo.url} target='_blank' rel='noreferrer' className='project-link'>
                  View on GitHub
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
