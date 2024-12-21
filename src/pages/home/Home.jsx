import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./home.css";

function Home() {
  return (
    <div className="container same-bg">
      <div className="center-content">
        <h1 className="title">Nocrate.</h1>
        <ul className="menu">
          <li>
            <span>00</span> -{" "}
            <Link to="/" className="link-text">
              HOME
            </Link>
          </li>
          <li>
            <span>01</span> -{" "}
            <Link to="/login" className="link-text">
              Account
            </Link>
          </li>
          <li>
            <span>02</span> -{" "}
            <Link to="/shop" className="link-text">
              SHOP ALL
            </Link>
          </li>
          <li>
            <span>03</span> -{" "}
            <Link to="/catalogue" className="link-text">
              CATALOGUE
            </Link>
          </li>
          <li>
            <span>04</span> -{" "}
            <Link to="/contact" className="link-text">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
