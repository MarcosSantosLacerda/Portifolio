import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/IdiomaContext';
import { personalInfo } from '../data/dados';
import '../styles/Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">{t('hero.greeting')}</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-role">{t('hero.role')}</p>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-buttons">
            <Link to="/projetos" className="btn btn-primary">
              {t('hero.cta.projects')} <ArrowRight size={18} />
            </Link>
            <Link to="/contato" className="btn btn-outline">
              {t('hero.cta.contact')} <Mail size={18} />
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">{t('hero.stat.projects')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">{t('hero.stat.tech')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2º</div>
              <div className="stat-label">{t('hero.stat.experience')}</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className="hero-avatar"
          />
        </div>
      </div>
    </section>
  );
}
