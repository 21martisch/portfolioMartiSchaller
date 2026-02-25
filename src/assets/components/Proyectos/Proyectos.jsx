import React from 'react'
import amapola from '../../../../public/img/amapola-project.png'
import gestionDeTareas from '../../../../public/img/taskManager-project.png'


const Proyectos = () => {
  const portfolios = [
    {
      id: 1,
      src: amapola,
      title: "Amapola",
      description: "E-commerce de artículos de decoración y hogar que combina un diseño estético con una navegación enfocada en el usuario.",
      technologies: ["React", "Tailwind", "Firebase"],
      demo: "https://proyecto-amapola.vercel.app/",

    },
    {
      id: 2,
      src: gestionDeTareas,
      title: "TaskManager",
      description: "Aplicación interactiva para la organización y gestión de tareas diarias.",
      technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
      demo: "https://gestiondetareas.netlify.app/",

    },
  ];

  return (
    <div
      name="proyectos"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Proyectos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description, technologies, demo }) => (
            <div key={id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg shadow-black/40 group hover:shadow-cyan-500/20 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={demo} target='_blank' rel='noreferrer' className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors text-sm font-semibold">Demo</a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
                <p className="text-gray-400 text-sm mb-4">{description}</p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span key={index} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-gray-800 rounded border border-gray-700 text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proyectos