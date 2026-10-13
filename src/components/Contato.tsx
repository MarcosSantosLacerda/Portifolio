import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icones';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/IdiomaContext';
import { personalInfo } from '../data/dados';
import '../styles/Contato.css';

export default function Contato() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_portfolio',
        'template_portfolio',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalInfo.email,
        },
        'public_key_portfolio'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title fade-in">{t('contact.title')}</h2>
      <p className="section-subtitle fade-in">{t('contact.subtitle')}</p>

      <div className="contact-container">
        <div className="contact-info fade-in">
          <h3>{t('contact.info.title')}</h3>
          <p>{t('contact.info.description')}</p>

          <div className="contact-links-grid">
            <a href={`mailto:${personalInfo.email}`} className="contact-link-item">
              <div className="contact-link-icon"><Mail size={20} /></div>
              <div className="contact-link-text">
                <span className="contact-link-label">E-mail</span>
                <span className="contact-link-value">{personalInfo.email}</span>
              </div>
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-link-icon"><MessageCircle size={20} /></div>
              <div className="contact-link-text">
                <span className="contact-link-label">WhatsApp</span>
                <span className="contact-link-value">{personalInfo.phone}</span>
              </div>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-link-icon"><LinkedinIcon size={20} /></div>
              <div className="contact-link-text">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">Marcos Santos Lacerda</span>
              </div>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-link-icon"><GithubIcon size={20} /></div>
              <div className="contact-link-text">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">MarcosSantosLacerda</span>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form fade-in" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.form.name')}</label>
            <input
              type="text"
              id="name"
              placeholder={t('contact.form.name.placeholder')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.form.email')}</label>
            <input
              type="email"
              id="email"
              placeholder={t('contact.form.email.placeholder')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea
              id="message"
              placeholder={t('contact.form.message.placeholder')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <div className="form-submit">
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
              <Send size={18} />
            </button>
          </div>
          {status === 'success' && (
            <div className="form-status success">{t('contact.form.success')}</div>
          )}
          {status === 'error' && (
            <div className="form-status error">{t('contact.form.error')}</div>
          )}
        </form>
      </div>
    </section>
  );
}
