import React from 'react';
import '../Components/Styles/Home.css';
import { Products } from '../Components/Products';

export const Home = () => {
  return (
    <div className='Home'>
      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder='Search for products...' 
        />
        <button className="search-button">
          <img 
            src='https://cdn-icons-png.flaticon.com/512/622/622669.png' 
            alt='Search Icon' 
          />
        </button>
      </div>
      <Products />
    </div>
  );
}
