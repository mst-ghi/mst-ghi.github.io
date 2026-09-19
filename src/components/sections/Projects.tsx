'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { AppProjects } from '@/data';
import { useI18n } from '@/i18n';
import { Reveal } from '@/components/common';

const handleMove = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

const Projects = () => {
  const { t } = useI18n();

  return (
    <section id='projects' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>{t.projects.eyebrow}</span>
          <h2 className='section-title'>
            {t.projects.titleBefore} <span className='gradient-text'>{t.projects.titleAccent}</span>
          </h2>
          <p className='section-sub'>{t.projects.sub}</p>
        </Reveal>

        <div className='projects-grid'>
          {AppProjects.map((project, idx) => {
            const copy = t.projects.items[project.name as keyof typeof t.projects.items];
            return (
              <Reveal
                key={project.name}
                delay={(idx % 2) * 90}
                onMouseMove={handleMove}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              >
                <div className='project-top'>
                  <span className='project-cat'>{copy.category}</span>
                  {project.featured && (
                    <span className='project-star'>★ {t.projects.featured}</span>
                  )}
                </div>
                <h3 className='project-name'>{copy.name}</h3>
                <p className='project-desc'>{copy.description}</p>
                <div className='project-tags'>
                  {project.stack.map((tech) => (
                    <span key={tech} className='tag'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='project-links'>
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target='_blank'
                      rel='noreferrer'
                      className='project-link'
                    >
                      {t.projects.linkLabels[link.label as keyof typeof t.projects.linkLabels] ??
                        link.label}
                      <IconArrowUpRight size={14} stroke={2.2} />
                    </a>
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

export default Projects;
