import React from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostman,
  SiAxios,
  SiMongodb,
  SiSqlite,
  SiSwagger,
  SiDocker,
  SiGithub,
  SiGit,
  SiOpenai,
  SiVite
} from 'react-icons/si';
import { MdOutlineDevices } from 'react-icons/md';
import { AiOutlineLock } from 'react-icons/ai';

const Skills = () => {
  const techs = [
    {
      id: 1,
      icon: <div className="flex flex-wrap gap-2 justify-center"><SiTypescript className="text-blue-500" /><SiJavascript className="text-yellow-400" /></div>,
      title: "TypeScript & JavaScript",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      icon: <div className="flex flex-wrap gap-2 justify-center"><SiReact className="text-cyan-400" /><SiVite className="text-purple-500" /></div>,
      title: "React (Vite)",
      style: "shadow-cyan-400",
    },
    {
      id: 3,
      icon: <SiAngular className="text-red-600" />,
      title: "Angular",
      style: "shadow-red-600",
    },
    {
      id: 4,
      icon: <div className="flex flex-wrap gap-2 justify-center"><SiNodedotjs className="text-green-500" /><SiExpress className="text-gray-400" /><SiNestjs className="text-red-500" /></div>,
      title: "NodeJs (Express, NestJs)",
      style: "shadow-green-500",
    },
    {
      id: 5,
      icon: <SiPostman className="text-orange-500" />,
      title: "Postman",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      icon: <SiAxios className="text-purple-600" />,
      title: "Axios & API Restful",
      style: "shadow-purple-600",
    },
    {
      id: 7,
      icon: <MdOutlineDevices className="text-sky-400" />,
      title: "Responsive Design",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      icon: <SiSqlite className="text-blue-400" />,
      title: "SQL",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      icon: <SiMongodb className="text-green-600" />,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 10,
      icon: <div className="flex flex-wrap gap-2 justify-center"><SiSwagger className="text-green-400" /><AiOutlineLock className="text-yellow-500" /></div>,
      title: "Swagger & Auth",
      style: "shadow-green-400",
    },
    {
      id: 11,
      icon: <div className="flex flex-wrap gap-2 justify-center"><SiDocker className="text-blue-500" /><SiGithub className="text-gray-400" /><SiGit className="text-orange-600" /></div>,
      title: "Docker, GitHub & Git",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      icon: <SiOpenai className="text-emerald-400" />,
      title: "IA & Automatización",
      style: "shadow-emerald-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, icon, title, style }) => (
            <div
              key={id}
              className={`bg-gray-900/50 flex flex-col items-center justify-center shadow-md hover:scale-110 duration-500 py-6 rounded-xl border border-gray-800 ${style} group`}
            >
              <div className="text-4xl sm:text-5xl mb-4 transition-transform duration-300 group-hover:rotate-6">
                {icon}
              </div>
              <p className="text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white px-2 leading-tight">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills