import React, { useEffect, useState } from 'react';
import './Styles/ProfileComponent.css';

export const ProfileComponent = ({ userAplication }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); 
  }, []);

  return (
    <div className={`ProfileComponent ${isLoaded ? 'loaded' : ''}`}>
      <p>{userAplication.username}</p>

      
      <a href="/MyProfile">My profile</a>
      <a href="/MyProducts">My products</a>
      <a href="/Cart">Cart</a>
      
      <button>Sign out</button>
    </div>
  );
};
