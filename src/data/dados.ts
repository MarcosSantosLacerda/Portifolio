export interface Project {
  id: number;
  name: string;
  description: { pt: string; en: string };
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
  date: string;
}

export interface Experience {
  id: number;
  role: { pt: string; en: string };
  company: string;
  period: { pt: string; en: string };
  description: { pt: string; en: string };
  type: 'work' | 'education' | 'freelance' | 'opensource';
}

export const personalInfo = {
  name: 'Marcos Henrique Santos Lacerda',
  shortName: 'Marcos Lacerda',
  email: 'marcoskaka848@gmail.com',
  phone: '(37) 99934-6661',
  linkedin: 'https://www.linkedin.com/in/marcos-santos-lacerda/',
  github: 'https://github.com/MarcosSantosLacerda',
  whatsapp: 'https://wa.me/5537999346661',
  location: 'Belo Horizonte, MG',
  avatarUrl: '/marcos.jpg',
};

export const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React (Em aprendizado)', 'Thymeleaf (Em aprendizado)'],
  backend: ['Python', 'Java (Em aprendizado)', 'API REST (Em aprendizado)', 'MongoDB (Em aprendizado)', 'Lógica de Programação', 'POO'],
  tools: ['Git', 'GitHub', 'VS Code', 'Consumo de APIs', 'Vite'],
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'Jogo Tower Defense (Python)',
    description: {
      pt: 'Jogo no estilo Tower Defense desenvolvido em Python para um trabalho prático da faculdade, explorando orientação a objetos, lógica de jogos e mecânicas de defesa de rotas.',
      en: 'Tower Defense game built in Python for a college assignment, exploring object-oriented programming, game logic, and defensive mechanics.',
    },
    technologies: ['Python', 'POO', 'Lógica de Programação'],
    github: 'https://github.com/Gurgel120/-Overengeneering-',
    image: '/towerdefense.png',
    date: '2026-07',
  },
  {
    id: 2,
    name: 'Firefighter Radar',
    description: {
      pt: 'Projeto interdisciplinar na PUC Minas voltado para conscientização sobre incêndios, oferta de cursos para voluntários, alertas de risco para a comunidade e conexão rápida entre brigadistas, bombeiros e população.',
      en: 'PUC Minas college project aimed at wildfire awareness, volunteer training courses, disaster alerts, and connecting firefighters, emergency brigades, and citizens.',
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'APIs'],
    github: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti1-0427100-firefighter-radar',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    date: '2026-07',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: {
      pt: 'Graduação em Engenharia de Software',
      en: 'Software Engineering Undergraduate Degree',
    },
    company: 'PUC Minas (Pontifícia Universidade Católica de Minas Gerais)',
    period: {
      pt: '2º Período | Em andamento',
      en: '2nd Semester | In Progress',
    },
    description: {
      pt: 'Formação superior focada em fundamentos de desenvolvimento de software, arquitetura, lógica de programação, estruturas de dados, POO, desenvolvimento web e engenharia de requisitos.',
      en: 'Bachelor’s degree focused on software engineering foundations, architecture, programming logic, data structures, OOP, web development, and requirements engineering.',
    },
    type: 'education',
  },
  {
    id: 2,
    role: {
      pt: 'Projetos Práticos & Extensão Universitária',
      en: 'Hands-on Projects & College Teamwork',
    },
    company: 'Projetos Interdisciplinares PUC Minas',
    period: {
      pt: '2024 - Atualmente',
      en: '2024 - Present',
    },
    description: {
      pt: 'Desenvolvimento em equipes ágeis com Git e GitHub, criação de soluções voltadas para problemas sociais reais (como o Firefighter Radar) e implementação de jogos em Python com POO.',
      en: 'Collaborative development with Git and GitHub, building real-world solutions for community challenges, and programming logic through Python game development.',
    },
    type: 'opensource',
  },
  {
    id: 3,
    role: {
      pt: 'Buscando 1º Estágio em TI / Desenvolvimento',
      en: 'Seeking 1st Internship in Software Development',
    },
    company: 'Disponível para Oportunidades',
    period: {
      pt: 'Atualmente',
      en: 'Currently',
    },
    description: {
      pt: 'Sem experiência profissional formal prévia. Motivado para ingressar no mercado, aprender com desenvolvedores sêniores e contribuir com dedicação, raciocínio lógico e rápida curva de aprendizado.',
      en: 'No prior formal corporate experience. Eager to join an engineering team, learn from experienced mentors, and contribute with dedication and quick learning capability.',
    },
    type: 'work',
  },
];
