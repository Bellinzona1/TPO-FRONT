import React, { useState } from 'react';
import ProductsService from '../Services/Products.service';

const UploadProduct = ({userAplication}) => {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    onSale: false,
    image: '',
    price: 0,
    user: {
      id: userAplication?.id, 
    },
    category: {
      id: 1, // Categoría por defecto (puede cambiar con el select)
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ProductsService.PostArticle(formData); 
      console.log('Artículo publicado exitosamente:', response.data);
    } catch (error) {
      console.error('Error al publicar el artículo:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Subir Producto</h2>

      <div>
        <label htmlFor="name">Nombre del producto</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="content">Descripción</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="image">Enlace de la imagen</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="onSale">
          <input
            type="checkbox"
            id="onSale"
            name="onSale"
            checked={formData.onSale}
            onChange={handleChange}
          />
          En oferta
        </label>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          name="category"
          value={formData.category.id}
          onChange={(e) => setFormData({
            ...formData,
            category: { id: Number(e.target.value) }
          })}
        >
          <option value={1}>Furniture</option>
          <option value={2}>Electronics</option>
          <option value={3}>Fashion</option>
          <option value={4}>Books</option>
          <option value={5}>Kitchen</option>
        </select>
      </div>

      <button type="submit">Subir Producto</button>
    </form>
  );
};

export default UploadProduct;
