import React from "react";
import "./login.css";

const Login = () => {
  const handleShopifyLogin = () => {
    // Replace YOUR_SHOPIFY_DOMAIN with your actual Shopify store domain (e.g., xxp1rp-ay.myshopify.com)
    const shopifyLoginUrl = `https://xxp1rp-ay.myshopify.com/account/login`;
    window.location.href = shopifyLoginUrl;
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Sign In to Your Account</h1>
        <div className="button-container">
          <button className="shopify-button" onClick={handleShopifyLogin}>
            Sign In with Shopify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
