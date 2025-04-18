import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./password.css";
import nocratePants from "../../assets/nocratePants.JPG";
import nocratetext from "../../assets/nocratetext3.png";
//import nocrateLogo from "../../assets/nocratelogo.png";

emailjs.init("PyZS0Oomf_pfm3KKM");

const Password = ({ setIsPasswordProtected }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const btn = document.getElementById("button");
    const form = document.getElementById("form");

    const handleSubmit = function (event) {
      event.preventDefault();

      btn.value = "Sending...";

      const serviceID = "service_6pdslxm";
      const templateID = "template_slgv3bp";

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          btn.value = "Send Email";
          alert("Sent!");
          setEmail("");
        },
        (err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        }
      );
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      // Proper cleanup of the event listener
      form.removeEventListener("submit", handleSubmit);
    };
  }, []); // Empty dependency array ensures this only runs once

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === "your-password") {
      setIsPasswordProtected(false);
      localStorage.setItem("isPasswordProtected", "false");
      navigate("/", { replace: true });
    } else {
      setError("Incorrect password");
    }
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
        <form id="form" className="email-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="submit" id="button" value="join" />
        </form>
        {/*<button className="lock-icon" onClick={() => setIsModalOpen(true)}>
          🔒
        </button>*/}
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
