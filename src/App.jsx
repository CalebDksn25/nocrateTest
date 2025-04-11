import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
// import Home from "./pages/home/Home";
// import Shop from "./pages/shop/Shop";
// import Catalogue from "./pages/catalogue/Catalogue";
// import Contact from "./pages/contact/Contact";
// import Header from "./components/header/Header";
// import Product from "./pages/product/Product";
// import Login from "./pages/login/Login";
// import Signup from "./pages/signup/Signup";
// import Cart from "./pages/cart/Cart";
// import CartSidebar from "./components/cartSidebar/CartSidebar";
// import { CartProvider } from "./utils/CartContext";
import Password from "./pages/password/Password";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isPasswordPage = location.pathname === "/password";
  // const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [isPasswordProtected, setIsPasswordProtected] = useState(() => {
    const stored = localStorage.getItem("isPasswordProtected");
    return stored === null ? true : stored === "true";
  });

  // If password protection is enabled and user is not on password page, redirect to password page
  if (isPasswordProtected && !isPasswordPage) {
    return <Navigate to="/password" replace />;
  }

  // If password protection is disabled and user is on password page, redirect to home
  if (!isPasswordProtected && isPasswordPage) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="App">
      {/* {!isHomePage && !isPasswordPage && <Header />} */}
      {/* <CartSidebar
        isOpen={isCartSidebarOpen}
        onClose={() => setIsCartSidebarOpen(false)}
      /> */}
      <div className="main-content">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} /> */}
          <Route
            path="/password"
            element={
              <Password setIsPasswordProtected={setIsPasswordProtected} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    // <CartProvider>
    <Router>
      <AppContent />
    </Router>
    // </CartProvider>
  );
}

export default App;
