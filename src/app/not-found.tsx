'use client';

import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { useI18n } from '@/i18n';

export default function NotFoundPage() {
  const { t, dir } = useI18n();

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
          {t.notFound.title}
        </h1>
        <p className='section-sub' style={{ margin: '0 auto 28px', maxWidth: 420 }}>
          {t.notFound.body}
        </p>
        <Link href='/' className='btn btn--primary' style={{ display: 'inline-flex' }}>
          <IconArrowLeft
            size={18}
            stroke={2.2}
            style={dir === 'rtl' ? { transform: 'scaleX(-1)' } : undefined}
          />
          {t.notFound.back}
        </Link>
      </div>
    </section>
  );
}
