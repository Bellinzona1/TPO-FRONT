import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
import { Product } from '../Pages/Product';
import { MyProducts } from '../Pages/MyProducts'; 
import { Cart } from '../Pages/Cart';
import UploadProduct from '../Pages/UploadProduct';
import { MyProfile } from '../Pages/MyProfile'; 

export const Rutas = ({ userAplication, addToCart, cart, setCart }) => {
  return (
    <BrowserRouter>
      <Routes>
        {userAplication ? (
          <>
            <Route path='/Product/:id' element={<Product addToCart={addToCart} />} />
            <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} userAplication={userAplication} />} />
            <Route path='/MyProducts' element={<MyProducts userAplication={userAplication} />} /> 
            <Route path='/UploadProduct' element={<UploadProduct userAplication={userAplication} />} />
            <Route path='/MyProfile' element={<MyProfile userAplication={userAplication} />} /> 
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
