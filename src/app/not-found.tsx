'use client';

import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';

export default function NotFoundPage() {
  return (
    <section
      className='section'
      style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center' }}
    >
      <div className='container' style={{ textAlign: 'center' }}>
        <div
          className='gradient-text'
          style={{ fontSize: 'clamp(90px, 22vw, 200px)', fontWeight: 800, lineHeight: 1 }}
        >
          404
        </div>
        <h1 className='section-title' style={{ marginTop: 12 }}>
          Page not found
        </h1>
        <p className='section-sub' style={{ margin: '0 auto 28px', maxWidth: 420 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href='/' className='btn btn--primary' style={{ display: 'inline-flex' }}>
          <IconArrowLeft size={18} stroke={2.2} />
          Back to home
        </Link>
      </div>
    </section>
  );
}
