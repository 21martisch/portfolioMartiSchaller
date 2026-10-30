import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import {
  SiTypescript,
  SiNestjs,
  SiTailwindcss,
  SiMysql,
  SiOpenai,
} from 'react-icons/si';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiArrowRight, FiCopy, FiCheck, FiMail } from 'react-icons/fi';
import HeroImg from '/public/img/heroImg.jpeg';
import { usePortfolio } from '../../context/PortfolioContext';

const HomeHub = ({ onNavigate, onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const { lang } = usePortfolio();
  const email = 'schallermartina.a@gmail.com';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStack = [
    { name: 'React', icon: <FaReact className="text-sm" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-xs" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-sm" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-sm" /> },
    { name: 'Azure AI', icon: <SiOpenai className="text-xs" /> },
    { name: 'MySQL / SQL', icon: <SiMysql className="text-base" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-sm" /> },
    { name: 'Docker', icon: <FaDocker className="text-sm" /> },
  ];

  return (
    <div className="w-full flex-1 flex items-center justify-center p-4 sm:p-6 lg:px-10 lg:py-8 animate-view-in">
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* LEFT SECTION: Photo + Profile Content */}
        <div className="lg:col-span-7 flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-9">
          
          {/* CLEAN EDITORIAL ARCH PHOTO WITH DOUBLE FRAME */}
          <div className="relative shrink-0 group">
            <div className="w-44 sm:w-52 h-60 sm:h-72 rounded-t-[110px] rounded-b-2xl p-1.5 border border-[#E3D8CC] bg-[#FAF7F2] shadow-md">
              <div className="w-full h-full rounded-t-[104px] rounded-b-xl overflow-hidden border border-[#E3D8CC] bg-[#EAE2D7]">
                <img
                  src={HeroImg}
                  alt="Martina Schaller"
                  className="w-full h-full object-cover object-center filter saturate-[1.04] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* PROFILE TEXT & ACTIONS */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211E] tracking-tight leading-[1.08] mb-4">
              {lang === 'es' ? 'Hola, soy' : "Hi, I'm"} <br />
              <span className="italic font-normal text-[#944627]">
                Martina Schaller
              </span>
            </h1>

            {/* Bio */}
            <p className="text-[#3A3633] text-sm sm:text-base leading-relaxed mb-4 max-w-lg">
              {lang === 'es' ? (
                <>
                  Desarrolladora web full stack. Combino sólidos fundamentos de ingeniería de software con experiencia en{' '}
                  <strong className="font-semibold text-[#24211E]">React, TypeScript y NestJS</strong>, optimizando la experiencia de usuario y aplicando soluciones con{' '}
                  <strong className="font-semibold text-[#24211E]">Inteligencia Artificial</strong> en entornos de producción.
                </>
              ) : (
                <>
                  Full Stack Web Developer combining strong software engineering fundamentals with hands-on experience in{' '}
                  <strong className="font-semibold text-[#24211E]">React, TypeScript, and NestJS</strong>, crafting seamless user experiences and deploying{' '}
                  <strong className="font-semibold text-[#24211E]">Artificial Intelligence</strong> solutions in production.
                </>
              )}
            </p>

            {/* Tech Stack Bar (No layout shift / no vertical transform) */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mb-5">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E3D8CC] hover:border-[#944627] text-xs font-medium text-[#24211E] transition-colors shadow-2xs select-none"
                >
                  <span className="text-[#944627]">{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            {/* Dotted border status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-dashed border-[#24211E]/40 bg-[#FAF7F2]/80 text-xs sm:text-sm text-[#24211E] mb-5 w-fit mx-auto md:mx-0 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#944627] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#944627]"></span>
              </span>
              <span>
                {lang === 'es' ? (
                  <>
                    Ahora mismo desarrollando en <strong className="font-semibold text-[#24211E]">SICORP SRL</strong> & abierta a nuevos desafíos
                  </>
                ) : (
                  <>
                    Currently building at <strong className="font-semibold text-[#24211E]">SICORP SRL</strong> & open to new challenges
                  </>
                )}
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-4">
              <a
                href="https://www.linkedin.com/in/marti-schaller/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#944627] hover:bg-[#7E3B20] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-sm hover:shadow"
              >
                <FaLinkedin className="text-base" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/21martisch"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#24211E]/30 hover:bg-[#24211E] hover:text-white text-[#24211E] text-xs sm:text-sm font-medium tracking-wide transition-all shadow-sm"
              >
                <FaGithub className="text-base" />
                <span>GitHub</span>
              </a>

              <a
                href="/CV-Schaller-2026.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#24211E]/30 hover:bg-[#24211E] hover:text-white text-[#24211E] text-xs sm:text-sm font-medium tracking-wide transition-all shadow-sm"
              >
                <BsFillPersonLinesFill className="text-base" />
                <span>CV</span>
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#525A4D] hover:bg-[#424A3D] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-sm"
              >
                <FiMail className="text-base" />
                <span>{lang === 'es' ? 'Mensaje' : 'Contact'}</span>
              </button>
            </div>

            {/* Email with copy */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-[#6A645F]">
              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 hover:text-[#944627] transition-colors underline decoration-[#E3D8CC] underline-offset-4"
                title={lang === 'es' ? 'Copiar email' : 'Copy email'}
              >
                <span className="font-mono">{email}</span>
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                    <FiCheck className="text-sm" /> {lang === 'es' ? '¡Copiado!' : 'Copied!'}
                  </span>
                ) : (
                  <FiCopy className="text-xs text-[#6A645F] group-hover:text-[#944627]" />
                )}
              </button>
            </div>

          </div>

        </div>

        {/* RIGHT SECTION: The Índice Card */}
        <div className="lg:col-span-5">
          <div className="w-full bg-[#EDE5DC] rounded-[36px] p-6 sm:p-9 border border-[#E3D8CC] shadow-md">
            {/* The 3 Cards */}
            <div className="flex flex-col gap-3.5">
              
              {/* Option 01: Estudios y Certificados */}
              <button
                onClick={() => onNavigate('estudios')}
                className="group w-full text-left p-4 sm:p-5 rounded-2xl bg-[#525A4D] hover:bg-[#434A3E] text-white transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md hover:translate-x-1"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-serif italic text-white/70">
                    01
                  </span>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-medium leading-snug text-white">
                      {lang === 'es' ? 'Estudios y certificados' : 'Education & Certificates'}
                    </h3>
                    <p className="text-xs text-white/80 font-sans tracking-wide">
                      {lang === 'es'
                        ? 'UNR, CoderHouse y formación continua'
                        : 'UNR, CoderHouse & continuous learning'}
                    </p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#525A4D] group-hover:border-white transition-all duration-300">
                  <FiArrowRight className="text-sm transition-transform group-hover:translate-x-0.5 text-white group-hover:text-[#525A4D]" />
                </div>
              </button>

              {/* Option 02: Experiencia */}
              <button
                onClick={() => onNavigate('experiencia')}
                className="group w-full text-left p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F2ECE3] text-[#24211E] border border-[#DDD3C5] transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md hover:translate-x-1"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-serif italic text-[#6A645F]">
                    02
                  </span>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-medium leading-snug text-[#24211E]">
                      {lang === 'es' ? 'Experiencia' : 'Experience'}
                    </h3>
                    <p className="text-xs text-[#6A645F] font-sans tracking-wide">
                      {lang === 'es'
                        ? 'Desarrollo web en SICORP, Kupner y WB Sistemas'
                        : 'Software development at SICORP, Kupner & WB Sistemas'}
                    </p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full border border-[#24211E]/25 flex items-center justify-center shrink-0 group-hover:bg-[#24211E] group-hover:text-white group-hover:border-[#24211E] transition-all duration-300">
                  <FiArrowRight className="text-sm transition-transform group-hover:translate-x-0.5 text-[#24211E] group-hover:text-white" />
                </div>
              </button>

              {/* Option 03: Proyectos */}
              <button
                onClick={() => onNavigate('proyectos')}
                className="group w-full text-left p-4 sm:p-5 rounded-2xl bg-[#944627] hover:bg-[#7E3B20] text-white transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md hover:translate-x-1"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-serif italic text-white/70">
                    03
                  </span>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-medium leading-snug text-white">
                      {lang === 'es' ? 'Proyectos' : 'Projects'}
                    </h3>
                    <p className="text-xs text-white/80 font-sans tracking-wide">
                      {lang === 'es'
                        ? 'Amapola, TaskManager y arquitectura Full Stack'
                        : 'Amapola, TaskManager & Full Stack architecture'}
                    </p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#944627] group-hover:border-white transition-all duration-300">
                  <FiArrowRight className="text-sm transition-transform group-hover:translate-x-0.5 text-white group-hover:text-[#944627]" />
                </div>
              </button>

            </div>

            {/* Bottom bar */}
            <div className="mt-8 pt-4 border-t border-[#D8CCC0] flex items-center justify-between text-xs text-[#6A645F] font-sans">
              <span>© 2026 Martina Schaller</span>
              <button
                onClick={onOpenContact}
                className="hover:text-[#944627] transition-colors font-medium underline underline-offset-4 decoration-[#D8CCC0]"
              >
                {lang === 'es' ? '¿Hablamos? Contactar →' : "Let's talk →"}
              </button>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default HomeHub;
