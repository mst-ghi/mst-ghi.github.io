'use client';

import { IconUsers } from '@tabler/icons-react';
import { SoftSkillItems } from '@/data';
import { useI18n } from '@/i18n';
import { Reveal } from '@/components/common';

const SoftSkills = () => {
  const { t } = useI18n();

  return (
    <section id='softskills' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>{t.soft.eyebrow}</span>
          <h2 className='section-title'>
            {t.soft.titleBefore} <span className='gradient-text'>{t.soft.titleAccent}</span>
          </h2>
          <p className='section-sub'>{t.soft.sub}</p>
        </Reveal>

        <div className='highlight-grid'>
          {SoftSkillItems.map((item, idx) => {
            const copy = t.soft.items[item.id as keyof typeof t.soft.items];
            return (
              <Reveal key={item.id} className='highlight-card' delay={(idx % 3) * 80}>
                <span className='highlight-card__icon highlight-card__icon--green'>
                  <IconUsers size={20} stroke={1.8} />
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

export default SoftSkills;
