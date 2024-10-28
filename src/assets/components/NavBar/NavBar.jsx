import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "educacion",
        },
        {
          id: 3,
          link: "proyectos",
        },
        {
          id: 4,
          link: "skills",
        },
        {
          id: 5,
          link: "contacto",
        },
      ];
  return (
    <div className='sticky top-0 flex justify-between items-center w-full h-24 px-4 text-white bg-black z-50'>
        <div>
            <Link to='home' className='cursor-pointer'>
                <img src="../public/img/MS-logo-blanco.png" alt="logo" className='w-20 h-20' />
            </Link>
        </div>
        <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:text-purple-500 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
            {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white-500">
                {links.map(({ id, link }) => (
                    <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-2xl font-bold"
                    >
                    <Link
                        onClick={() => setNav(!nav)}
                        to={link}
                        smooth
                        duration={500}
                    >
                        {link}
                    </Link>
                    </li>
                ))}
            </ul>
        )}

    </div>
  )
}

export default NavBar