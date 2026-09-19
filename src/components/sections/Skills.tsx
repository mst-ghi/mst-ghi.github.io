'use client';

import { IconServer2, IconLayoutGrid, IconCode, IconBrandGolang } from '@tabler/icons-react';
import { AppSkills } from '@/data';
import { useI18n } from '@/i18n';
import { Reveal } from '@/components/common';

const iconMap: Record<string, React.ComponentType<{ size?: number; stroke?: number }>> = {
  server: IconServer2,
  layout: IconLayoutGrid,
  code: IconCode,
  go: IconBrandGolang,
};

const Skills = () => {
  const { t } = useI18n();

  return (
    <section id='skills' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>{t.skills.eyebrow}</span>
          <h2 className='section-title'>
            {t.skills.titleBefore} <span className='gradient-text'>{t.skills.titleAccent}</span>
          </h2>
          <p className='section-sub'>{t.skills.sub}</p>
        </Reveal>

        <div className='skills-grid'>
          {AppSkills.map((group, idx) => {
            const Icon = iconMap[group.icon] ?? IconCode;
            const title =
              t.skills.groups[group.title as keyof typeof t.skills.groups] ?? group.title;
            return (
              <Reveal key={group.title} className='skill-card' delay={idx * 110}>
                <div className={`skill-card__icon skill-card__icon--${group.accent}`}>
                  <Icon size={24} stroke={1.8} />
                </div>
                <h3 className='skill-card__title'>{title}</h3>
                <div className='pills'>
                  {group.skills.map((skill) => (
                    <span key={skill} className='pill'>
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
