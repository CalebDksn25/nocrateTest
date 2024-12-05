import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { productData } from "/Users/calebdickson/Desktop/noreact/main/src/pages/shop/Data.jsx";
import { addToCart } from "/Users/calebdickson/Desktop/noreact/main/src/utils/shopifyAPI.js";
import { CartContext } from "/Users/calebdickson/Desktop/noreact/main/src/utils/CartContext.js";
import "./product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { cartId, updateCart } = useContext(CartContext);

  useEffect(() => {
    const selectedProduct = productData.find(
      (item) => item.id.toString() === id
    );
    console.log("Selected Product:", selectedProduct); // Debug log
    setProduct(selectedProduct);
  }, [id]);

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      alert("Please select a size first!");
      return;
    }
    try {
      const updatedCart = await addToCart(cartId, selectedVariant, 1);
      console.log("Updated Cart:", updatedCart); // Debug log
      updateCart(updatedCart); // Update the cart state
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (!product) return <p>Loading product...</p>;

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
        <div className="product-variants">
          <label htmlFor="variant-select">Choose a size:</label>
          <select
            id="variant-select"
            onChange={(e) => setSelectedVariant(e.target.value)}>
            <option value="">Select a size</option>
            {product.variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.size}
              </option>
            ))}
          </select>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
