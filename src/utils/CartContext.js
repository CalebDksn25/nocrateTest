import React, { createContext, useState, useEffect } from "react";
import {
  fetchCart,
  createCart,
  removeFromCart,
  updateCartQuantity,
} from "./shopifyAPI";

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

  const updateCart = async (updatedCart) => {
    if (updatedCart) {
      setCartItems(
        updatedCart.lines.edges.map((edge) => ({
          id: edge.node.id,
          title: edge.node.merchandise.product?.title || "No Title Available",
          image: edge.node.merchandise.image?.src || "/assets/no-image.png",
          price: edge.node.merchandise.price?.amount || "0.00",
          quantity: edge.node.quantity,
          size:
            edge.node.merchandise.selectedOptions.find(
              (option) => option.name.toLowerCase() === "size"
            )?.value || "N/A", // Extract size
        }))
      );
      setCheckoutUrl(updatedCart.checkoutUrl);
    } else if (cartId) {
      const cart = await fetchCart(cartId);
      setCartItems(
        cart.lines.edges.map((edge) => ({
          id: edge.node.id,
          title: edge.node.merchandise.product?.title || "No Title Available",
          image: edge.node.merchandise.image?.src || "/assets/no-image.png",
          price: edge.node.merchandise.price?.amount || "0.00",
          quantity: edge.node.quantity,
          size:
            edge.node.merchandise.selectedOptions.find(
              (option) => option.name.toLowerCase() === "size"
            )?.value || "N/A", // Extract size
        }))
      );
      setCheckoutUrl(cart.checkoutUrl);
    }
  };

  const handleRemoveFromCart = async (lineId) => {
    const updatedCart = await removeFromCart(cartId, lineId);
    updateCart(updatedCart);
  };

  const handleUpdateCartQuantity = async (lineId, quantity) => {
    const updatedCart = await updateCartQuantity(cartId, lineId, quantity);
    updateCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartId,
        cartItems,
        updateCart,
        checkoutUrl,
        handleRemoveFromCart,
        handleUpdateCartQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
