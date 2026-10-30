import React from 'react';
import { FiSun, FiMoon, FiGlobe } from 'react-icons/fi';
import { usePortfolio } from '../../context/PortfolioContext';

const TopBar = () => {
  const { darkMode, toggleDarkMode, lang, toggleLang } = usePortfolio();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-4 pb-1 flex items-center justify-between gap-4 z-30 relative">
      {/* Left: Role & Core Stack */}
      <div className="inline-flex items-center gap-2">
        <span className="w-6 h-2 rounded-full bg-[#944627] inline-block shrink-0"></span>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#944627]">
          Full Stack Developer · React · TypeScript · NestJS
        </span>
      </div>

      {/* Right: Language & Theme Controls */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Language Toggle ES / EN */}
        <button
          onClick={toggleLang}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E3D8CC] hover:border-[#944627] text-xs font-semibold text-[#24211E] transition-colors shadow-xs"
          title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <FiGlobe className="text-xs text-[#944627]" />
          <span>{lang === 'es' ? 'ES' : 'EN'}</span>
        </button>

        {/* Dark / Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E3D8CC] hover:border-[#944627] flex items-center justify-center text-[#24211E] transition-colors shadow-xs"
          title={
            darkMode
              ? lang === 'es'
                ? 'Modo Claro'
                : 'Light Mode'
              : lang === 'es'
              ? 'Modo Oscuro'
              : 'Dark Mode'
          }
          aria-label="Cambiar tema"
        >
          {darkMode ? (
            <FiSun className="text-sm text-amber-400" />
          ) : (
            <FiMoon className="text-sm text-[#944627]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
