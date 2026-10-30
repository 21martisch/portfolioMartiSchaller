import React, { useState } from 'react';
import { FiX, FiMail, FiSend, FiCheck, FiCopy } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const email = 'schallermartina.a@gmail.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://getform.io/f/bpjjmqxb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: 'Hubo un error al enviar el mensaje. Por favor intenta por email directo.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Hubo un problema de conexión al enviar el mensaje.' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24211E]/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-[#FAF7F2] rounded-[28px] border border-[#E3D8CC] p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#EAE2D7] hover:bg-[#24211E] hover:text-white flex items-center justify-center text-[#24211E] transition-colors"
          aria-label="Cerrar modal"
        >
          <FiX className="text-lg" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-1.5 rounded-full bg-[#944627] inline-block"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#944627]">
              Contacto
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#24211E] font-medium">
            ¿Tenés una propuesta o proyecto? <br />
            <span className="italic font-normal text-[#944627]">Hablemos.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#3A3633] mt-1">
            Podés enviarme un mensaje directo a través de este formulario o escribir a mi email.
          </p>
        </div>

        {/* Direct Email Pill */}
        <div className="mb-6 p-3 rounded-xl bg-[#EAE2D7]/60 border border-[#E3D8CC] flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[#24211E]">
            <FiMail className="text-[#944627]" />
            <span className="font-mono">{email}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="px-3 py-1 rounded-full bg-[#FAF7F2] hover:bg-[#24211E] hover:text-white text-xs text-[#24211E] font-medium transition-colors border border-[#E3D8CC] flex items-center gap-1"
          >
            {copied ? (
              <>
                <FiCheck className="text-emerald-600" /> ¡Copiado!
              </>
            ) : (
              <>
                <FiCopy /> Copiar
              </>
            )}
          </button>
        </div>

        {/* Status Notification */}
        {status.success && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
            <FiCheck className="text-emerald-600 text-base shrink-0" />
            <span>¡Mensaje enviado con éxito! Te responderé a la brevedad.</span>
          </div>
        )}

        {status.error && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm">
            {status.error}
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6A645F] mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EC] border border-[#E3D8CC] focus:border-[#944627] focus:outline-none text-sm text-[#24211E] placeholder:text-[#6A645F]/60"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6A645F] mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EC] border border-[#E3D8CC] focus:border-[#944627] focus:outline-none text-sm text-[#24211E] placeholder:text-[#6A645F]/60"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6A645F] mb-1">
              Mensaje
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="¿De qué trata la propuesta o idea?"
              className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1EC] border border-[#E3D8CC] focus:border-[#944627] focus:outline-none text-sm text-[#24211E] placeholder:text-[#6A645F]/60 resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/marti-schaller/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#EAE2D7] hover:bg-[#24211E] hover:text-white flex items-center justify-center text-[#24211E] transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="text-sm" />
              </a>
              <a
                href="https://github.com/21martisch"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#EAE2D7] hover:bg-[#24211E] hover:text-white flex items-center justify-center text-[#24211E] transition-colors"
                title="GitHub"
              >
                <FaGithub className="text-sm" />
              </a>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#944627] hover:bg-[#7E3B20] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-sm disabled:opacity-50"
            >
              <FiSend className="text-sm" />
              <span>{status.loading ? 'Enviando...' : 'Enviar mensaje'}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ContactoModal;
