import React, { useState } from "react";
import "./Navbar.css"; // Import the external CSS file
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <img
          src={logo}
          style={{
            width: "60px",
          }}
          alt="Logo"
        />
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`text-font nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="features"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
              onClick={closeMenu}
            >
              <span className="nav-link">Features</span>
            </ScrollLink>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="footer"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
              onClick={closeMenu}
            >
              <span className="nav-link">Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
