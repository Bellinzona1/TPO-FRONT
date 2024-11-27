import React, { useState, useEffect } from 'react';
import '../Components/Styles/MyProfile.css';

export const MyProfile = ({ userAplication }) => {
  const [formData, setFormData] = useState({
    name: userAplication?.name || '',
    email: userAplication?.email || '',
    profileImage: userAplication?.profileImage || '',
    password: '',
    newPassword: '',
  });

  // Usar useEffect para cargar los datos desde localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Guardar los datos del perfil en localStorage
    localStorage.setItem('userProfile', JSON.stringify(formData));
    console.log('Perfil actualizado localmente', formData);
  };

  return (
    <div className="MyProfile">
      <h1>Mi Perfil</h1>
      
      <div className="profile-info">
        <div className="profile-image">
          <img src={formData.profileImage || '/default-profile.png'} alt="Imagen de perfil" />
        </div>
        <div className="user-details">
          <h2>{formData.name}</h2>
          <p>{formData.email}</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="profileImage">Imagen de perfil (URL)</label>
          <input
            type="text"
            id="profileImage"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña actual</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">Nueva contraseña</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <button type="submit" className="btn-submit">Actualizar Perfil</button>
      </form>
    </div>
  );
};
