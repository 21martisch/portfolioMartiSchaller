import React from 'react';
import Header from '../Header/Header';
import { usePortfolio } from '../../context/PortfolioContext';

const ExperienciaView = ({ onBack }) => {
  const { lang } = usePortfolio();

  const responsabilidadesSICORP =
    lang === 'es'
      ? [
          {
            num: '01',
            titulo: 'Frontend & Experiencia de Usuario',
            descripcion:
              'Diseño e implementación de interfaces interactivas, accesibles y de alto rendimiento utilizando React, Tailwind CSS y TypeScript.',
          },
          {
            num: '02',
            titulo: 'Backend & Arquitectura de Servicios',
            descripcion:
              'Desarrollo de servicios escalables y APIs RESTful con NestJS y TypeScript, asegurando validaciones estrictas y tipado integral.',
          },
          {
            num: '03',
            titulo: 'IA & Automatización de Facturación AFIP',
            descripcion:
              'Implementación de un sistema de extracción automática y estructuración de datos de facturas AFIP utilizando Azure AI Document Intelligence y procesamiento backend.',
          },
          {
            num: '04',
            titulo: 'Bases de Datos & Persistencia',
            descripcion:
              'Diseño de esquemas y consultas en bases de datos relacionales (MySQL), optimizando tiempos de respuesta e integridad transaccional.',
          },
          {
            num: '05',
            titulo: 'Control de Versiones & Metodología',
            descripcion:
              'Gestión colaborativa de código mediante Git y GitHub, revisiones entre pares y cumplimiento de estándares de calidad de software.',
          },
        ]
      : [
          {
            num: '01',
            titulo: 'Frontend & User Experience',
            descripcion:
              'Design and implementation of interactive, accessible, high-performance interfaces using React, Tailwind CSS, and TypeScript.',
          },
          {
            num: '02',
            titulo: 'Backend & Service Architecture',
            descripcion:
              'Development of scalable services and RESTful APIs with NestJS and TypeScript, ensuring strict DTO validation and end-to-end typing.',
          },
          {
            num: '03',
            titulo: 'AI & Automated AFIP Invoice Processing',
            descripcion:
              'Implementation of an automated extraction and data structuring pipeline for tax invoices using Azure AI Document Intelligence and NestJS.',
          },
          {
            num: '04',
            titulo: 'Databases & Persistence',
            descripcion:
              'Schema design and query optimization in relational databases (MySQL), ensuring fast response times and transactional integrity.',
          },
          {
            num: '05',
            titulo: 'Version Control & Engineering Standards',
            descripcion:
              'Collaborative Git/GitHub workflows, peer code reviews, and adherence to clean architecture and software quality standards.',
          },
        ];

  const anteriores =
    lang === 'es'
      ? [
          {
            empresa: 'Kupner',
            cliente: 'Antares Technologies US',
            periodo: 'Nov. 2023 — Mar. 2024',
            rol: 'Desarrollo de Software Frontend & Backend',
            descripcion:
              'Desarrollo de servicios profesionales para la empresa Antares Technologies US. Creación integral de una plataforma y portfolio para la carga y gestión de proyectos empresariales.',
            stack: ['ReactJs', '.NET', 'MySQL', 'JavaScript'],
          },
          {
            empresa: 'WB Sistemas',
            periodo: 'Jul. 2023 — Nov. 2023',
            rol: 'Desarrollo Web & Modelado de Datos',
            descripcion:
              'Desarrollo de aplicaciones web y servicios internos. Participación en el diseño y gestión de bases de datos relacionales, así como en el modelado de entidades y relaciones del sistema.',
            stack: ['Angular', '.NET', 'TypeScript', 'Docker', 'SQL'],
          },
        ]
      : [
          {
            empresa: 'Kupner',
            cliente: 'Antares Technologies US',
            periodo: 'Nov 2023 — Mar 2024',
            rol: 'Frontend & Backend Software Developer',
            descripcion:
              'Professional software engineering services for Antares Technologies US. Built a full-featured enterprise project management platform and interactive portfolio.',
            stack: ['ReactJs', '.NET', 'MySQL', 'JavaScript'],
          },
          {
            empresa: 'WB Sistemas',
            periodo: 'Jul 2023 — Nov 2023',
            rol: 'Web Development & Data Modeling',
            descripcion:
              'Developed internal web applications and backend services. Collaborated on relational database design, entity-relationship modeling, and containerized environments.',
            stack: ['Angular', '.NET', 'TypeScript', 'Docker', 'SQL'],
          },
        ];

  return (
    <div className="w-full min-h-screen flex flex-col animate-view-in">
      <Header
        onBack={onBack}
        currentTitle={lang === 'es' ? 'Mi experiencia' : 'My Experience'}
      />

      <main className="w-full max-w-6xl mx-auto px-6 py-10 sm:py-14 flex-1">
        
        {/* Title */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-2 rounded-full bg-[#944627] inline-block"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#944627]">
              {lang === 'es' ? 'Trayectoria' : 'Career Path'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#24211E] tracking-tight">
            {lang === 'es' ? (
              <>
                Mi <span className="italic font-normal text-[#944627]">experiencia</span>
              </>
            ) : (
              <>
                Professional <span className="italic font-normal text-[#944627]">experience</span>
              </>
            )}
          </h1>
        </div>

        {/* Featured Main Job Card (SICORP) */}
        <div className="w-full bg-[#525A4D] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 mb-12 shadow-md relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-white/75 block mb-2">
                SICORP SRL
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white">
                {lang === 'es' ? 'Desarrolladora de software' : 'Full Stack Software Developer'}
              </h2>
            </div>
          </div>

          {/* Badges & Duration row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/15">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-white/95">
                React · NestJS · TypeScript · Azure AI
              </span>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-white/75 block">
                {lang === 'es' ? 'Marzo 2025 — Presente' : 'March 2025 — Present'}
              </span>
              <span className="font-serif italic text-xl sm:text-2xl text-white font-medium">
                {lang === 'es' ? 'Actualmente' : 'Current Role'}
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown 01: Responsabilidades clave */}
        <section className="mb-14">
          <div className="border-b border-[#E3D8CC] pb-3 mb-6 flex items-baseline gap-3">
            <span className="font-serif italic text-[#944627] text-sm">01</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#24211E] font-medium tracking-tight">
              {lang === 'es' ? 'Responsabilidades clave' : 'Key Responsibilities'}
            </h3>
          </div>

          <div className="flex flex-col divide-y divide-[#E3D8CC]">
            {responsabilidadesSICORP.map((item) => (
              <div
                key={item.num}
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline hover:bg-[#FAF7F2] px-3 rounded-xl transition-colors"
              >
                <div className="md:col-span-1">
                  <span className="font-serif italic text-[#944627] text-sm">
                    {item.num}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h4 className="font-medium text-[#24211E] text-base sm:text-lg">
                    {item.titulo}
                  </h4>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm text-[#3A3633] leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Breakdown 02: Trayectoria Previa */}
        <section>
          <div className="border-b border-[#E3D8CC] pb-3 mb-6 flex items-baseline gap-3">
            <span className="font-serif italic text-[#944627] text-sm">02</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#24211E] font-medium tracking-tight">
              {lang === 'es' ? 'Experiencias anteriores' : 'Previous Experience'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {anteriores.map((exp, index) => (
              <article
                key={index}
                className="bg-[#FAF7F2] border border-[#E3D8CC] rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#944627]">
                      {exp.empresa} {exp.cliente && `· ${exp.cliente}`}
                    </span>
                    <span className="font-serif italic text-xs text-[#6A645F]">
                      {exp.periodo}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl text-[#24211E] font-medium mb-3">
                    {exp.rol}
                  </h4>

                  <p className="text-sm text-[#3A3633] leading-relaxed mb-6">
                    {exp.descripcion}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E3D8CC]">
                  {exp.stack.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#EAE2D7] text-[#24211E] border border-[#E3D8CC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default ExperienciaView;
