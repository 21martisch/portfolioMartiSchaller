import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import {
  FiAward,
  FiEye,
  FiExternalLink,
  FiFileText,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
} from 'react-icons/fi';
import { usePortfolio } from '../../context/PortfolioContext';

const EstudiosView = ({ onBack }) => {
  const { lang } = usePortfolio();
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  const educacion = [
    {
      id: 1,
      periodo: lang === 'es' ? 'Marzo 2026 — En curso' : 'March 2026 — Ongoing',
      categoria: lang === 'es' ? 'CARRERA UNIVERSITARIA' : 'UNIVERSITY DEGREE',
      titulo:
        lang === 'es'
          ? 'Tecnicatura Universitaria en Inteligencia Artificial'
          : 'University Degree in Artificial Intelligence',
      institucion: 'UNR',
      descripcion:
        lang === 'es'
          ? 'Formación universitaria especializada en fundamentos de machine learning, análisis y procesamiento de datos, modelos de IA, lógica algorítmica y aplicación práctica de soluciones inteligentes en software.'
          : 'University degree specializing in machine learning fundamentals, data processing & analytics, AI models, algorithmic logic, and practical AI integration in software systems.',
      skills: ['Machine Learning', 'AI Models', 'Data Processing', 'Algorithms'],
      certificados: [],
    },
    {
      id: 2,
      periodo: '2024 — 2025',
      categoria: lang === 'es' ? 'CARRERA PROFESIONAL' : 'PROFESSIONAL CAREER TRACK',
      titulo:
        lang === 'es'
          ? 'Desarrollo Backend & Arquitectura de APIs'
          : 'Backend Development & API Architecture',
      institucion: 'CoderHouse',
      descripcion:
        lang === 'es'
          ? 'Especialización en desarrollo backend con Node.js, creación de servicios y APIs RESTful robustas, seguridad, autenticación, y gestión de bases de datos relacionales y NoSQL.'
          : 'Specialization in Node.js backend engineering, building robust RESTful APIs, authentication, security, and managing relational (SQL) and NoSQL databases.',
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'APIs RESTful'],
      certificados: [
        {
          titulo: lang === 'es' ? 'Certificado Carrera Backend' : 'Backend Career Certificate',
          url: '/img/certificado.png',
          tipo: 'image',
        },
        {
          titulo: lang === 'es' ? 'Certificado SQL' : 'SQL Databases Certificate',
          url: '/img/certificado-SQL.png',
          tipo: 'image',
        },
        {
          titulo: 'Programación Backend I',
          url: '/img/certificado-Back1.png',
          tipo: 'image',
        },
        {
          titulo: 'Programación Backend II',
          url: '/img/certificado-Back2.png',
          tipo: 'image',
        },
        {
          titulo: 'Programación Backend III',
          url: '/img/certificado-Back3.png',
          tipo: 'image',
        },
      ],
    },
    {
      id: 3,
      periodo: '2024',
      categoria: lang === 'es' ? 'CURSO DE ESPECIALIZACIÓN' : 'SPECIALIZATION COURSE',
      titulo:
        lang === 'es'
          ? 'Desarrollo Frontend Moderno con ReactJs'
          : 'Modern Frontend Development with ReactJs',
      institucion: 'CoderHouse',
      descripcion:
        lang === 'es'
          ? 'Desarrollo de Single Page Applications con React, hooks avanzados, arquitectura modular con Vite, consumo de servicios y buenas prácticas de componentización.'
          : 'Building Single Page Applications with React, custom hooks, modular Vite architecture, API integration, and component design patterns.',
      skills: ['ReactJs', 'Vite', 'Firebase', 'State Management', 'Tailwind CSS'],
      certificados: [
        {
          titulo: lang === 'es' ? 'Certificado ReactJs' : 'ReactJs Certificate',
          url: '/img/certificado-React1.png',
          tipo: 'image',
        },
      ],
    },
    {
      id: 4,
      periodo: '2022 — 2023',
      categoria: lang === 'es' ? 'CARRERA INTENSIVA' : 'INTENSIVE PROGRAM',
      titulo:
        lang === 'es'
          ? 'Programación Web Full Stack'
          : 'Full Stack Web Development',
      institucion: 'Digital House',
      descripcion:
        lang === 'es'
          ? 'Trayecto formativo integral en desarrollo web cliente-servidor con JavaScript, bases de datos relacionales y modelado de datos.'
          : 'Comprehensive full stack client-server engineering program covering JavaScript, Node.js, relational databases, and data modeling.',
      skills: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'HTML & CSS'],
      certificados: [
        {
          titulo:
            lang === 'es'
              ? 'Certificado Full Stack (Digital House)'
              : 'Full Stack Certificate (Digital House)',
          url: '/img/certificado-FullStack.pdf',
          tipo: 'pdf',
        },
      ],
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeGallery) return;
      if (e.key === 'Escape') setActiveGallery(null);
      if (e.key === 'ArrowLeft') {
        setActiveCertIndex((prev) => (prev > 0 ? prev - 1 : activeGallery.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveCertIndex((prev) => (prev < activeGallery.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery]);

  const openCertModal = (certs, index = 0) => {
    setActiveGallery(certs);
    setActiveCertIndex(index);
  };

  const currentCert = activeGallery ? activeGallery[activeCertIndex] : null;

  return (
    <div className="w-full min-h-screen flex flex-col animate-view-in">
      <Header
        onBack={onBack}
        currentTitle={
          lang === 'es' ? 'Estudios y certificados' : 'Education & Certificates'
        }
      />

      <main className="w-full max-w-6xl mx-auto px-6 py-10 sm:py-14 flex-1">
        
        {/* Section Title Banner */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-2 rounded-full bg-[#944627] inline-block"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#944627]">
              {lang === 'es' ? 'Formación Académica' : 'Academic Background'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#24211E] tracking-tight mb-4">
            {lang === 'es' ? (
              <>
                Estudios & <span className="italic font-normal text-[#944627]">certificados</span>
              </>
            ) : (
              <>
                Education & <span className="italic font-normal text-[#944627]">certificates</span>
              </>
            )}
          </h1>

          <p className="text-[#3A3633] text-sm sm:text-base leading-relaxed">
            {lang === 'es'
              ? 'Una base técnica rigurosa en desarrollo web, inteligencia artificial y una mirada analítica que me ayuda a entender qué necesita cada usuario y cómo construir soluciones escalables.'
              : 'A rigorous technical foundation in full stack development and artificial intelligence, paired with an analytical mindset focused on building scalable, user-centric software.'}
          </p>
        </div>

        {/* Section index headline */}
        <div className="border-b border-[#E3D8CC] pb-3 mb-8 flex items-baseline gap-3">
          <span className="font-serif italic text-[#944627] text-sm">01</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#24211E] font-medium tracking-tight">
            {lang === 'es'
              ? 'Titulación y especializaciones'
              : 'Degrees & Specializations'}
          </h2>
        </div>

        {/* List of degrees / certifications */}
        <div className="flex flex-col divide-y divide-[#E3D8CC]">
          {educacion.map((item, index) => (
            <article
              key={item.id}
              className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#FAF7F2] p-4 rounded-2xl transition-colors duration-200"
            >
              {/* Date */}
              <div className="md:col-span-3">
                <span className="font-serif italic text-lg sm:text-xl text-[#944627] font-medium block">
                  {item.periodo}
                </span>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#6A645F] block mt-0.5">
                  0{index + 1}
                </span>
              </div>

              {/* Main Info */}
              <div className="md:col-span-6">
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#6A645F] block mb-1">
                  {item.categoria}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#24211E] font-medium mb-2 leading-snug">
                  {item.titulo}
                </h3>
                <p className="text-sm text-[#3A3633] leading-relaxed mb-3">
                  {item.descripcion}
                </p>

                {/* Tech / Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E3D8CC] text-[#24211E]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CERTIFICATES SECTION */}
                {item.certificados && item.certificados.length > 0 && (
                  <div className="pt-3 border-t border-[#E3D8CC]/70">
                    <div className="flex items-center gap-1.5 mb-2">
                      <FiAward className="text-sm text-[#944627]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#944627]">
                        {lang === 'es'
                          ? `Certificados acreditados (${item.certificados.length}):`
                          : `Accredited Certificates (${item.certificados.length}):`}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {item.certificados.map((cert, certIdx) =>
                        cert.tipo === 'pdf' ? (
                          <a
                            key={certIdx}
                            href={cert.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#944627]/40 hover:bg-[#944627] hover:text-white text-xs font-medium text-[#944627] transition-all shadow-xs group/btn"
                            title={lang === 'es' ? 'Abrir PDF en pestaña nueva' : 'Open PDF in new tab'}
                          >
                            <FiFileText className="text-xs" />
                            <span>{cert.titulo}</span>
                            <FiExternalLink className="text-[10px] opacity-75 group-hover/btn:opacity-100" />
                          </a>
                        ) : (
                          <button
                            key={certIdx}
                            onClick={() => openCertModal(item.certificados, certIdx)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#24211E]/25 hover:border-[#944627] hover:text-[#944627] text-xs font-medium text-[#24211E] transition-all shadow-xs"
                          >
                            <FiEye className="text-xs text-[#944627]" />
                            <span>{cert.titulo}</span>
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Institution badge */}
              <div className="md:col-span-3 flex md:justify-end items-start pt-1">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#EAE2D7] border border-[#E3D8CC] text-xs font-semibold text-[#24211E] tracking-wide text-center">
                  {item.institucion}
                </span>
              </div>
            </article>
          ))}
        </div>

      </main>

      {/* FULLSCREEN CERTIFICATE LIGHTBOX / MODAL */}
      {activeGallery && currentCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#24211E]/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveGallery(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-[28px] border border-[#E3D8CC] p-4 sm:p-6 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#E3D8CC] pb-3 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#944627] block">
                  {lang === 'es'
                    ? `Certificado ${activeCertIndex + 1} de ${activeGallery.length}`
                    : `Certificate ${activeCertIndex + 1} of ${activeGallery.length}`}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#24211E] font-medium">
                  {currentCert.titulo}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentCert.url}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="w-9 h-9 rounded-full bg-[#EAE2D7] hover:bg-[#24211E] hover:text-white flex items-center justify-center text-[#24211E] transition-colors"
                  title="Descargar original"
                >
                  <FiDownload className="text-sm" />
                </a>
                <button
                  onClick={() => setActiveGallery(null)}
                  className="w-9 h-9 rounded-full bg-[#EAE2D7] hover:bg-[#24211E] hover:text-white flex items-center justify-center text-[#24211E] transition-colors"
                  aria-label="Cerrar certificado"
                >
                  <FiX className="text-lg" />
                </button>
              </div>
            </div>

            {/* Certificate Display Area */}
            <div className="relative flex-1 flex items-center justify-center overflow-auto min-h-[300px] bg-[#24211E]/5 rounded-2xl p-2 sm:p-4">
              {currentCert.tipo === 'pdf' ? (
                <div className="w-full h-[500px] flex flex-col items-center justify-center gap-4 text-center">
                  <FiFileText className="text-6xl text-[#944627]" />
                  <p className="font-serif text-lg text-[#24211E]">
                    {lang === 'es' ? 'Documento oficial en PDF' : 'Official PDF Document'}
                  </p>
                  <a
                    href={currentCert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#944627] text-white hover:bg-[#7E3B20] text-sm font-medium transition-colors"
                  >
                    <FiExternalLink />
                    <span>
                      {lang === 'es'
                        ? 'Abrir PDF en pantalla completa'
                        : 'Open Fullscreen PDF'}
                    </span>
                  </a>
                </div>
              ) : (
                <img
                  src={currentCert.url}
                  alt={currentCert.titulo}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-md border border-[#E3D8CC]"
                />
              )}

              {/* Prev / Next buttons if multiple */}
              {activeGallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCertIndex((prev) =>
                        prev > 0 ? prev - 1 : activeGallery.length - 1
                      );
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F2]/90 hover:bg-[#24211E] hover:text-white text-[#24211E] shadow-lg flex items-center justify-center transition-all border border-[#E3D8CC]"
                    aria-label="Certificado anterior"
                  >
                    <FiChevronLeft className="text-xl" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCertIndex((prev) =>
                        prev < activeGallery.length - 1 ? prev + 1 : 0
                      );
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F2]/90 hover:bg-[#24211E] hover:text-white text-[#24211E] shadow-lg flex items-center justify-center transition-all border border-[#E3D8CC]"
                    aria-label="Siguiente certificado"
                  >
                    <FiChevronRight className="text-xl" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation Strip if multiple */}
            {activeGallery.length > 1 && (
              <div className="pt-3 mt-3 border-t border-[#E3D8CC] flex items-center justify-center gap-2 overflow-x-auto">
                {activeGallery.map((cert, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCertIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all truncate max-w-[170px] border ${
                      idx === activeCertIndex
                        ? 'bg-[#944627] text-white border-[#944627] shadow-xs'
                        : 'bg-[#FAF7F2] text-[#24211E] border-[#E3D8CC] hover:bg-[#EAE2D7]'
                    }`}
                  >
                    {cert.titulo}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EstudiosView;
