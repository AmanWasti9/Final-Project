import React, { useState } from "react";
import "./Navbar.css"; // Import the external CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <a href="#" className="navbar-logo">YourLogo</a>
        <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Features</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
