import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "/Users/calebdickson/Desktop/noreact/main/src/pages/shop/Data.jsx"; // Importing from Data.jsx
import "./product.css";

const Product = () => {
  const { id } = useParams(); // Retrieve product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = productData.find(
      (item) => item.id === parseInt(id)
    );
    setProduct(selectedProduct); // Set the product based on the ID
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="product-container">
      <div className="product-left">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-bar"></div>
        <p className="product-description">{product.description}</p>
      </div>
      <div className="product-right">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <div className="product-size">
          <label htmlFor="variant-select">Choose a size:</label>
          <select id="variant-select">
            {product.variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.size}
              </option>
            ))}
          </select>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
