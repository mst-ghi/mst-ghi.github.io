'use client';

import { AppExperience } from '@/data';
import { Reveal } from '@/components/common';

const Experience = () => {
  return (
    <section id='experience' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>Career</span>
          <h2 className='section-title'>
            Work <span className='gradient-text'>experience</span>
          </h2>
          <p className='section-sub'>
            8+ years shipping products across startups and agencies — from microservices backends to
            design-system-driven frontends.
          </p>
        </Reveal>

        <div className='timeline'>
          {AppExperience.map((exp, idx) => (
            <Reveal key={exp.company + exp.period} className='tl-item' delay={idx * 60}>
              <div className='tl-card'>
                <div className='tl-head'>
                  <span className='tl-company'>{exp.company}</span>
                  <span className={`badge ${exp.current ? 'badge--live' : ''}`}>
                    {exp.current ? '● ' : ''}
                    {exp.type}
                  </span>
                  <span className='tl-period'>{exp.period}</span>
                </div>
                <ul className='tl-points'>
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
