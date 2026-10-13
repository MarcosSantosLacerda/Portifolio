import { Code2, Server, Wrench } from 'lucide-react';
import { useLanguage } from '../context/IdiomaContext';
import { skills } from '../data/dados';
import '../styles/Sobre.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <h2 className="section-title fade-in">{t('about.title')}</h2>
      <p className="section-subtitle fade-in">{t('about.subtitle')}</p>

      <div className="about-container">
        <div className="about-text fade-in">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>

        <div className="about-skills fade-in">
          <div className="skill-category">
            <h3><Code2 size={20} /> {t('about.skills.frontend')}</h3>
            <div className="skill-tags">
              {skills.frontend.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3><Server size={20} /> {t('about.skills.backend')}</h3>
            <div className="skill-tags">
              {skills.backend.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3><Wrench size={20} /> {t('about.skills.tools')}</h3>
            <div className="skill-tags">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
