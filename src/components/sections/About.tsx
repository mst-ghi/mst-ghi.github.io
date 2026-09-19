'use client';

import { MarqueeSkills } from '@/data';
import { useI18n } from '@/i18n';
import { Reveal } from '@/components/common';

const About = () => {
  const { t } = useI18n();
  const stats = [
    { value: '9+', label: t.stats.experience },
    { value: '20+', label: t.stats.projects },
    { value: '10+', label: t.stats.companies },
    { value: '2', label: t.stats.opensource },
  ];

  return (
    <>
      <section id='about' className='section'>
        <div className='container'>
          <Reveal className='section-head'>
            <span className='eyebrow'>{t.about.eyebrow}</span>
            <h2 className='section-title'>
              {t.about.titleBefore} <span className='gradient-text'>{t.about.titleAccent}</span>
            </h2>
          </Reveal>

          <div className='about-grid'>
            <Reveal className='about-card'>
              <p>{t.description}</p>
              <p>{t.about.p2}</p>
              <p style={{ marginBottom: 0 }}>{t.about.p3}</p>
            </Reveal>

            <Reveal className='about-facts' delay={120}>
              <div className='fact'>
                <span className='fact__label'>{t.about.education}</span>
                <span className='fact__value'>
                  {t.about.degree}
                  <br />
                  <small>{t.about.school}</small>
                </span>
              </div>
              <div className='fact'>
                <span className='fact__label'>{t.about.basedIn}</span>
                <span className='fact__value'>{t.about.address}</span>
              </div>
              <div className='fact'>
                <span className='fact__label'>{t.about.languages}</span>
                <span className='fact__value'>{t.about.spoken}</span>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className='stats' style={{ marginTop: 24 }}>
              {stats.map((stat) => (
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
            <span key={`${skill}-${idx}`} className='marquee__item'>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
