import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCart } from "../../utils/shopifyAPI"; // Import Shopify API helper
import "./cartSidebar.css";

const CartSidebar = ({ isOpen, onClose, cartId }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items when the sidebar opens
  useEffect(() => {
    if (isOpen && cartId) {
      fetchCart(cartId).then((items) => setCartItems(items));
    }
  }, [isOpen, cartId]);

  // Handle Proceed to Checkout
  const proceedToCheckout = () => {
    window.location.href = "https://your-shopify-checkout-url.com"; // Replace with your Shopify checkout URL
  };

  // Handle View Full Cart
  const viewFullCart = () => {
    navigate("/cart");
    onClose();
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-sidebar-header">
        <h2>Your Cart</h2>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
      <div className="cart-sidebar-content">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map(({ node }) => (
            <div className="cart-item" key={node.id}>
              <img
                src={node.merchandise.product.images.edges[0]?.node.src}
                alt={node.merchandise.product.title}
              />
              <div className="cart-item-info">
                <h4>{node.merchandise.product.title}</h4>
                <p>Price: ${node.merchandise.price.amount}</p>
                <p>Quantity: {node.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-sidebar-footer">
        <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        <button onClick={viewFullCart}>View Full Cart</button>
      </div>
    </div>
  );
};

export default CartSidebar;
