import React, { useEffect, useState } from "react";
import { fetchCart } from "../../utils/shopifyAPI";
import "./cart.css";

const Cart = ({ cartId }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const items = await fetchCart(cartId);
        setCartItems(items);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };
    loadCart();
  }, [cartId]);

  const proceedToCheckout = () => {
    window.location.href = "https://your-shopify-checkout-url.com"; // Replace with actual checkout URL
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map(({ node }) => (
            <div key={node.id} className="cart-item">
              <h4>{node.merchandise.product.title}</h4>
              <p>Variant: {node.merchandise.title}</p>
              <p>Price: ${node.merchandise.price.amount}</p>
              <p>Quantity: {node.quantity}</p>
            </div>
          ))
        )}
      </div>
      <div className="cart-actions">
        <button onClick={proceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
