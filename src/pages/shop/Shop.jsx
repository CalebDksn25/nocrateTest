import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate
import { productData } from "./Data.jsx"; // Importing from Data.jsx
import "./shop.css";

const Shop = () => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleImageClick = (id) => {
    navigate(`/product/${id}`); // Replace history.push with navigate
  };

  const handleViewProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to product page
  };

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="product-list">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onClick={() => handleImageClick(product.id)}
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <div className="button-container">
              <button className="button-now">Buy Now</button>
              <button
                className="button-now"
                onClick={() => handleViewProductClick(product.id)}>
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
