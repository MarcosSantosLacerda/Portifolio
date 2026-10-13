import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/IdiomaContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Experiencia from './components/Experiencia';
import Contato from './components/Contato';
import Rodape from './components/Rodape';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function PaginaComAnimacao({ children }: { children: React.ReactNode }) {
  useScrollAnimation();
  return <div className="page-wrapper">{children}</div>;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <PaginaComAnimacao>
                  <Hero />
                </PaginaComAnimacao>
              }
            />
            <Route
              path="/sobre"
              element={
                <PaginaComAnimacao>
                  <Sobre />
                </PaginaComAnimacao>
              }
            />
            <Route
              path="/projetos"
              element={
                <PaginaComAnimacao>
                  <Projetos />
                </PaginaComAnimacao>
              }
            />
            <Route
              path="/experiencia"
              element={
                <PaginaComAnimacao>
                  <Experiencia />
                </PaginaComAnimacao>
              }
            />
            <Route
              path="/contato"
              element={
                <PaginaComAnimacao>
                  <Contato />
                </PaginaComAnimacao>
              }
            />
          </Routes>
        </main>
        <Rodape />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
