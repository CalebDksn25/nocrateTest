import React, { useContext, useEffect } from "react";
import { CartContext } from "/Users/calebdickson/Desktop/noreact/main/src/utils/CartContext.js";
import "./cart.css";

const Cart = () => {
  const { cartItems, updateCart, checkoutUrl } = useContext(CartContext);

  useEffect(() => {
    updateCart();
  }, [updateCart]);

  const handleCheckout = () => {
    window.location.href = checkoutUrl; // Redirect to Shopify checkout
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
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
      <div className="cart-actions">
        <button onClick={handleCheckout}>Checkout</button>{" "}
        {/* Add Checkout button */}
      </div>
    </div>
  );
};

export default Cart;
