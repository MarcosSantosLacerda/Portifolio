import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.experience': 'Trajetória',
    'nav.contact': 'Contato',

    'hero.greeting': 'Olá, me chamo',
    'hero.role': 'Estudante de Engenharia de Software na PUC Minas',
    'hero.description': 'Cursando o 2º período, motivado para ingressar na área de TI/Desenvolvimento e colocar a mão na massa. Buscando minha primeira oportunidade de estágio para aprender e evoluir!',
    'hero.cta.projects': 'Ver Meus Projetos',
    'hero.cta.contact': 'Falar Comigo',
    'hero.stat.projects': 'Projetos',
    'hero.stat.tech': 'Tecnologias',
    'hero.stat.experience': '2º Período PUC',

    'about.title': 'Sobre Mim',
    'about.subtitle': 'Conheça um pouco da minha trajetória e motivações',
    'about.p1': 'Sou estudante de Engenharia de Software na PUC Minas, atualmente no 2º semestre da graduação. Meu interesse é atuar na área de Tecnologia da Informação e Desenvolvimento de Software, aplicando na prática o que venho aprendendo na faculdade.',
    'about.p2': 'Tenho prática com Python, JavaScript, HTML5/CSS3, Bootstrap, Git/GitHub e lógica de programação. Atualmente, estou expandindo meus conhecimentos em Java, React, API REST, MongoDB e Thymeleaf. Também possuo inglês em nível intermediário-avançado (B2).',
    'about.p3': 'No momento, estou em busca da minha primeira oportunidade de estágio em desenvolvimento, onde eu possa colaborar com a equipe, enfrentar desafios reais e absorver o máximo de experiência.',
    'about.skills.frontend': 'Front-end & Web',
    'about.skills.backend': 'Linguagens & Lógica',
    'about.skills.tools': 'Ferramentas & Versionamento',

    'projects.title': 'Projetos Desenvolvidos',
    'projects.subtitle': 'Projetos acadêmicos e práticos realizados na faculdade',
    'projects.viewCode': 'Ver Repositório',
    'projects.viewDemo': 'Ver Projeto',

    'experience.title': 'Formação & Trajetória',
    'experience.subtitle': 'Minha base acadêmica e preparação para o mercado',

    'contact.title': 'Vamos Conversar?',
    'contact.subtitle': 'Fique à vontade para me mandar uma mensagem, e-mail ou me chamar no LinkedIn e WhatsApp',
    'contact.info.title': 'Informações de Contato',
    'contact.info.description': 'Estou disponível para oportunidades de estágio em Belo Horizonte ou vagas remotas. Será um prazer conversar!',
    'contact.form.name': 'Seu Nome',
    'contact.form.name.placeholder': 'Ex: Maria Oliveira',
    'contact.form.email': 'Seu E-mail',
    'contact.form.email.placeholder': 'exemplo@email.com',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Escreva sua mensagem aqui...',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Mensagem enviada com sucesso! Logo te respondo.',
    'contact.form.error': 'Não foi possível enviar por aqui. Me mande um alô no WhatsApp ou LinkedIn!',

    'footer.rights': 'Todos os direitos reservados.',
    'footer.made': 'Portfólio de',
    'footer.by': '',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Journey',
    'nav.contact': 'Contact',

    'hero.greeting': 'Hi, my name is',
    'hero.role': 'Software Engineering Student at PUC Minas',
    'hero.description': 'Currently in the 2nd semester, motivated to step into IT and Software Development. Actively seeking my first internship opportunity to learn, code, and grow!',
    'hero.cta.projects': 'Check My Projects',
    'hero.cta.contact': 'Get in Touch',
    'hero.stat.projects': 'Projects',
    'hero.stat.tech': 'Technologies',
    'hero.stat.experience': '2nd Term Student',

    'about.title': 'About Me',
    'about.subtitle': 'A bit about my journey and career aspirations',
    'about.p1': 'I am a Software Engineering undergraduate at PUC Minas (Belo Horizonte, Brazil), currently in my 2nd semester. My goal is to enter the IT and Software Development industry to apply theoretical concepts into hands-on projects.',
    'about.p2': 'I work with Python, JavaScript, HTML5/CSS3, Bootstrap, Git/GitHub, and programming logic. I am currently learning Java and React. I also have B2 Upper-Intermediate English skills.',
    'about.p3': 'I am actively seeking my first internship opportunity in development, where I can collaborate with mentors, solve real-world problems, and accelerate my professional growth.',
    'about.skills.frontend': 'Front-end & Web',
    'about.skills.backend': 'Languages & Logic',
    'about.skills.tools': 'Tools & Version Control',

    'projects.title': 'Academic & Personal Projects',
    'projects.subtitle': 'Projects developed during college coursework and teamwork',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'Live Preview',

    'experience.title': 'Academic Journey',
    'experience.subtitle': 'University background and preparation for the tech market',

    'contact.title': 'Let\'s Connect!',
    'contact.subtitle': 'Feel free to send a message, email, or reach out on LinkedIn/WhatsApp',
    'contact.info.title': 'Contact Info',
    'contact.info.description': 'Available for on-site software engineering internship positions in Belo Horizonte or remote roles.',
    'contact.form.name': 'Your Name',
    'contact.form.name.placeholder': 'e.g. John Doe',
    'contact.form.email': 'Your Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Write your message...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! I will reply soon.',
    'contact.form.error': 'Could not send form message. Please reach out via WhatsApp or LinkedIn!',

    'footer.rights': 'All rights reserved.',
    'footer.made': 'Portfolio by',
    'footer.by': '',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'en' || saved === 'pt') ? saved : 'pt';
  });

  const setLang = (novaLang: Language) => {
    setLangState(novaLang);
    localStorage.setItem('portfolio_lang', novaLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
