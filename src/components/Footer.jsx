import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* FOOTER BRAND */}
        <div className="footer-brand">

          <img
            src="/jnfuellogo.jpeg"
            alt="JN Fuel Private Limited"
            className="footer-logo"
          />

          <p>
            Connecting fuel with every need, everywhere.
          </p>

          <h4>Head Office Adress</h4>

          <p>
            5M57+P49 ,Bidyanagar ,Jalukbari,
            Guwahati , Assam 781012
          </p>

          <a
            href="mailto:info@jnfuel.com"
            className="contact-button"
          >
            <span className="mail-icon">✉</span>
            info@jnfuel.com
          </a>

          <div className="footer-contact">
            <a href="tel:+919181768699">
              <i className="bi bi-telephone-fill"></i>
              <span>+91 9181768699</span>
            </a>
          </div>

        </div>

        {/* FOOTER LINKS */}
        <div className="footer-links">

          <div>
            <h4>Explore</h4>

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/vision">
              Vision
            </Link>

            <Link to="/products">
              Products
            </Link>
          </div>

          <div>
            <h4>Company</h4>

            <Link to="/services">
              Services
            </Link>

            <Link to="/services">
              How We Help
            </Link>

            <Link to="/contact">
              Contact
            </Link>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} JN Fuel Private Limited.
          All rights reserved.
        </span>

        <span>
          Fueling a more connected tomorrow.
        </span>

      </div>

    </footer>
  );
}

export default Footer;