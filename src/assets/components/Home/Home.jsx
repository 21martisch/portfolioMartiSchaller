import React from 'react'
import HeroImg from '../../../../public/img/heroImg.jpeg'
import { TypeAnimation } from 'react-type-animation'
import {MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-8'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-6xl font-bold text-white'>
                        Hola, soy Martina Schaller!
                    </h2>
                    <h2 className="text-2xl text-white py-2">
                        Soy{' '}
                        <TypeAnimation className='text-purple-500'
                            sequence={[
                                'Frontend Developer',
                                2000,
                                'Full Stack Developer',
                                2000,
                            ]}
                            speed={30}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Durante los últimos 2 años, he estado formándome y creando páginas web.
                        Me apasiona el desarrollo frontend y, actualmente, estoy profundizando mis conocimientos en ReactJs.
                    </p>
                    <div>
                        <Link to='proyectos' smooth duration={500}>
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-800 to-purple-300 cursor-pointer'>
                                Proyectos
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center py-6'>
                    <img
                        src={HeroImg}
                        alt="Martina Schaller"
                        className='rounded-full object-cover mx-auto w-52 md:w-80 md:ml-10 shadow-lg shadow-purple-400'
                    />
                </div>

            </div>
        </div>
  )
}

export default Home