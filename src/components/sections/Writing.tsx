'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { AppPosts } from '@/data';
import { Reveal } from '@/components/common';

const Writing = () => {
  return (
    <section id='writing' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>Writing</span>
          <h2 className='section-title'>
            Latest <span className='gradient-text'>posts</span>
          </h2>
          <p className='section-sub'>
            Thoughts on tools, frameworks, and building for the modern web — shared on LinkedIn.
          </p>
        </Reveal>

        <div className='posts-grid'>
          {AppPosts.map((post, idx) => (
            <Reveal key={post.id} className='post-card' delay={(idx % 2) * 90}>
              <h3 className='post-title'>{post.title}</h3>
              <p className='post-content'>{post.content}</p>
              <div className='project-links' style={{ marginTop: 'auto' }}>
                <a href={post.link} target='_blank' rel='noreferrer' className='project-link'>
                  Read post
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

export default Writing;
