import './App.css'
import { Rutas } from './Routes/Rutas'
import { Navbar } from './Components/Navbar'
import { useEffect, useState } from 'react'
import { CurrentUser } from './Services/Auth.service' 

function App() {

  const [userAplication, setUserAplication] = useState(null)

  useEffect(() => {

    const handleUserAplication = async () => {
      try {

        const response = await CurrentUser()
        setUserAplication(response.data)
        console.log(response.data)

      } catch {

      }

      
    }


    handleUserAplication()

  }, [])

  return (
    <div>


      <Navbar userAplication = {userAplication ? userAplication : null}></Navbar>


      <Rutas userAplication = {userAplication ? userAplication : null}></Rutas>



    </div>
  )
}

export default App
