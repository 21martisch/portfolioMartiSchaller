import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='flex justify-between items-center w-full h-24 px-4 text-white bg-black'>
        <div>
           <img src="../public/img/MS-logo-blanco.png" alt="logo" className='w-20 h-20' />
        </div>
        <ul className='hidden md:flex'>
            <li className='px-4 cursor-pointer font-medium text-white-500 hover:text-purple-500 duration-200'>Home</li>
            <li className='px-4 cursor-pointer font-medium text-white-500 hover:text-purple-500 duration-200'>Educación</li>
            <li className='px-4 cursor-pointer font-medium text-white-500 hover:text-purple-500 duration-200'>Skills</li>
            <li className='px-4 cursor-pointer font-medium text-white-500 hover:text-purple-500 duration-200'>Proyectos</li>
            <li className='px-4 cursor-pointer font-medium text-white-500 hover:text-purple-500 duration-200'>Contacto</li>
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
            {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-gray-800 to-transparent text-white-500'>
                <li className='px-4 cursor-pointer py-6 text-2xl text-white font-bold'> Home</li>
                <li className='px-4 cursor-pointer py-6 text-2xl text-white font-bold'>Educación</li>
                <li className='px-4 cursor-pointer py-6 text-2xl text-white font-bold'>Skills</li>
                <li className='px-4 cursor-pointer py-6 text-2xl text-white font-bold'>Proyectos</li>
                <li className='px-4 cursor-pointer py-6 text-2xl text-white font-bold'>Contacto</li>
            </ul>
        )}

    </div>
  )
}

export default NavBar