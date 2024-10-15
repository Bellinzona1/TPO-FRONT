import React, { useEffect, useState } from 'react';
import ProductsService from '../Services/Products.service'; 

export const Products = () => {
  const [articles, setArticles] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await ProductsService.getArticle();
        setArticles(response.data); 
        console.log(response)
      } catch (err) {
        setError(err); 
      } finally {
        setLoading(false); 
      }
    };

    fetchArticles();
  }, []); 

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error.message}</div>; 
  return (
    <div>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.name}
         

          <img src= {article.image} alt="" />
          
          </li> 
        ))}

        
      </ul>
    </div>
  );
};
