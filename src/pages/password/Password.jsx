import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./password.css";
import nocratePants from "../../assets/nocratePants.JPG";
import nocratetext from "../../assets/nocratetext3.png";
//import nocrateLogo from "../../assets/nocratelogo.png";

const Password = ({ setIsPasswordProtected }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    // Replace 'your-password' with your actual password
    if (password === "your-password") {
      setIsPasswordProtected(false);
      navigate("/");
    } else {
      setError("Incorrect password");
    }
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    // Handle email submission logic here
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="password-container">
      <div className="image-container">
        <img
          src={nocratePants}
          alt="Nocrate Pants"
          className="password-image"
        />
      </div>
      <div className="form-container">
        {/*<img src={nocrateLogo} alt="Nocrate Logo" className="nocrate-logo" />*/}
        <img
          src={nocratetext}
          alt="Nocrate Text"
          className="nocrate-text-image"
        />
        {/*<h1>Enter Password</h1>*/}
        <p className="nocrate-text">
          loggers releasing soon
          <br />
          <br />
          email list open now
        </p>
        <form onSubmit={handleEmailSubmit} className="email-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">enlist</button>
        </form>
        <button className="lock-icon" onClick={() => setIsModalOpen(true)}>
          🔒
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h2>Enter Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="error">{error}</p>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Password;
