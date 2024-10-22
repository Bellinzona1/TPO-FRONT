import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
import { Product } from '../Pages/Product';

export const Rutas = ({ userAplication }) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas protegidas para usuarios autenticados */}
        {userAplication ? (
          <>
            <Route path='/Product/:id' element={<Product />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to='/' />} /> {/* Redirige cualquier otra ruta a Home */}
          </>
        ) : (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/' />} /> {/* Redirige cualquier otra ruta a Home */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
