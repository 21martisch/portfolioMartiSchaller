import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('marti_theme_dark');
    return saved ? JSON.parse(saved) : false;
  });

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('marti_lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('marti_theme_dark', JSON.stringify(darkMode));
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('marti_lang', lang);
  }, [lang]);

  return (
    <PortfolioContext.Provider
      value={{
        darkMode,
        setDarkMode,
        toggleDarkMode: () => setDarkMode((d) => !d),
        lang,
        setLang,
        toggleLang: () => setLang((l) => (l === 'es' ? 'en' : 'es')),
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
