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

    if (!product || !product.variants) {
      console.error("Product or variants not defined.");
      return;
    }

    console.log("Selected Variant ID:", selectedVariant); // Debug log
    console.log("Product Variants:", product.variants); // Debug log

    try {
      // Find the full variant object based on the selected variant ID
      const variant = product.variants.find((v) => v.id === selectedVariant);

      if (!variant) {
        console.error("Selected variant not found.");
        return;
      }

      const fullVariantId = variant.id; // Ensure you have the correct ID
      const updatedCart = await addToCart(cartId, fullVariantId, 1);

      if (updatedCart) {
        updateCart(updatedCart); // Update the cart context with the updated cart
        console.log("Product added to cart successfully", updatedCart);
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
        <Carousel
          className="carousel-container"
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          emulateTouch={true}
          swipeable={true}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}>
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
        {product && product.variants && (
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
        )}
        <button>
          <span className="button_top" onClick={handleAddToCart}>
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
