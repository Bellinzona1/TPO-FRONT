import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Rutas } from './Routes/Rutas'
import { Navbar } from './Components/Navbar'

function App() {

  return (
    <div>


      <Navbar></Navbar>


      <Rutas></Rutas>



    </div>
  )
}

export default App
