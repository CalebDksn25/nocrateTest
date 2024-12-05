import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { productData } from "./Data.jsx"; // Your local data
import "./shop.css";

const Shop = () => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleBuyNowClick = (id) => {
    navigate(`/product/${id}`); // Navigate to product page for now
    // You can add logic here to directly add the product to the cart and navigate to checkout
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
              onClick={() => handleImageClick(product.id)} // Add onClick handler
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <div className="button-container">
              <Link
                to={`/product/${product.id}`}
                className="view-product-button">
                View Product
              </Link>
              <button
                className="view-product-button"
                onClick={() => handleBuyNowClick(product.id)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
