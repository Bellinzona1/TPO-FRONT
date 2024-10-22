import React, { useEffect, useState } from 'react';
import ProductsService from '../Services/Products.service';
import CategoriesService from '../Services/Categories.service';
import "./Styles/Products.css";
import { Link } from 'react-router-dom';

export const Products = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await ProductsService.getArticle();
        const responseCategories = await CategoriesService.getCategories();
        setArticles(response.data);
        setCategories(responseCategories.data);
        console.log(responseCategories.data)
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
    <div className='ProductosSector'>
      <div className="sectionsProducts">
        <div className="categoriesContainer">
          <h2 className='tituloCat'>Categories</h2>

          {categories.map((category) => (
            <div key={category.id} className="Category">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="products">
        {articles.map((article) => (
          <div key={article.id} className='Product'>
            <div className="imgProduct">
              <img src={article.image} alt={article.name} />
            </div>
            <h3>{article.name}</h3>
            <p>$ {article.price}</p>
            <Link to={`/Product/${article.id}`}>
        <button>Quick View</button>
      </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};
