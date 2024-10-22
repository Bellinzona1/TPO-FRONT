import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsService from '../Services/Products.service';
import '../Components/Styles/Product.css';

export const Product = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await ProductsService.getArticleById(id); 
        console.log(response.data)
        setProduct(response.data)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">Error: {error.message}</div>;

  return (
    <div className="product-container">


        <div className='ProductSector'>

            <div className="productImgDetail">

                <img src={product?.image} alt="" />





            </div>



        </div>


        <div className="sector2">

            <div className='ProductDetail'>


                
            </div>




        </div>


        <div className="sector3">




        </div>
      
      
      
      
      
      
      
    </div>
  );
};
