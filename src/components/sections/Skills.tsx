'use client';

import { IconServer2, IconLayoutGrid, IconCode } from '@tabler/icons-react';
import { AppSkills } from '@/data';
import { Reveal } from '@/components/common';

const iconMap: Record<string, React.ComponentType<{ size?: number; stroke?: number }>> = {
  server: IconServer2,
  layout: IconLayoutGrid,
  code: IconCode,
};

const Skills = () => {
  return (
    <section id='skills' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>Tech stack</span>
          <h2 className='section-title'>
            Skills &amp; <span className='gradient-text'>capabilities</span>
          </h2>
          <p className='section-sub'>
            A full-stack toolkit spanning resilient backends, polished frontends, and the
            architecture that ties them together.
          </p>
        </Reveal>

        <div className='skills-grid'>
          {AppSkills.map((group, idx) => {
            const Icon = iconMap[group.icon] ?? IconCode;
            return (
              <Reveal key={group.title} className='skill-card' delay={idx * 110}>
                <div className={`skill-card__icon skill-card__icon--${group.accent}`}>
                  <Icon size={24} stroke={1.8} />
                </div>
                <h3 className='skill-card__title'>{group.title}</h3>
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
