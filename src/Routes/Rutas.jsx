import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
import { Product } from '../Pages/Product';
import { MyProducts } from '../Pages/MyProducts'; 
import { Cart } from '../Pages/Cart';

export const Rutas = ({ userAplication,addToCart, cart, setCart }) => {
  return (
    <BrowserRouter>
      <Routes>
        
        {userAplication ? (
          <>
            <Route path='/Product/:id' element={<Product addToCart={addToCart}  />} />
            <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} userAplication={userAplication}></Cart>} />
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
