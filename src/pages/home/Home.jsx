import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./home.css";
import videoBG from "../../assets/webby.mp4";
//import nocrateTextImage from "../../assets/nocratetext.png";
import text2 from "../../assets/nocratetext3.png";

function Home() {
  return (
    <div className="container same-bg">
      <video autoPlay loop muted className="background-video">
        <source src={videoBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="center-content">
        <h1 className="title-home">
          <img src={text2} alt="Nocrate" className="nocrate-text-image" />
        </h1>
        <ul className="menu">
          <li className="menu-text">
            <span>00</span> -{" "}
            <Link to="/" className="link-text">
              home
            </Link>
          </li>
          <li className="menu-text">
            <span>01</span> -{" "}
            <Link to="/login" className="link-text">
              account
            </Link>
          </li>
          <li className="menu-text">
            <span>02</span> -{" "}
            <Link to="/shop" className="link-text">
              shop all
            </Link>
          </li>
          <li className="menu-text">
            <span>03</span> -{" "}
            <Link to="/catalogue" className="link-text">
              catalogue
            </Link>
          </li>
          <li className="menu-text">
            <span>04</span> -{" "}
            <Link to="/contact" className="link-text">
              contact
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
