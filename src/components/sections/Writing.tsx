'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { AppPosts } from '@/data';
import { useI18n } from '@/i18n';
import { Reveal } from '@/components/common';

const Writing = () => {
  const { t } = useI18n();

  return (
    <section id='writing' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>{t.writing.eyebrow}</span>
          <h2 className='section-title'>
            {t.writing.titleBefore} <span className='gradient-text'>{t.writing.titleAccent}</span>
          </h2>
          <p className='section-sub'>{t.writing.sub}</p>
        </Reveal>

        <div className='posts-grid'>
          {AppPosts.map((post, idx) => {
            const copy = t.writing.items[post.id as keyof typeof t.writing.items];
            return (
              <Reveal key={post.id} className='post-card' delay={(idx % 2) * 90}>
                <h3 className='post-title'>{copy.title}</h3>
                <p className='post-content'>{copy.content}</p>
                <div className='project-links' style={{ marginTop: 'auto' }}>
                  <a href={post.link} target='_blank' rel='noreferrer' className='project-link'>
                    {t.writing.readPost}
                    <IconArrowUpRight size={14} stroke={2.2} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Writing;
