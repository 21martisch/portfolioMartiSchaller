import React from 'react'
import { FaLaptopCode, FaBook } from "react-icons/fa";

const Timeline = () => {
  const timelineElements = [
    {
      id: 1,
      title: "Carrera Backend",
      location: "CoderHouse",
      description: "Formación en desarrollo backend con un enfoque en construir aplicaciones escalables y seguras. Incluye el uso de tecnologías como Node.js, Express, MongoDB, y MySQL para gestionar bases de datos, desarrollar APIs RESTful y asegurar la eficiencia en el manejo de datos y operaciones del servidor.",
      date: "Julio 2024 - Presente",
      tech: ["NodeJs", "Express", "MongoDB", "MySQL"],
      icon: "school",
    },
    {
      id: 2,
      title: "Ingeniería Electrónica",
      location: "UTN",
      description: "Actualmente en el primer año de la carrera de Ingeniería Electrónica en UTN, donde estoy adquiriendo conocimientos básicos de matemáticas, física y fundamentos de la electrónica. La formación inicial se enfoca en desarrollar una comprensión sólida de los principios teóricos que servirán de base para proyectos más avanzados en el futuro.",
      date: "Abril 2024 - Presente",
      icon: "school",
    },
    {
      id: 3,
      title: "Curso ReactJs",
      location: "CoderHouse",
      description: "Curso intensivo de desarrollo frontend con React, donde adquirí habilidades para crear interfaces de usuario interactivas y dinámicas. Aprendí a manejar el enrutamiento, gestionar el estado de la aplicación, y optimizar el rendimiento, utilizando herramientas como Vite y Firebase.",
      date: "Agosto 2024 - Octubre 2024",
      tech: ["ReactJs", "Vite", "Bootstrap", "Firebase"],
      icon: "school",
    },
    {
      id: 4,
      title: "Desarrollo de Software",
      location: "Kupner",
      description: "Realización de servicios profesionales para la empresa Antares Technologies US. Creando así un Portfolio de carga de proyectos para dicha empresa.",
      date: "Noviembre 2023 - Marzo 2024",
      tech: ["ReactJs", ".NET", "MySQL"],
      icon: "work",
    },
    {
      id: 5,
      title: "Desarrollo de Software",
      location: "WB Sistemas",
      description: "Desarrollo de aplicaciones web y servicios. Participación en el diseño y gestion de Base de datos, y también, en el modelado de entidades y relaciones",
      date: "Julio 2023 - Noviembre 2023",
      tech: ["Angular", ".NET", "TypeScript","Docker"],
      icon: "work",
    },
    {
      id: 6,
      title: "Curso Programación Web Full Stack",
      location: "Digital House",
      description: "Desarrollo de aplicaciones web y servicios. Participación en el diseño y gestion de Base de datos, y también, en el modelado de entidades y relaciones",
      date: "Octubre 2022 - Mayo 2023",
      tech: ["HTML", "CSS", "JavaScript","Express", "MySQL", "Sequelize", "ReactJs"],
      icon: "work",
    },
  ];

  return (
    <div name="educacion" className='h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-8 pb-4'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div>
          <h2 className='text-2xl font-bold inline border-b-4 border-gray-500 md:text-4xl'>Educación | Experiencia</h2>
        </div>
      </div>
      {timelineElements.map((element) => (
        <div key={element.id} className="flex justify-center m-4 relative">
          <div className="hidden items-center w-44 pt-0.5 relative sm:flex">
            <div className="w-1/2 text-gray-500">{element.date}</div>
            <div className="w-px h-full translate-x-5 translate-y-15 opacity-30 bg-gray-300"></div>
            {element.icon === "school" ? (
              <FaBook className="w-10 h-10 p-1 rounded-lg z-20 text-violet-500" />
            ) : (
              <FaLaptopCode className="w-10 h-10 p-1 rounded-lg z-20 text-violet-500" />
            )}
            <div className="h-px w-8 translate-y-5 opacity-30 bg-gray-300"></div>
          </div>
          <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center sm:w-96">
            <div className="text-xl font-medium text-white">{element.title}</div>
            <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
              {element.location}
              <span className="sm:hidden"> | {element.date}</span>
            </div>
            <div className="mb-4 text-left text-white">{element.description}</div>
            {element.tech && element.tech.length > 0 && (
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1 text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
