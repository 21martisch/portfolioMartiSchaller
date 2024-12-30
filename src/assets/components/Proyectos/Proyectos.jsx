import React from 'react'
import amapola from '../../../../public/img/amapola-project.png'
import bondiobus from '../../../../public/img/bondiobus-project.png'
import gestionDeTareas from '../../../../public/img/taskManager-project.png'


const Proyectos = () => {
    const portfolios = [
        {
          id: 1,
          src: amapola ,
          demo: "https://proyecto-amapola.vercel.app/",
        },
        {
          id: 2,
          src:bondiobus ,
          demo: "https://bondiobus.netlify.app/",
        },
        {
          id: 3,
          src:gestionDeTareas ,
          demo: "https://taskmanager-frontend-schaller.vercel.app/",
        },
    ];
    
    return (
        <div
          name="proyectos"
          className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="py-8">
              <p className="text-2xl font-bold inline border-b-4 border-gray-500 md:text-4xl">
                Proyectos
              </p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src, demo }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      <a href={demo} target='_blank' rel='referrence' >Demo</a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
}

export default Proyectos