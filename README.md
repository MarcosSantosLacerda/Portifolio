# 🏷️ Portfólio Profissional - Marcos Lacerda 👨‍💻

> [!NOTE]
> Site de portfólio pessoal e acadêmico desenvolvido para a disciplina de Laboratório de Desenvolvimento de Aplicações Web da PUC Minas, reunindo projetos práticos, formação e contatos.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este <b>README.md</b> apresenta a documentação do meu site de portfólio profissional e acadêmico. Nele reuni minha trajetória no curso de <b>Engenharia de Software na PUC Minas</b> (2º período), as tecnologias que tenho estudado, os projetos práticos que desenvolvi na faculdade e formas de contato. O sistema foi desenvolvido com <b>React, TypeScript e Vite</b>, com layout responsivo e suporte a dois idiomas (Português e Inglês).
      </div>
    </td>
    <td>
      <div>
        <img src="https://joaopauloaramuni.github.io/image/logo_ES_vertical.png" alt="Logo Engenharia de Software PUC Minas" width="120px"/>
      </div>
    </td>
  </tr> 
</table>

---

## 🚧 Status do Projeto

[![Versão](https://img.shields.io/badge/Versão-v1.0.0-blue?style=for-the-badge)](https://github.com/MarcosSantosLacerda/Portifolio)
![React](https://img.shields.io/badge/React-19.2.8-007ec6?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3.4-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![GitHub repo size](https://img.shields.io/github/repo-size/MarcosSantosLacerda/Portifolio?style=for-the-badge&logo=files)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-green?style=for-the-badge)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
  - [Front-end](#front-end)
  - [Linguagens e Ferramentas](#linguagens-e-ferramentas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação de Dependências](#instalação-de-dependências)
  - [Como Executar a Aplicação](#como-executar-a-aplicação)
  - [Compilação para Produção](#compilação-para-produção)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
  - [Aplicação Web](#aplicação-web)
- [Autores](#-autores)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Demo Online:** https://portifilio-rcur.onrender.com/*
* 📂 **Repositório no GitHub:** [https://github.com/MarcosSantosLacerda/Portifolio](https://github.com/MarcosSantosLacerda/Portifolio)
* 💼 **Perfil no LinkedIn:** [https://www.linkedin.com/in/marcos-santos-lacerda/](https://www.linkedin.com/in/marcos-santos-lacerda/)

---

## 📝 Sobre o Projeto
Desenvolvi este website com o objetivo de ter um portfólio para apresentar minha caminhada acadêmica e projetos práticos. 

O site atende aos seguintes objetivos:
- Apresentar minha formação no 2º período de Engenharia de Software na PUC Minas;
- Exibir os projetos práticos desenvolvidos em grupo e individualmente com código-fonte no GitHub;
- Demonstrar as tecnologias que já utilizo e as que estou aprendendo no momento;
- Disponibilizar canais diretos para oportunidades de estágio na área de tecnologia.

---

## ✨ Funcionalidades Principais
- 🌐 **Internacionalização (PT/EN):** Botão para alternar entre Português e Inglês com persistência da preferência.
- 🧭 **Navegação com Rotas:** Páginas separadas para Início, Sobre, Projetos, Trajetória e Contato utilizando React Router.
- 📱 **Design Responsivo:** Layout adaptado para smartphones e computadores.
- ⏳ **Linha do Tempo de Projetos:** Exibição dos projetos desenvolvidos com resumo, tecnologias e link para o GitHub.
- 📬 **Área de Contato:** Acesso direto para WhatsApp, LinkedIn, GitHub e formulário de mensagem por e-mail.

---

## 🛠 Tecnologias Utilizadas

### Front-end
* **React 19:** Construção da interface com componentes funcionais.
* **TypeScript:** Tipagem estática do código.
* **Vite 8:** Ferramenta de build e servidor de desenvolvimento local.
* **React Router DOM 7:** Roteamento das páginas independentes.
* **Lucide React:** Biblioteca de ícones.
* **EmailJS:** Envio de mensagens do formulário de contato.
* **CSS3:** Estilização com variáveis CSS e tema escuro.

### Linguagens e Ferramentas
* **Python:** Utilizado no projeto prático de jogo Tower Defense.
* **JavaScript / HTML5 / CSS3 / Bootstrap:** Base dos projetos de desenvolvimento web.
* **Git e GitHub:** Controle de versão e hospedagem do repositório.
* **VS Code:** Editor de código utilizado no desenvolvimento.

---

## 🏗 Arquitetura
A aplicação é uma SPA (Single Page Application) estruturada com componentes no React:
- **`src/context/IdiomaContext.tsx`**: Gerencia o estado de idioma e as traduções da interface;
- **`src/data/dados.ts`**: Centraliza os dados dos projetos, habilidades e informações de contato;
- **`src/components/`**: Contém os componentes de cada página (Início, Sobre, Projetos, Trajetória, Contato, Navbar e Rodapé);
- **`src/styles/`**: Arquivos CSS modulares para cada página;
- **`src/App.tsx`**: Declaração das rotas e estrutura principal da aplicação.

---

## 🚀 Instalação e Execução

### Pré-requisitos
* **Node.js** (versão 18 ou superior)
* **npm** instalado

### Instalação de Dependências
Clone o repositório e acesse a pasta do projeto:
```bash
git clone https://github.com/MarcosSantosLacerda/Portifolio.git
cd Portifolio
```

Instale as dependências:
```bash
npm install
```

### Como Executar a Aplicação
Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Abra o navegador no endereço indicado no terminal (ex: `http://localhost:5173/` ou `http://localhost:5174/`).

### Compilação para Produção
Para gerar os arquivos otimizados para deploy:
```bash
npm run build
```

---

## ☁️ Deploy
O projeto pode ser publicado gratuitamente em plataformas na nuvem:
1. Conectar a conta do GitHub na **Vercel** ou **Render**;
2. Importar o repositório `Portifolio`;
3. A plataforma detecta automaticamente as configurações do Vite (`npm run build` e pasta de saída `dist`);
4. Confirmar o deploy para gerar o link público do site.

---

## 📂 Estrutura de Pastas

```plaintext
Portifolio/
├── public/                 # Arquivos públicos estáticos
│   └── marcos.jpg          # Foto de perfil
├── src/
│   ├── assets/             # Mídias e imagens
│   ├── components/         # Componentes das páginas
│   │   ├── Contato.tsx     # Página de contato e formulário
│   │   ├── Experiencia.tsx # Página de formação e trajetória acadêmica
│   │   ├── Hero.tsx        # Seção inicial de apresentação
│   │   ├── Icones.tsx      # Componentes dos ícones de redes sociais
│   │   ├── Navbar.tsx      # Barra de navegação e seletor de idioma
│   │   ├── Projetos.tsx    # Linha do tempo dos projetos práticos
│   │   ├── Rodape.tsx      # Rodapé da aplicação
│   │   └── Sobre.tsx       # Informações sobre mim e habilidades
│   ├── context/
│   │   └── IdiomaContext.tsx # Contexto com traduções em PT e EN
│   ├── data/
│   │   └── dados.ts        # Dados de projetos, tecnologias e contato
│   ├── hooks/
│   │   └── useScrollAnimation.ts # Hook de animações da página
│   ├── styles/             # Arquivos de estilo CSS
│   ├── App.tsx             # Configuração das rotas do React Router
│   ├── index.css           # Estilos globais
│   └── main.tsx            # Inicialização do React
├── index.html              # Estrutura HTML principal
├── package.json            # Scripts e dependências do projeto
├── tsconfig.json           # Configurações do TypeScript
└── vite.config.ts          # Configurações do Vite
```

---

## 📸 Demonstração

### Aplicação Web

| Jogo Tower Defense (Python) | Firefighter Radar |
| :---: | :---: |
| <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80" alt="Jogo Tower Defense" width="380px"/> | <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=500&q=80" alt="Firefighter Radar" width="380px"/> |
| Jogo prático em Python com POO e lógica | Projeto interdisciplinar PUC Minas |

---

## 👨‍💻 Autores

* **Marcos Henrique Santos Lacerda**
  * Graduando em Engenharia de Software — PUC Minas (2º período)
  * GitHub: [@MarcosSantosLacerda](https://github.com/MarcosSantosLacerda)
  * LinkedIn: [marcos-santos-lacerda](https://www.linkedin.com/in/marcos-santos-lacerda/)
  * E-mail: marcoskaka848@gmail.com

---

## 📄 Licença
Este projeto foi desenvolvido para fins acadêmicos sob a licença [MIT](https://opensource.org/licenses/MIT).
