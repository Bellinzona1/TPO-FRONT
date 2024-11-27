import React, { useEffect, useState } from 'react';
import ProductsService from '../Services/Products.service';
import CategoriesService from '../Services/Categories.service';
import './Styles/Products.css';
import { Link } from 'react-router-dom';

export const Products = ({ searchTerm }) => {
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseArticles = await ProductsService.getArticle();
        const responseCategories = await CategoriesService.getCategories();
        
        setAllArticles(responseArticles.data); 
        setArticles(responseArticles.data); 
        setCategories(responseCategories.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setArticles(category.articleList);
  };


  const filteredArticles = selectedCategory
    ? articles.filter(article => article.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : allArticles.filter(article => article.name.toLowerCase().includes(searchTerm.toLowerCase()));


  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="ProductosSector">
      <div className="sectionsProducts">
        <div className="categoriesContainer">
          <h2 className="tituloCat">Categories</h2>
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`Category ${selectedCategory?.id === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="products">
        {filteredArticles.length === 0 && <p>No articles available.</p>}
        {filteredArticles.map((article) => (
          <div key={article.id} className="Product">
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
