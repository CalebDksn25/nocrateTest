import React from "react";
import "./sidenav.css";

const Sidenav = ({ isOpen, onClose }) => {
  return (
    <div className={`sidenav ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <a href="/">Home</a>
      <a href="/login">Account</a>
      <a href="/shop">Shop</a>
      <a href="/cart">Cart</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Sidenav;
