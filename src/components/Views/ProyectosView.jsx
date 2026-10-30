import React, { useState } from 'react';
import Header from '../Header/Header';
import { FiExternalLink, FiGithub, FiLayers, FiMonitor, FiCheck } from 'react-icons/fi';
import amapola from '/public/img/amapola-project.png';
import gestionDeTareas from '/public/img/taskManager-project.png';
import { usePortfolio } from '../../context/PortfolioContext';

const ProyectosView = ({ onBack }) => {
  const { lang } = usePortfolio();
  // Track active tab per project ('preview' | 'arch')
  const [activeTab, setActiveTab] = useState({});

  const getTab = (id) => activeTab[id] || 'preview';
  const setTab = (id, tab) => setActiveTab((prev) => ({ ...prev, [id]: tab }));

  const proyectos = [
    {
      id: 1,
      titulo:
        lang === 'es'
          ? 'Amapola — E-commerce & Decoración'
          : 'Amapola — E-commerce & Home Decor',
      subtitulo:
        lang === 'es'
          ? 'Plataforma de comercio electrónico con catálogo interactivo y checkout'
          : 'Full-featured e-commerce platform with real-time cart & cloud database',
      descripcion:
        lang === 'es'
          ? 'Tienda online completa de artículos de diseño y hogar. Desarrollada priorizando una experiencia de compra fluida y visualmente atractiva, con filtrado por categorías, gestión de carrito en tiempo real e integración de base de datos en la nube.'
          : 'End-to-end online store for home decor and design pieces. Built with a focus on seamless shopping UX, dynamic category filtering, persistent cart state, and real-time cloud database synchronization.',
      imagen: amapola,
      url: 'proyecto-amapola.vercel.app',
      demo: 'https://proyecto-amapola.vercel.app/',
      github: 'https://github.com/21martisch',
      tags: ['React', 'Tailwind CSS', 'Firebase', 'Vite', 'Responsive UX'],
      arquitectura:
        lang === 'es'
          ? {
              frontend:
                'Arquitectura modular en React con Context API para el estado global del carrito, custom hooks para filtrado reactivo sin recargas y diseño responsivo Mobile-First con Tailwind CSS.',
              backend:
                'Integración con Firebase Firestore para persistencia de catálogo en tiempo real, control de stock dinámico y generación de órdenes de compra.',
              desafio:
                'Optimizar la carga de imágenes de catálogo y sincronizar el stock disponible durante el flujo de checkout evitando estados inconsistentes.',
            }
          : {
              frontend:
                'Modular React architecture using Context API for global cart state, custom hooks for instant category filtering, and Mobile-First Tailwind CSS styling.',
              backend:
                'Cloud persistence powered by Firebase Firestore with real-time catalog queries, dynamic stock validation, and order document generation.',
              desafio:
                'Optimizing catalog asset loading and ensuring stock consistency throughout the multi-step checkout flow.',
            },
    },
    {
      id: 2,
      titulo:
        lang === 'es'
          ? 'TaskManager — Gestión de Tareas Full Stack'
          : 'TaskManager — Full Stack Productivity Suite',
      subtitulo:
        lang === 'es'
          ? 'Aplicación para productividad diaria con API REST y persistencia en MongoDB'
          : 'Full Stack task management application with REST API & MongoDB persistence',
      descripcion:
        lang === 'es'
          ? 'Herramienta interactiva para la creación, priorización y control del flujo de tareas. Cuenta con panel de estado, filtrado dinámico, API REST propia y diseño responsivo adaptado para cualquier dispositivo.'
          : 'Interactive workspace for creating, prioritizing, and tracking daily workflows. Features status boards, dynamic filtering, a custom Node.js REST API, and MongoDB persistence.',
      imagen: gestionDeTareas,
      url: 'gestiondetareas.netlify.app',
      demo: 'https://gestiondetareas.netlify.app/',
      github: 'https://github.com/21martisch',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
      arquitectura:
        lang === 'es'
          ? {
              frontend:
                'Interfaz SPA en React con actualización optimista de estados de tareas, filtros combinables (completadas, pendientes, prioridad) y feedback visual inmediato.',
              backend:
                'Servidor Node.js + Express con arquitectura RESTful, controladores desacoplados, validación de payloads y esquemas Mongoose sobre MongoDB.',
              desafio:
                'Diseñar una comunicación cliente-servidor ágil para que los cambios de estado de tareas se sientan instantáneos manteniendo integridad con la base de datos.',
            }
          : {
              frontend:
                'React SPA featuring optimistic UI updates, combinable status filters, and responsive keyboard-friendly task creation.',
              backend:
                'Node.js + Express RESTful API with decoupled controllers, payload validation, and Mongoose schemas backed by MongoDB.',
              desafio:
                'Designing low-latency client-server synchronization so task status transitions feel instantaneous while keeping database state consistent.',
            },
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col animate-view-in">
      <Header
        onBack={onBack}
        currentTitle={lang === 'es' ? 'Mis proyectos' : 'Selected Projects'}
      />

      <main className="w-full max-w-6xl mx-auto px-6 py-10 sm:py-14 flex-1">
        
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-2 rounded-full bg-[#944627] inline-block"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#944627]">
              {lang === 'es' ? 'Trabajo Seleccionado' : 'Selected Work'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#24211E] tracking-tight mb-4">
            {lang === 'es' ? (
              <>
                Mis <span className="italic font-normal text-[#944627]">proyectos</span>
              </>
            ) : (
              <>
                Featured <span className="italic font-normal text-[#944627]">projects</span>
              </>
            )}
          </h1>

          <p className="text-[#3A3633] text-sm sm:text-base leading-relaxed">
            {lang === 'es'
              ? 'Proyectos en los que he trabajado de principio a fin: diseño de interfaces, desarrollo de lógica frontend y backend, integración con servicios y despliegue a producción. Podés alternar entre la vista previa y la ficha de arquitectura técnica.'
              : 'End-to-end projects covering UI design, frontend and backend architecture, cloud database integration, and production deployment. Toggle between the visual preview and the technical architecture breakdown.'}
          </p>
        </div>

        {/* Project List with Browser Window Mockups + Architecture Toggle */}
        <div className="flex flex-col gap-16">
          {proyectos.map((proyecto) => {
            const tab = getTab(proyecto.id);
            return (
              <article
                key={proyecto.id}
                className="bg-[#FAF7F2] rounded-[28px] sm:rounded-[36px] border border-[#E3D8CC] p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Browser Window Frame */}
                <div className="w-full rounded-2xl overflow-hidden border border-[#E3D8CC] bg-[#24211E] shadow-sm mb-6">
                  
                  {/* Browser Top Navigation Bar */}
                  <div className="bg-[#EFE8DF] px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#E3D8CC]">
                    {/* Traffic Light Dots */}
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#E57373] inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#FFB74D] inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#81C784] inline-block"></span>
                    </div>

                    {/* Mock URL pill */}
                    <div className="bg-white/80 border border-[#E3D8CC] rounded-full px-4 py-1 text-[11px] font-mono text-[#6A645F] truncate max-w-xs sm:max-w-md shadow-xs hidden sm:block">
                      https://{proyecto.url}
                    </div>

                    {/* Interactive View Switcher (Vista Previa vs Arquitectura) */}
                    <div className="flex items-center gap-1 bg-[#EAE2D7] p-1 rounded-full border border-[#E3D8CC]">
                      <button
                        type="button"
                        onClick={() => setTab(proyecto.id, 'preview')}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                          tab === 'preview'
                            ? 'bg-[#944627] text-white shadow-2xs'
                            : 'text-[#24211E] hover:text-[#944627]'
                        }`}
                      >
                        <FiMonitor className="text-xs" />
                        <span>{lang === 'es' ? 'Vista previa' : 'Preview'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setTab(proyecto.id, 'arch')}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                          tab === 'arch'
                            ? 'bg-[#944627] text-white shadow-2xs'
                            : 'text-[#24211E] hover:text-[#944627]'
                        }`}
                      >
                        <FiLayers className="text-xs" />
                        <span>{lang === 'es' ? 'Arquitectura' : 'Architecture'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Browser Content Area */}
                  {tab === 'preview' ? (
                    <div className="relative group bg-neutral-900 overflow-hidden">
                      <img
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        className="w-full h-64 sm:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      {/* Hover Overlay with Live Demo CTA */}
                      <div className="absolute inset-0 bg-[#24211E]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        {proyecto.demo && (
                          <a
                            href={proyecto.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#944627] text-white text-xs sm:text-sm font-medium shadow-md hover:bg-[#7E3B20] transition-colors"
                          >
                            <FiExternalLink />
                            <span>{lang === 'es' ? 'Ver Demo en Vivo' : 'Open Live Demo'}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 sm:p-9 bg-[#1B1917] text-[#F4EFEA] min-h-[16rem] sm:min-h-[24rem] flex flex-col justify-center">
                      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 block mb-2">
                            01 · FRONTEND & UX
                          </span>
                          <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                            {proyecto.arquitectura.frontend}
                          </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 block mb-2">
                            02 · BACKEND & PERSISTENCIA
                          </span>
                          <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                            {proyecto.arquitectura.backend}
                          </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300 block mb-2">
                            03 · DESAFÍO RESUELTO
                          </span>
                          <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                            {proyecto.arquitectura.desafio}
                          </p>
                        </div>
                      </div>

                      <div className="max-w-4xl mx-auto w-full mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/70">
                        <span className="inline-flex items-center gap-1.5">
                          <FiCheck className="text-emerald-400" />
                          {lang === 'es'
                            ? 'Desplegado en producción con integración continua'
                            : 'Deployed in production with continuous integration'}
                        </span>
                        <a
                          href={proyecto.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-amber-300 hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          <span>{lang === 'es' ? 'Probar aplicación en vivo' : 'Test live application'}</span>
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Information */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pt-2">
                  <div className="max-w-2xl">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#24211E] font-medium mb-1">
                      {proyecto.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#944627] mb-3">
                      {proyecto.subtitulo}
                    </p>
                    <p className="text-sm text-[#3A3633] leading-relaxed mb-4">
                      {proyecto.descripcion}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#EAE2D7] text-[#24211E] border border-[#E3D8CC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex md:flex-col items-center gap-3 shrink-0 pt-2">
                    {proyecto.demo && (
                      <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#944627] hover:bg-[#7E3B20] text-white text-xs sm:text-sm font-medium transition-colors shadow-sm"
                      >
                        <FiExternalLink /> Demo
                      </a>
                    )}
                    {proyecto.github && (
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#24211E]/30 hover:bg-[#24211E] hover:text-white text-[#24211E] text-xs sm:text-sm font-medium transition-colors"
                      >
                        <FiGithub /> {lang === 'es' ? 'Código' : 'Code'}
                      </a>
                    )}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </main>
    </div>
  );
};

export default ProyectosView;
