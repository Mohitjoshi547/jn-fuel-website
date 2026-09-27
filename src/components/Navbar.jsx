import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="jn-navbar-logo">
            <img
              src="/jnfuellogo.png"
              alt="JN Fuel Private Limited"
              className="jn-fuel-logo"
            />
          </div>
        </Link>

        {/* MOBILE MENU */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/vision"
            onClick={closeMenu}
          >
            Vision
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
          >
            Products
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <Link
            to="/apply"
            className="nav-button"
            onClick={closeMenu}
          >
            Apply Now
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;