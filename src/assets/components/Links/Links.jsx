import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Links = () => {
    const socialLinks =[
        {
            id: 1,
            child: (
                <>Linkend<FaLinkedin size={30}/></>
            ),
            href: "https://www.linkedin.com/in/marti-schaller/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>Github<FaGithub size={30}/></>
            ),
            href: "https://github.com/21martisch",
            
        },
        {
            id: 3,
            child: (
                <>Mail<HiOutlineMail size={30}/></>
            ),
            href: "mailto: schallermartina.a@gmail.com",
        },
        {
            id: 4,
            child: (
                <>CV<BsFillPersonLinesFill size={30}/></>
            ),
            href: "/CV-Schaller-2025.pdf",
            style: 'rounded-br-md',
            download: true,
        }
    ]
  return (
    <div className='hidden fixed top-[35%] left-0 lg:flex flex-col '>
        <ul>
            {socialLinks.map(({ id, child, href, style, download })=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' + '' + style}>
                    <a href={href} className='flex justify-between w-full text-white ' download={download} target='_blank' rel='noreferrer'>
                        {child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Links