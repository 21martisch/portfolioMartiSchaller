import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './assets/components/NavBar/NavBar'
import Home from './assets/components/Home/Home'
import './App.css'
import Links from './assets/components/Links/Links'
import Timeline from './assets/components/Timeline/Timeline'
import Proyectos from './assets/components/Proyectos/Proyectos'
import Skills from './assets/components/Skills/Skills'
import Contacto from './assets/components/Contacto/Contacto'
import Footer from './assets/components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <Home/>
        <Links/>
        <Timeline/>
        <Proyectos/>
        <Skills/>
        <Contacto/>
        <Footer/>
      </div>
    </>
  )
}

export default App
