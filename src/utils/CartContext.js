import React, { createContext, useState, useEffect, useCallback } from "react";
import { fetchCart, createCart, removeFromCart } from "./shopifyAPI";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(localStorage.getItem("cartId"));
  const [cartItems, setCartItems] = useState([]);
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [totalItems, setTotalItems] = useState(0);

  const updateCart = useCallback(
    async (updatedCart) => {
      if (updatedCart) {
        const items = updatedCart.lines.edges.map((edge) => ({
          id: edge.node.id,
          title: edge.node.merchandise.product?.title || "No Title Available",
          image: edge.node.merchandise.image?.src || "/assets/no-image.png",
          price: edge.node.merchandise.price?.amount || "0.00",
          quantity: edge.node.quantity,
          size:
            edge.node.merchandise.selectedOptions.find(
              (option) => option.name.toLowerCase() === "size"
            )?.value || "N/A",
        }));
        setCartItems(items);
        setCheckoutUrl(updatedCart.checkoutUrl);
        setTotalItems(items.reduce((total, item) => total + item.quantity, 0));
      } else if (cartId) {
        try {
          const cart = await fetchCart(cartId);
          if (!cart) {
            throw new Error("Invalid cart ID");
          }
          const items = cart.lines.edges.map((edge) => ({
            id: edge.node.id,
            title: edge.node.merchandise.product?.title || "No Title Available",
            image: edge.node.merchandise.image?.src || "/assets/no-image.png",
            price: edge.node.merchandise.price?.amount || "0.00",
            quantity: edge.node.quantity,
            size:
              edge.node.merchandise.selectedOptions.find(
                (option) => option.name.toLowerCase() === "size"
              )?.value || "N/A",
          }));
          setCartItems(items);
          setCheckoutUrl(cart.checkoutUrl);
          setTotalItems(
            items.reduce((total, item) => total + item.quantity, 0)
          );
        } catch (error) {
          console.error("Error fetching cart:", error);
          localStorage.removeItem("cartId");
          setCartId(null);
        }
      }
    },
    [cartId]
  );

  const handleRemoveFromCart = async (lineId) => {
    try {
      const updatedCart = await removeFromCart(cartId, lineId);
      updateCart(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  useEffect(() => {
    const initializeCart = async () => {
      try {
        if (!cartId) {
          const cart = await createCart();
          setCartId(cart.id);
          localStorage.setItem("cartId", cart.id);
        } else {
          const cart = await fetchCart(cartId);
          if (!cart) {
            throw new Error("Invalid cart ID");
          }
          updateCart(cart);
        }
      } catch (error) {
        console.error("Error initializing cart:", error);
        localStorage.removeItem("cartId");
        setCartId(null);
      }
    };
    initializeCart();
  }, [cartId, updateCart]);

  return (
    <CartContext.Provider
      value={{
        cartId,
        cartItems,
        updateCart,
        checkoutUrl,
        totalItems,
        handleRemoveFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
