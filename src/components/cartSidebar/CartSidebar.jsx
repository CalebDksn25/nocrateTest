import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { CartContext } from "../../utils/CartContext";
import "./cartSidebar.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const {
    cartItems,
    updateCart,
    checkoutUrl,
    handleRemoveFromCart,
    handleUpdateCartQuantity,
  } = useContext(CartContext);
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

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity;
  }, 0);

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
              <p>Size: {item.size}</p> {/* Display product size */}
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    handleUpdateCartQuantity(item.id, parseInt(e.target.value))
                  }
                />
              </p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="cart-sidebar-footer">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-subtotal">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button onClick={handleViewFullCart}>View Full Cart</button>
            <button onClick={handleCheckout}>Checkout</button>
          </>
        ) : null}
        <button onClick={onClose}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartSidebar;
