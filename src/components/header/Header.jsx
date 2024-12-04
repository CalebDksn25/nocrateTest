import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "./header.css";
import nocratelogo from "../../assets/nocratelogo.png";
import Sidenav from "../sidenav/Sidenav";
import CartSidebar from "../cartSidebar/CartSidebar"; // Import CartSidebar component

function Header() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false); // State for cart sidebar
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
        <div className="spacer"></div>
        <div className="logo" onClick={navigateHome}>
          <img src={nocratelogo} alt="Logo" />
        </div>
        <div className="spacer"></div>
        <div className="icons">
          <i className="bx bx-search-alt-2"></i>
          <i className="bx bx-user" onClick={navigateToLogin}></i>
          <i className="bx bxs-cart" onClick={toggleCartSidebar}></i>{" "}
          {/* Toggle cart sidebar */}
        </div>
      </header>
      <Sidenav isOpen={isSidenavOpen} onClose={toggleSidenav} />
      <CartSidebar
        isOpen={isCartSidebarOpen}
        onClose={toggleCartSidebar}
      />{" "}
      {/* Cart sidebar */}
    </div>
  );
}

export default Header;
