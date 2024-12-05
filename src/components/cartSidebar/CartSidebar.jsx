import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { CartContext } from "/Users/calebdickson/Desktop/noreact/main/src/utils/CartContext.js";
import "./cartSidebar.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, updateCart, checkoutUrl } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (isOpen) {
      updateCart();
    }
  }, [isOpen, updateCart]);

  const handleViewFullCart = () => {
    navigate("/cart"); // Navigate to the cart page
    onClose(); // Close the sidebar
  };

  const handleCheckout = () => {
    window.location.href = checkoutUrl; // Redirect to Shopify checkout
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
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>
                <strong>{item.title}</strong>
              </p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))
        )}
      </div>
      <div className="cart-sidebar-footer">
        <button onClick={handleViewFullCart}>View Full Cart</button>
        <button onClick={handleCheckout}>Checkout</button>{" "}
        {/* Add Checkout button */}
        <button onClick={onClose}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartSidebar;
