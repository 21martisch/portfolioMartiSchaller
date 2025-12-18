import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Martina Schaller. Todos los derechos reservados.
          </p>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/21martisch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-500 transition duration-200"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/marti-schaller"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-500 transition duration-200"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="mailto:schallermartina.a@gmail.com"
              className="hover:text-violet-500 transition duration-200"
            >
              <FaEnvelope size={25} />
            </a>
            <a
            href="/CV-Schaller-2025.pdf"
            download="CV-Schaller-2025.pdf"
            className="bg-violet-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-violet-600 transition duration-200"
          >
            <FaFileDownload />
            <span>Descargar CV</span>
          </a>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            Desarrollado con <span className="text-violet-500">React</span> y <span className="text-violet-500">Vite</span> | Estilo por <span className="text-violet-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

