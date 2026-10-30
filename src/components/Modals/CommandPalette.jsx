import React, { useState } from 'react';
import {
  FiX,
  FiSearch,
  FiArrowRight,
  FiDownload,
  FiMail,
  FiCpu,
  FiCode,
  FiBriefcase,
  FiBookOpen,
} from 'react-icons/fi';
import { usePortfolio } from '../../context/PortfolioContext';

const CommandPalette = ({ onNavigate, onOpenContact }) => {
  const { isCommandOpen, setIsCommandOpen, lang } = usePortfolio();
  const [query, setQuery] = useState('');
  const [selectedFaq, setSelectedFaq] = useState(0);

  if (!isCommandOpen) return null;

  const faqs =
    lang === 'es'
      ? [
          {
            q: '¿Podés trabajar para Buenos Aires, híbrido o 100% remoto?',
            tag: 'Modalidad & Disponibilidad',
            a: '¡Sí! Tengo total disponibilidad para posiciones remotas (para Argentina o el exterior, como ya trabajé para Antares Technologies US) y también estoy abierta a propuestas en Buenos Aires o esquemas flexibles. Me adapto rápido a equipos distribuidos con metodologías ágiles.',
            actionLabel: 'Contactar ahora',
            action: () => {
              setIsCommandOpen(false);
              onOpenContact();
            },
          },
          {
            q: '¿Cómo implementaste Inteligencia Artificial en producción?',
            tag: 'IA & Automatización',
            a: 'En SICORP SRL desarrollé un pipeline con Azure AI Document Intelligence + NestJS que recibe facturas AFIP, extrae automáticamente CUIT, CAE, importes e ítems, valida los DTOs con TypeScript estricto y los persiste en MySQL. Además, curso la Tecnicatura Universitaria en IA.',
            actionLabel: 'Probar simulador IA en Experiencia',
            action: () => {
              setIsCommandOpen(false);
              onNavigate('experiencia');
            },
          },
          {
            q: '¿Cuál es tu stack técnico principal hoy?',
            tag: 'Full Stack',
            a: 'En Frontend trabajo con React, TypeScript y Tailwind CSS cuidando la UX y el rendimiento. En Backend construyo APIs RESTful escalables y tipadas con NestJS, Node.js/Express y .NET, integrando bases de datos relacionales (MySQL/SQL) y NoSQL (MongoDB/Firebase).',
            actionLabel: 'Ver Proyectos y Arquitectura',
            action: () => {
              setIsCommandOpen(false);
              onNavigate('proyectos');
            },
          },
          {
            q: '¿Qué formación universitaria y certificaciones tenés?',
            tag: 'Educación',
            a: 'Curso la Tecnicatura Universitaria en Inteligencia Artificial (UNR) y cuento con certificaciones completas en Desarrollo Backend (Node.js, SQL, Arquitectura de APIs), ReactJs (CoderHouse) y Full Stack Web Development (Digital House).',
            actionLabel: 'Ver títulos y certificados',
            action: () => {
              setIsCommandOpen(false);
              onNavigate('estudios');
            },
          },
        ]
      : [
          {
            q: 'Are you available for Buenos Aires, hybrid, or 100% remote roles?',
            tag: 'Availability & Work Mode',
            a: 'Yes! I am fully available for remote positions (both in Argentina and internationally, having previously worked for Antares Technologies US) and open to opportunities in Buenos Aires. I integrate seamlessly into distributed agile teams.',
            actionLabel: 'Get in touch',
            action: () => {
              setIsCommandOpen(false);
              onOpenContact();
            },
          },
          {
            q: 'How have you applied Artificial Intelligence in production?',
            tag: 'AI & Automation',
            a: 'At SICORP SRL, I built an automated invoice processing pipeline using Azure AI Document Intelligence + NestJS that extracts tax IDs, line items, and totals from AFIP invoices into strictly typed DTOs and MySQL. I am also pursuing a University Degree in AI.',
            actionLabel: 'Try Live AI Demo in Experience',
            action: () => {
              setIsCommandOpen(false);
              onNavigate('experiencia');
            },
          },
          {
            q: 'What is your core Full Stack technology stack?',
            tag: 'Full Stack',
            a: 'On the Frontend: React, TypeScript, and Tailwind CSS with a strong UX focus. On the Backend: scalable REST APIs using NestJS, Node.js/Express, and .NET, paired with MySQL, SQL, MongoDB, and Firebase.',
            actionLabel: 'Explore Projects & Architecture',
            action: () => {
              setIsCommandOpen(false);
              onNavigate('proyectos');
            },
          },
          {
            q: 'What is your academic background and certification history?',
            tag: 'Education',
            a: 'I am studying a University Degree in Artificial Intelligence and hold accredited certifications in Backend Engineering (Node.js, SQL, APIs), ReactJs (CoderHouse), and Full Stack Development (Digital House).',
            actionLabel: 'View degrees & certificates',
            action: () => {
              setIsCommandOpen(false);
              onNavigate('estudios');
            },
          },
        ];

  const quickLinks = [
    {
      icon: <FiCpu />,
      label:
        lang === 'es'
          ? 'Experiencia + Simulador IA Facturas'
          : 'Experience + Live AI Invoice Simulator',
      onClick: () => {
        setIsCommandOpen(false);
        onNavigate('experiencia');
      },
    },
    {
      icon: <FiCode />,
      label:
        lang === 'es'
          ? 'Proyectos + Arquitectura Técnica'
          : 'Projects + Technical Architecture',
      onClick: () => {
        setIsCommandOpen(false);
        onNavigate('proyectos');
      },
    },
    {
      icon: <FiBookOpen />,
      label:
        lang === 'es'
          ? 'Estudios y Galería de Certificados'
          : 'Education & Certificates Gallery',
      onClick: () => {
        setIsCommandOpen(false);
        onNavigate('estudios');
      },
    },
    {
      icon: <FiMail />,
      label: lang === 'es' ? 'Enviar mensaje directo' : 'Send direct message',
      onClick: () => {
        setIsCommandOpen(false);
        onOpenContact();
      },
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(query.toLowerCase()) ||
      item.a.toLowerCase().includes(query.toLowerCase()) ||
      item.tag.toLowerCase().includes(query.toLowerCase())
  );

  const activeFaq = filteredFaqs[selectedFaq] || filteredFaqs[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24211E]/65 backdrop-blur-sm animate-fadeIn"
      onClick={() => setIsCommandOpen(false)}
    >
      <div
        className="w-full max-w-3xl bg-[#FAF7F2] rounded-[28px] border border-[#E3D8CC] shadow-2xl overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top search bar */}
        <div className="p-4 sm:p-5 border-b border-[#E3D8CC] flex items-center gap-3 bg-[#EDE5DC]/60">
          <FiSearch className="text-[#944627] text-lg shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedFaq(0);
            }}
            autoFocus
            placeholder={
              lang === 'es'
                ? 'Preguntale a mi CV (ej: Buenos Aires, IA, NestJS, React, estudios...)'
                : 'Ask my CV (e.g., Remote, AI, NestJS, React, education...)'
            }
            className="w-full bg-transparent text-sm sm:text-base text-[#24211E] placeholder:text-[#6A645F] focus:outline-none"
          />
          <button
            onClick={() => setIsCommandOpen(false)}
            className="w-8 h-8 rounded-full bg-[#EAE2D7] hover:bg-[#24211E] hover:text-white flex items-center justify-center text-[#24211E] transition-colors shrink-0"
          >
            <FiX className="text-sm" />
          </button>
        </div>

        {/* Body: Interactive Q&A + Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#E3D8CC] overflow-y-auto">
          {/* Left column: Questions */}
          <div className="md:col-span-5 p-4 flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#944627] px-2 mb-1">
              {lang === 'es' ? 'Preguntas frecuentes de reclutadores' : 'Recruiter Quick Questions'}
            </span>

            {filteredFaqs.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFaq(idx)}
                className={`text-left p-3 rounded-2xl transition-all border text-xs sm:text-sm ${
                  activeFaq?.q === item.q
                    ? 'bg-[#944627] text-white border-[#944627] shadow-sm'
                    : 'bg-[#F6F1EC] text-[#24211E] border-[#E3D8CC] hover:bg-[#EAE2D7]'
                }`}
              >
                <span
                  className={`block text-[10px] uppercase tracking-wider font-bold mb-1 ${
                    activeFaq?.q === item.q ? 'text-white/80' : 'text-[#944627]'
                  }`}
                >
                  {item.tag}
                </span>
                <span className="font-medium leading-snug block">{item.q}</span>
              </button>
            ))}

            {filteredFaqs.length === 0 && (
              <p className="text-xs text-[#6A645F] p-3">
                {lang === 'es'
                  ? 'No se encontraron preguntas con ese término.'
                  : 'No matching questions found.'}
              </p>
            )}
          </div>

          {/* Right column: Answer + Quick Actions */}
          <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between bg-[#FAF7F2]">
            {activeFaq ? (
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D7] text-[#24211E] text-[11px] font-semibold mb-3">
                  <span className="text-[#944627]">✦</span>
                  <span>{activeFaq.tag}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#24211E] font-medium mb-3 leading-snug">
                  {activeFaq.q}
                </h3>
                <p className="text-sm text-[#3A3633] leading-relaxed mb-5 bg-[#F6F1EC] p-4 rounded-2xl border border-[#E3D8CC]">
                  {activeFaq.a}
                </p>
                <button
                  onClick={activeFaq.action}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#944627] hover:bg-[#7E3B20] text-white text-xs sm:text-sm font-medium transition-all shadow-sm"
                >
                  <span>{activeFaq.actionLabel}</span>
                  <FiArrowRight />
                </button>
              </div>
            ) : null}

            {/* Quick Navigation Footer inside modal */}
            <div className="pt-4 border-t border-[#E3D8CC]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6A645F] block mb-2.5">
                {lang === 'es' ? 'Accesos rápidos' : 'Quick Links'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickLinks.map((link, i) => (
                  <button
                    key={i}
                    onClick={link.onClick}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#F6F1EC] hover:bg-[#EAE2D7] border border-[#E3D8CC] text-xs font-medium text-[#24211E] transition-colors text-left"
                  >
                    <span className="text-[#944627] shrink-0">{link.icon}</span>
                    <span className="truncate">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with CV Download */}
        <div className="px-5 py-3 bg-[#EDE5DC] border-t border-[#E3D8CC] flex items-center justify-between text-xs text-[#6A645F]">
          <span>
            {lang === 'es'
              ? 'Tip: Presioná Esc o Ctrl+K en cualquier momento'
              : 'Tip: Press Esc or Ctrl+K anytime'}
          </span>
          <a
            href="/CV-Schaller-2026.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#944627] hover:underline"
          >
            <FiDownload />
            <span>{lang === 'es' ? 'Descargar CV en PDF' : 'Download PDF Resume'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

