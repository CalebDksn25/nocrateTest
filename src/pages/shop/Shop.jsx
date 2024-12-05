import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { productData } from "./Data.jsx"; // Your local data
import "./shop.css";

const Shop = () => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="product-list">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            {product.images && product.images[0] ? (
              <img
                src={product.images[0]} // Display the first image
                alt={product.name}
                className="product-image"
                onClick={() => handleImageClick(product.id)} // Add onClick handler
              />
            ) : (
              <div className="image-placeholder">No Image Available</div>
            )}
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <div className="button-container">
              <Link
                to={`/product/${product.id}`}
                className="view-product-button">
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
