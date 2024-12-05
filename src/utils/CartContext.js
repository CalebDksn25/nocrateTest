import React, { createContext, useState, useEffect } from "react";
import { createCart, fetchCart } from "./shopifyAPI";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(localStorage.getItem("cartId"));
  const [cartItems, setCartItems] = useState([]);

  // Initialize cart
  useEffect(() => {
    const initializeCart = async () => {
      if (!cartId) {
        const cart = await createCart();
        setCartId(cart.id);
        localStorage.setItem("cartId", cart.id);
        setCartItems(cart.lines.edges.map((edge) => edge.node));
      }
    };
    initializeCart();
  }, [cartId]);

  // Update cart items
  const updateCart = async () => {
    if (!cartId) return;
    const cart = await fetchCart(cartId);
    setCartItems(cart.lines.edges.map((edge) => edge.node));
  };

  return (
    <CartContext.Provider value={{ cartId, cartItems, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
