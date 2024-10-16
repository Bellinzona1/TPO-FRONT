import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Register } from '../Pages/Register'



export const Rutas = () => {
  return (
    <div>

        <BrowserRouter>


        <Routes>


            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/Login' element={<Login></Login>}></Route>
            


        </Routes>
        
        
        
        
        
        
        
        
        </BrowserRouter>






    </div>
  )
}
