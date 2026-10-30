import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { usePortfolio } from '../../context/PortfolioContext';

const Header = ({ onBack }) => {
  const { lang } = usePortfolio();

  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between border-b border-[#E3D8CC]">
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-left focus:outline-none"
      >
        <span className="font-serif text-xl sm:text-2xl text-[#24211E] font-medium tracking-tight">
          Martina <span className="italic text-[#944627] font-normal">Schaller</span>
        </span>
      </button>

      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#24211E]/25 text-[#24211E] text-xs sm:text-sm font-medium tracking-wide bg-[#FAF7F2] hover:bg-[#944627] hover:text-white hover:border-[#944627] transition-all duration-300 shadow-sm"
      >
        <FiArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
        <span>{lang === 'es' ? 'Inicio' : 'Home'}</span>
      </button>
    </header>
  );
};

export default Header;
