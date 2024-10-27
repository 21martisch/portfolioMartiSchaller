import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './assets/components/NavBar/NavBar'
import Home from './assets/components/Home/Home'
import './App.css'
import Links from './assets/components/Links/Links'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <Home/>
        <Links/>
      </div>
    </>
  )
}

export default App
