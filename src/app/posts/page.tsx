'use client';

import Link from 'next/link';
import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';
import { AppPosts } from '@/data';

export default function PostsPage() {
  return (
    <section className='section' style={{ paddingTop: 140 }}>
      <div className='container'>
        <Link href='/' className='btn btn--sm' style={{ display: 'inline-flex', marginBottom: 28 }}>
          <IconArrowLeft size={16} stroke={2} />
          Back to home
        </Link>

        <div className='section-head'>
          <span className='eyebrow'>Writing</span>
          <h1 className='section-title'>
            All <span className='gradient-text'>posts</span>
          </h1>
        </div>

        <div className='posts-grid'>
          {AppPosts.map((post) => (
            <article key={post.id} className='post-card'>
              <h3 className='post-title'>{post.title}</h3>
              <p className='post-content'>{post.content}</p>
              <div className='project-links' style={{ marginTop: 'auto' }}>
                <a href={post.link} target='_blank' rel='noreferrer' className='project-link'>
                  Read post
                  <IconArrowUpRight size={14} stroke={2.2} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
