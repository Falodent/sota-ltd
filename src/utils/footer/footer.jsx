import React from "react";
import "./footer.css";
import Logo from "../../assets/sota.png";
import { Link } from "react-router-dom";

const Footer = ({active}) => {
  return (
    <div className="footer">
      <div className="upfooter">
        <div className="part1">
          <img src={Logo} alt="" />
          <p className="title headFont">Sota Investment Limited</p>
        </div>
        <div className="part2">
          <ul className="ft-links">
            Quick Links
            <li>
              <Link to="/" className={`links ${active === 1 ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`links ${active === 2 ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`links ${active === 3 ? "active" : ""}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`links ${active === 4 ? "active" : ""}`}
              >
                Projects
              </Link>
            </li>
          </ul>
          <ul className="address">
            SOTA Head Office
            <li>
              <span>Address:</span> <br />
              20C Omachi Street Off East/West Road, Rumuodumaya <br /> New
              Layout P.H, Rivers State
            </li>
            <li>
              <span>Call:</span> <br />
              08036654605, 08032558672
            </li>
            <li>
              <span>Email:</span> <br />
              info@sotainvestmentltd.com
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p>&copy; All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
