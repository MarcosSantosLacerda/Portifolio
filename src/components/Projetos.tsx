import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icones';
import { useLanguage } from '../context/IdiomaContext';
import { projects } from '../data/dados';
import '../styles/Projetos.css';

export default function Projects() {
  const { lang, t } = useLanguage();

  const sortedProjects = [...projects].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <section className="section" id="projects">
      <h2 className="section-title fade-in">{t('projects.title')}</h2>
      <p className="section-subtitle fade-in">{t('projects.subtitle')}</p>

      <div className="projects-timeline">
        {sortedProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-item fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="project-card">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
                loading="lazy"
              />
              <div className="project-content">
                <span className="project-date">
                  {new Date(`${project.date}-02T00:00:00`).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </span>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description[lang]}</p>
                <div className="project-techs">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GithubIcon size={16} /> {t('projects.viewCode')}
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={16} /> {t('projects.viewDemo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
