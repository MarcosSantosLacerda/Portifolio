import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/IdiomaContext';
import { personalInfo } from '../data/dados';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fecharMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={fecharMenu}>
          &lt;<span>{personalInfo.name.split(' ')[0]}</span>/&gt;
        </Link>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link
            to="/sobre"
            className={location.pathname === '/sobre' ? 'active' : ''}
            onClick={fecharMenu}
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/projetos"
            className={location.pathname === '/projetos' ? 'active' : ''}
            onClick={fecharMenu}
          >
            {t('nav.projects')}
          </Link>
          <Link
            to="/experiencia"
            className={location.pathname === '/experiencia' ? 'active' : ''}
            onClick={fecharMenu}
          >
            {t('nav.experience')}
          </Link>
          <Link
            to="/contato"
            className={location.pathname === '/contato' ? 'active' : ''}
            onClick={fecharMenu}
          >
            {t('nav.contact')}
          </Link>

          <div className="lang-toggle">
            <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
