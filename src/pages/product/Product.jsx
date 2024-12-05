import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { productData } from "/Users/calebdickson/Desktop/noreact/main/src/pages/shop/Data.jsx";
import { addToCart } from "/Users/calebdickson/Desktop/noreact/main/src/utils/shopifyAPI.js";
import { CartContext } from "/Users/calebdickson/Desktop/noreact/main/src/utils/CartContext.js";
import "./product.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import Carousel component

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
      // Ensure the variant ID is the full Shopify variant ID
      const fullVariantId = product.variants.find(
        (variant) => variant.id === selectedVariant
      )?.id;

      if (!fullVariantId) {
        console.error("Variant not found");
        return;
      }

      const updatedCart = await addToCart(cartId, fullVariantId, 1);
      if (updatedCart) {
        updateCart(); // Use the updateCart from context
        console.log("Product added to cart successfully");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-container">
      <div className="product-left">
        <Carousel className="carousel-container">
          {product.images.map((image, index) => (
            <div key={index} className="img-container">
              <img
                className="carousel-image"
                src={image}
                alt={`${product.name} ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
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
