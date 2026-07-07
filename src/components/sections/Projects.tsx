'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { AppProjects } from '@/data';
import { Reveal } from '@/components/common';

const handleMove = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

const Projects = () => {
  return (
    <section id='projects' className='section'>
      <div className='container'>
        <Reveal className='section-head'>
          <span className='eyebrow'>Selected work</span>
          <h2 className='section-title'>
            Featured <span className='gradient-text'>projects</span>
          </h2>
          <p className='section-sub'>
            A selection of platforms, dashboards, and products I&apos;ve architected and built
            end-to-end.
          </p>
        </Reveal>

        <div className='projects-grid'>
          {AppProjects.map((project, idx) => (
            <Reveal
              key={project.name}
              delay={(idx % 2) * 90}
              onMouseMove={handleMove}
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
            >
              <div className='project-top'>
                <span className='project-cat'>{project.category}</span>
                {project.featured && <span className='project-star'>★ Featured</span>}
              </div>
              <h3 className='project-name'>{project.name}</h3>
              <p className='project-desc'>{project.description}</p>
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
                    {link.label}
                    <IconArrowUpRight size={14} stroke={2.2} />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
