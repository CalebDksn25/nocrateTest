import React, { useContext, useEffect } from "react";
import { CartContext } from "../../utils/CartContext";
import "./cart.css";

const Cart = () => {
  const {
    cartItems,
    updateCart,
    checkoutUrl,
    handleRemoveFromCart,
    handleUpdateCartQuantity,
  } = useContext(CartContext);

  useEffect(() => {
    updateCart();
  }, [updateCart]);

  const handleCheckout = () => {
    window.location.href = checkoutUrl; // Redirect to Shopify checkout
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>
                  <strong>{item.title}</strong>
                </p>
                <p>
                  Size: {item.variantTitle} {/* Display the size */}
                </p>
                <p>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleUpdateCartQuantity(
                        item.id,
                        parseInt(e.target.value)
                      )
                    }
                  />
                </p>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-subtotal">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-actions">
              <button onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
