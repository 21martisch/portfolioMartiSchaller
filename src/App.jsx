import React, { useState, useEffect } from 'react';
import HomeHub from './components/HomeHub/HomeHub';
import EstudiosView from './components/Views/EstudiosView';
import ExperienciaView from './components/Views/ExperienciaView';
import ProyectosView from './components/Views/ProyectosView';
import ContactoModal from './components/Modals/ContactoModal';
import TopBar from './components/TopBar/TopBar';
import { PortfolioProvider } from './context/PortfolioContext';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Sync initial state with URL hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['estudios', 'experiencia', 'proyectos'].includes(hash)) {
        setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
    };

    parseHash();
    window.addEventListener('popstate', parseHash);
    return () => window.removeEventListener('popstate', parseHash);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      history.pushState(null, '', `#${view}`);
    }
  };

  return (
    <PortfolioProvider>
      <div className="min-h-screen flex flex-col bg-[#F6F1EC] editorial-grain font-sans text-[#24211E] selection:bg-[#944627] selection:text-white transition-colors duration-300">
        {/* Minimal Top Controls (ES/EN & Dark Mode) */}
        <TopBar />

        <div className="flex-1 flex flex-col">
          {currentView === 'home' && (
            <HomeHub
              onNavigate={navigateTo}
              onOpenContact={() => setIsContactOpen(true)}
            />
          )}

          {currentView === 'estudios' && (
            <EstudiosView onBack={() => navigateTo('home')} />
          )}

          {currentView === 'experiencia' && (
            <ExperienciaView onBack={() => navigateTo('home')} />
          )}

          {currentView === 'proyectos' && (
            <ProyectosView onBack={() => navigateTo('home')} />
          )}
        </div>

        {/* Direct Contact Modal */}
        <ContactoModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </PortfolioProvider>
  );
}

export default App;
