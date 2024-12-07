import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../utils/CartContext";
import "boxicons/css/boxicons.min.css";
import "./header.css";
import nocratelogo from "../../assets/nocratelogo.png";
import Sidenav from "../sidenav/Sidenav";
import CartSidebar from "../cartSidebar/CartSidebar"; // Import CartSidebar component

function Header() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false); // State for cart sidebar
  const { totalItems } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  const toggleCartSidebar = () => {
    setIsCartSidebarOpen(!isCartSidebarOpen);
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="menu-icon" onClick={toggleSidenav}>
          <i className="bx bx-menu-alt-left"></i>
        </div>
        <div className="logo" onClick={navigateHome}>
          <img src={nocratelogo} alt="Logo" />
        </div>
        <div className="icons">
          <i className="bx bx-user" onClick={navigateToLogin}></i>
          <div className="cart-icon-container">
            <i className="bx bxs-cart" onClick={toggleCartSidebar}></i>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
        </div>
      </header>
      <Sidenav isOpen={isSidenavOpen} onClose={toggleSidenav} />
      <CartSidebar isOpen={isCartSidebarOpen} onClose={toggleCartSidebar} />
    </div>
  );
}

export default Header;
