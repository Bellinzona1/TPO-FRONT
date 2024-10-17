import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Register } from '../Pages/Register'
import { Product } from '../Pages/Product'



export const Rutas = ({ userAplication }) => {
  return (
    <div>

      <BrowserRouter>

        {userAplication ? (

          <Routes>

            <Route path='/Product/:id' element={<Product></Product>}></Route>
            <Route path='/' element={<Home></Home>}></Route>

          </Routes>

        ) :

          <Routes>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/Login' element={<Login></Login>}></Route>

          </Routes>}

















      </BrowserRouter>






    </div>
  )
}
