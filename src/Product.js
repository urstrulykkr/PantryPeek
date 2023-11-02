
// // src/Product.js
import React from 'react';
import './Product.css'; // Create a separate CSS file for Product component styles

const Product = ({ product }) => {
  return (
    <div className="ProductCard"> {/* Use a container for the card styling */}
      <h3 className="ProductName">{product.name}</h3>
      <p className="ProductCategory">
        Category: <span className="badge bg-primary">{product.category}</span>
      </p>
      <p className="ProductQuantity">Remaining Stock: <span className="badge bg-warning">{product.quantity}</span></p>
    </div>
  );
};

export default Product;

