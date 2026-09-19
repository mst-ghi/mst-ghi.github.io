'use client';

import Link from 'next/link';
import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';
import { AppPosts } from '@/data';
import { useI18n } from '@/i18n';

export default function PostsPage() {
  const { t, dir } = useI18n();

  return (
    <section className='section' style={{ paddingTop: 140 }}>
      <div className='container'>
        <Link href='/' className='btn btn--sm' style={{ display: 'inline-flex', marginBottom: 28 }}>
          <IconArrowLeft
            size={16}
            stroke={2}
            style={dir === 'rtl' ? { transform: 'scaleX(-1)' } : undefined}
          />
          {t.writing.backHome}
        </Link>

        <div className='section-head'>
          <span className='eyebrow'>{t.writing.eyebrow}</span>
          <h1 className='section-title'>
            {t.writing.titleAll} <span className='gradient-text'>{t.writing.titleAccent}</span>
          </h1>
        </div>

        <div className='posts-grid'>
          {AppPosts.map((post) => {
            const copy = t.writing.items[post.id as keyof typeof t.writing.items];
            return (
              <article key={post.id} className='post-card'>
                <h3 className='post-title'>{copy.title}</h3>
                <p className='post-content'>{copy.content}</p>
                <div className='project-links' style={{ marginTop: 'auto' }}>
                  <a href={post.link} target='_blank' rel='noreferrer' className='project-link'>
                    {t.writing.readPost}
                    <IconArrowUpRight size={14} stroke={2.2} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
