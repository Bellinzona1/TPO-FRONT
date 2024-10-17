import React from 'react'
import '../Components/Styles/Home.css'
import { Products } from '../Components/Products'


export const Home = () => {
  return (
    <div className='Home'>
        

        <input type="text" placeholder='Search for products...' />

        <Products></Products>


    



    </div>
  )
}
