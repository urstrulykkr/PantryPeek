// src/ProductList.js
import React, { useState } from 'react';
import products from './products';
import Product from './Product';
import CategoryFilter from './CategoryFilter';
import './App.css'; // Import the CSS file
import './ProductList.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const ProductList = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter(
    (product) => !categoryFilter || product.category === categoryFilter
  );

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };


const DateTimeDisplay = () => {
  const currentDate = new Date();
  const dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

  const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
  const formattedTime = currentDate.toLocaleTimeString('en-US', timeOptions);

  return [formattedDate, formattedTime]
}


  return (
    <div>
      <Link to="/">Back</Link>
      <h2>UMD Pantry Stock Availability on {DateTimeDisplay()[0]} at {DateTimeDisplay()[1]}</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={categoryFilter}
        onCategoryChange={handleCategoryChange}
      />
      <div className='product-container'>{filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}</div> 
        <Footer />
 
    </div>
    
  );
};

export default ProductList;
