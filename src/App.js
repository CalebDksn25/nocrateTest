import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Catalogue from "./pages/catalogue/Catalogue";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./utils/CartContext"; // Import CartProvider

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Wrap the app in the CartProvider */}
      <Router>
        <div className="App">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
