import React, { useState } from "react";
import "./nav.css";
import Logo from "../../assets/sota.png";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";
import Call from "../../icons/call";
import Mail from "../../icons/mail";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ active }) => {
  const [mob, setMob] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`navbar ${mob ? "extended" : ""}`}>
      <div className="nav">
        <img src={Logo} alt="" className="logo" onClick={() => navigate("/")} />
        <img
          src={mob ? Close : Menu}
          alt=""
          className="menu-btn"
          onClick={() => setMob(!mob)}
        />
        <div className="navlinks">
          <Link to="/" className={`links ${active === 1 ? "active" : ""}`}>
            HOME
          </Link>
          <Link to="/about" className={`links ${active === 2 ? "active" : ""}`}>
            ABOUT US
          </Link>
          <Link
            to="/services"
            className={`links ${active === 3 ? "active" : ""}`}
          >
            OUR SERVICES
          </Link>
          <Link
            to="/projects"
            className={`links ${active === 4 ? "active" : ""}`}
          >
            PROJECTS
          </Link>
        </div>
        <div className="nav-dis">
          <div className="nav-call">
            <Call />
            <p className="headFont">
              <span>Call us</span> <br />
              08036654605
            </p>
          </div>
          <div className="nav-call">
            <Mail />
            <p className="headFont">
              <span>Email us</span> <br />
              info@sotainvestmentltd.com
            </p>
          </div>
        </div>
      </div>
      <div className={`${mob ? "mobile-nav" : "hide-nav"}`}>
        <Link to="/" className={`links ${active === 1 ? "active" : ""}`}>
          HOME
        </Link>
        <Link to="/about" className={`links ${active === 2 ? "active" : ""}`}>
          ABOUT US
        </Link>
        <Link
          to="/services"
          className={`links ${active === 3 ? "active" : ""}`}
        >
          OUR SERVICES
        </Link>
        <Link
          to="/projects"
          className={`links ${active === 4 ? "active" : ""}`}
        >
          PROJECTS
        </Link>
        <div className="nav-call">
          <Call />
          <p className="headFont">
            <span>Call us: </span>
            08036654605
          </p>
        </div>
        <div className="nav-call">
          <Mail />
          <p className="headFont">
            <span>Email us: </span>
            info@sotainvestmentltd.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
