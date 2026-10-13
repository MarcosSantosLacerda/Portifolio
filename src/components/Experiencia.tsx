import { Briefcase, GraduationCap, Code, Globe } from 'lucide-react';
import { useLanguage } from '../context/IdiomaContext';
import { experiences } from '../data/dados';
import type { Experience as ExperienceType } from '../data/dados';
import '../styles/Experiencia.css';

function getIcon(type: ExperienceType['type']) {
  switch (type) {
    case 'work': return <Briefcase size={24} />;
    case 'education': return <GraduationCap size={24} />;
    case 'freelance': return <Code size={24} />;
    case 'opensource': return <Globe size={24} />;
  }
}

export default function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section className="section" id="experience">
      <h2 className="section-title fade-in">{t('experience.title')}</h2>
      <p className="section-subtitle fade-in">{t('experience.subtitle')}</p>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card fade-in">
            <div className="experience-icon">
              {getIcon(exp.type)}
            </div>
            <div className="experience-details">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role[lang]}</h3>
                <span className="experience-period">{exp.period[lang]}</span>
              </div>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-description">{exp.description[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
