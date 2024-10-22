import React, { useState } from 'react';
import './Styles/ProductAction.css';
import ProductsService from '../Services/Products.service';


export const ProductAction = ({ Product, Action, SetShowProductAction }) => {
  const [name, setName] = useState(Product.name);
  const [content, setContent] = useState(Product.content || '');
  const [onSale, setOnSale] = useState(Product.onSale || false);
  const [price, setPrice] = useState(Product.price);
  const [userId, setUserId] = useState(Product.user?.id || 1);
  const [categoryId, setCategoryId] = useState(Product.category?.id || 2);

  const handleShowProduct = () => {
    SetShowProductAction(false);
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      content,
      onSale,
      price,
      user: {
        id: userId
      },
      category: {
        id: categoryId
      }
    };

    try {
      await ProductsService.putArticleById(Product.id, updatedProduct);
      alert('Producto actualizado con éxito');
      handleShowProduct();
    } catch (error) {
      console.error('Error al actualizar el producto', error);
      alert('Hubo un error al actualizar el producto');
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await ProductsService.deleteArticleById(Product.id);
      alert('Producto eliminado con éxito');
      handleShowProduct();
    } catch (error) {
      console.error('Error al eliminar el producto', error);
      alert('Hubo un error al eliminar el producto');
    }
  };

  return (
    <div className='ProductAction'>
      {Action === 'editar' ? (
        <div className='editSector'>
          <h1>Editar</h1>

          <form onSubmit={handleEditProduct}>
            <label htmlFor='productName'>Nombre</label>
            <input
              id='productName'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor='productContent'>Descripción</label>
            <textarea
              id='productContent'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <label htmlFor='productPrice'>Precio</label>
            <input
              id='productPrice'
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button type='submit'>Editar</button>

            <span className='Cerrar' onClick={handleShowProduct}>X</span>
          </form>
        </div>
      ) : (
        <div className='deleteSector'>
          <p>¿Estás seguro de eliminar el producto {Product.name}?</p>
          <button className='DeleteBtn' onClick={handleDeleteProduct}>Eliminar</button>
          <span className='Cerrar' onClick={handleShowProduct}>X</span>
        </div>
      )}
    </div>
  );
};
