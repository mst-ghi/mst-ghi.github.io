'use client';

import { IconSparkles } from '@tabler/icons-react';
import { VibeCodingItems } from '@/data';
import { useI18n } from '@/i18n';
import { Reveal } from '@/components/common';

const VibeCoding = () => {
  const { t } = useI18n();

  return (
    <section id='vibecoding' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>{t.vibe.eyebrow}</span>
          <h2 className='section-title'>
            {t.vibe.titleBefore} <span className='gradient-text'>{t.vibe.titleAccent}</span>
          </h2>
          <p className='section-sub'>{t.vibe.sub}</p>
        </Reveal>

        <div className='highlight-grid'>
          {VibeCodingItems.map((item, idx) => {
            const copy = t.vibe.items[item.id as keyof typeof t.vibe.items];
            return (
              <Reveal key={item.id} className='highlight-card' delay={(idx % 3) * 80}>
                <span className='highlight-card__icon highlight-card__icon--amber'>
                  <IconSparkles size={20} stroke={1.8} />
                </span>
                <h3 className='highlight-card__title'>{copy.name}</h3>
                <p className='highlight-card__desc'>{copy.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VibeCoding;
