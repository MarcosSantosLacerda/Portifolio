import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icones';
import { useLanguage } from '../context/IdiomaContext';
import { personalInfo } from '../data/dados';
import '../styles/Rodape.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p className="footer-text">
          &copy; {year} <span>{personalInfo.name}</span>. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
