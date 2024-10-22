import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
import { Product } from '../Pages/Product';
import { MyProducts } from '../Pages/MyProducts'; 

export const Rutas = ({ userAplication }) => {
  return (
    <BrowserRouter>
      <Routes>
        
        {userAplication ? (
          <>
            <Route path='/Product/:id' element={<Product />} />
            <Route path='/MyProducts' element={<MyProducts userAplication={userAplication} />} /> 
            <Route path='/' element={<Home />} />
            
          </>
        ) : (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
           
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
