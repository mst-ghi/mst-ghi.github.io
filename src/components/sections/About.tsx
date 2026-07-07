'use client';

import { AppData, MarqueeSkills } from '@/data';
import { Reveal } from '@/components/common';

const About = () => {
  return (
    <>
      <section id='about' className='section'>
        <div className='container'>
          <Reveal className='section-head'>
            <span className='eyebrow'>About me</span>
            <h2 className='section-title'>
              Turning complex problems into <span className='gradient-text'>clean products</span>
            </h2>
          </Reveal>

          <div className='about-grid'>
            <Reveal className='about-card'>
              <p>{AppData.description}</p>
              <p style={{ marginBottom: 0 }}>
                I care deeply about developer experience, scalable architecture, and delightful UI —
                bringing trendy, motion-rich interfaces to life while keeping the codebase
                maintainable across large monorepos.
              </p>
            </Reveal>

            <Reveal className='about-facts' delay={120}>
              <div className='fact'>
                <span className='fact__label'>Education</span>
                <span className='fact__value'>
                  {AppData.education.degree}
                  <br />
                  <small>{AppData.education.school}</small>
                </span>
              </div>
              <div className='fact'>
                <span className='fact__label'>Based in</span>
                <span className='fact__value'>{AppData.address}</span>
              </div>
              <div className='fact'>
                <span className='fact__label'>Languages</span>
                <span className='fact__value'>
                  {AppData.languages.map((l) => `${l.name} (${l.level})`).join(' · ')}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className='stats' style={{ marginTop: 24 }}>
              {AppData.stats.map((stat) => (
                <div key={stat.label} className='stat'>
                  <div className='stat__value'>{stat.value}</div>
                  <div className='stat__label'>{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className='marquee' aria-hidden='true'>
        <div className='marquee__track'>
          {[...MarqueeSkills, ...MarqueeSkills].map((skill, idx) => (
            <span key={idx} className='marquee__item'>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
