import React from "react";
import "./sidenav.css";

const Sidenav = ({ isOpen, onClose }) => {
  return (
    <div className={`sidenav ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <a href="/" className="list-text">
        Home
      </a>
      <a href="/login" className="list-text">
        Account
      </a>
      <a href="/shop" className="list-text">
        Shop
      </a>
      <a href="/cart" className="list-text">
        Cart
      </a>
      <a href="/contact" className="list-text">
        Contact
      </a>
      <div className="icon-container">
        <a
          href="https://www.tiktok.com/@nocrate.collective?lang=en"
          className="social-link">
          <i className="bx bxl-tiktok social-icon"></i>
        </a>
        <a
          href="https://www.instagram.com/nocrate.collective/"
          className="social-link">
          <i className="bx bxl-instagram-alt social-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidenav;
