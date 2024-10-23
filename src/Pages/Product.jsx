import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsService from '../Services/Products.service';
import '../Components/Styles/Product.css';

const productDescriptions = {
  6: "Enjoy freshness and organization with this modern refrigerator. Its large interior space and smart compartments allow you to store all your food efficiently. With rapid cooling technology and low energy consumption, it is the perfect solution to keep your products fresher for longer. Ideal for families looking for the best in refrigeration.",
  7: "The new Samsung Galaxy A15 redefines value for money. With its 6.5-inch screen and HD+ resolution, enjoy vibrant images and an immersive visual experience. Its powerful processor and long-lasting battery guarantee smooth performance all day long. Capture every moment with its 50MP quad camera, designed to take sharp, bright photos in any condition. A smartphone that has it all!",
  8: "The Kieslect Kr Smartwatch is your perfect companion for an active lifestyle. With a sleek, sporty design, it accurately monitors your health, from heart rate to sleep quality. Receive notifications, control your music and stay on top of your fitness goals with its high-definition AMOLED screen. In addition, its water resistance makes it the ideal watch for any situation.",
  11: "Immerse yourself in an incomparable viewing experience with this next-generation television. Enjoy sharp 4K resolution images and vibrant colors that will make you feel like you're right in the action. With its ultra-slim and elegant design, it adapts perfectly to any space, while its intelligent system gives you access to all your favorite entertainment apps.",
};

export const Product = ({ addToCart }) => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await ProductsService.getArticleById(id); 
        setProduct(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        name: product.name,
        price: product.price,
        content: product.content,
        img: product.image,
        quantity: 1,
      };
      addToCart(cartItem);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">Error: {error.message}</div>;

  const description = productDescriptions[id] || "Descripción no disponible.";

  const paragraphs = description.split('. ').map((text, index) => (
    <p key={index}>{text.trim()}{text.endsWith('.') ? '' : '.'}</p>
  ));

  return (
    <div className="product-container">
      <div className='ProductSector'>
        <div className="productImgDetail">
          <img src={product?.image} alt={product?.name} />
        </div>
      </div>

      <div className="sector2">
        <div className='ProductDetail'>
          <h2>{product?.name}</h2>
          <p>Price: ${product?.price}</p>

          <div className="product-description">{paragraphs}</div>

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

      <div className="sector3"></div>
    </div>
  );
};
