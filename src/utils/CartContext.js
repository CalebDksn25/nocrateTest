import React, { createContext, useState, useEffect } from "react";
import { fetchCart, createCart } from "./shopifyAPI";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(localStorage.getItem("cartId"));
  const [cartItems, setCartItems] = useState([]);
  const [checkoutUrl, setCheckoutUrl] = useState("");

  useEffect(() => {
    const initializeCart = async () => {
      if (!cartId) {
        const cart = await createCart();
        setCartId(cart.id);
        localStorage.setItem("cartId", cart.id);
      }
    };
    initializeCart();
  }, [cartId]);

  const updateCart = async () => {
    try {
      if (!cartId) {
        // If no cart exists, create a new one
        const newCart = await createCart();
        setCartId(newCart.id);
        localStorage.setItem("cartId", newCart.id);
        setCartItems([]);
        return;
      }

      const cart = await fetchCart(cartId);
      const processedCartItems = cart.lines.edges.map((edge) => ({
        id: edge.node.merchandise.id,
        title: edge.node.merchandise.title,
        quantity: edge.node.quantity,
        price: edge.node.merchandise.price.amount,
      }));

      setCartItems(processedCartItems);
    } catch (error) {
      console.error("Error updating cart:", error);
      // Optionally create a new cart if fetching fails
      const newCart = await createCart();
      setCartId(newCart.id);
      localStorage.setItem("cartId", newCart.id);
      setCartItems([]);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartId, cartItems, updateCart, checkoutUrl }}>
      {children}
    </CartContext.Provider>
  );
};
