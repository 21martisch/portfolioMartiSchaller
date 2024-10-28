import React from 'react'
import html from "../../../../public/img/html.png";
import css from "../../../../public/img/css.png";
import javascript from "../../../../public/img/javascript.png";
import reactImage from "../../../../public/img/react.png";
import angular from "../../../../public/img/angular.png";
import node from "../../../../public/img/node.png";
import firebase from "../../../../public/img/firebase.png";
import github from "../../../../public/img/github.png";
import tailwind from "../../../../public/img/tailwind.png";

const Skills = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
            id: 5,
            src: angular,
            title: "Angular",
            style: "shadow-red-600",
        },
        {
          id: 6,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        
        {
          id: 7,
          src: node,
          title: "NodeJs",
          style: "shadow-green-600",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
            id: 9,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-400",
        },
    ];
    return (
      <div
        name="skills"
        className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen md:min-h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className='py-8'>
            <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline md:text-4xl">
              Skills
            </p>
          </div>
      
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    );
}

export default Skills