'use client';

import { AppExperience } from '@/data';
import { useI18n } from '@/i18n';
import { Reveal } from '@/components/common';

const Experience = () => {
  const { t } = useI18n();

  return (
    <section id='experience' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>{t.experience.eyebrow}</span>
          <h2 className='section-title'>
            {t.experience.titleBefore}{' '}
            <span className='gradient-text'>{t.experience.titleAccent}</span>
          </h2>
          <p className='section-sub'>{t.experience.sub}</p>
        </Reveal>

        <div className='timeline'>
          {AppExperience.map((exp, idx) => {
            const copy = t.experience.items[exp.company as keyof typeof t.experience.items];
            return (
              <Reveal key={exp.company + copy.period} className='tl-item' delay={idx * 60}>
                <div className='tl-card'>
                  <div className='tl-head'>
                    <span className='tl-company'>{exp.company}</span>
                    <span className={`badge ${exp.current ? 'badge--live' : ''}`}>
                      {exp.current ? '● ' : ''}
                      {copy.type}
                    </span>
                    <span className='tl-period'>{copy.period}</span>
                  </div>
                  <ul className='tl-points'>
                    {copy.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
