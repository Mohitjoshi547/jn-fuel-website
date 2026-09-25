import { useState } from "react";
import FuelModel from "./FuelModel";
import "./PublicWebsite.css";

const products = [
  {
    number: "01",
    name: "Regular Petrol",
    description: "Reliable fuel solutions for everyday journeys.",
    symbol: "✦",
  },
  {
    number: "02",
    name: "Diesel",
    description: "Dependable energy for demanding applications.",
    symbol: "◆",
  },
  {
    number: "03",
    name: "Premium Fuel",
    description: "Explore our premium fuel product range.",
    symbol: "✧",
  },
];

export default function PublicWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="fuel-site">

      {/* ================= NAVBAR ================= */}
      <nav className="fuel-nav">

        <a
          className="fuel-logo"
          href="#home"
          onClick={closeMenu}
        >
          <img
            src="/jn-fuel-logo.jpeg"
            alt="JN Fuel Private Limited"
            className="logo-image"
          />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#products" onClick={closeMenu}>
            Products
          </a>

          <a href="#about" onClick={closeMenu}>
            About Us
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Get in Touch ↗
          </a>
        </div>

      </nav>


      {/* ================= HERO ================= */}
      <section className="fuel-hero" id="home">

        <div className="hero-copy">

          <div className="eyebrow">
            <span className="eyebrow-line" />
            POWERING EVERY JOURNEY
          </div>

          <h1>
            Energy for a
            <br />
            <span>Brighter Future.</span>
          </h1>

          <p className="hero-description">
            Discover dependable fuel solutions designed to keep
            your business and your world moving forward.
          </p>

          <div className="hero-buttons">

            <a
              href="#products"
              className="btn-primary"
            >
              Explore Products <span>↗</span>
            </a>

            <a
              href="#about"
              className="btn-outline"
            >
              Discover More
            </a>

          </div>

          <div className="hero-note">
            <span className="status-dot" />
            Quality · Reliability · Performance
          </div>

        </div>


        {/* ================= 3D MODEL ================= */}
        <div className="hero-visual">

          <div className="visual-glow" />

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="model-tag tag-top">
            <span className="tag-dot" />
            PRODUCT SHOWCASE
          </div>

          <FuelModel />

          <div className="model-caption">
            <span>01 / FEATURED PRODUCT</span>

            <h3>
              JN Fuel
            </h3>

            <p>
              Drag to rotate · Scroll to zoom
            </p>
          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="stats-strip">

        <div>
          <strong>01</strong>
          <span>Quality Focus</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Customer Support</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Customer Commitment</span>
        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section
        className="product-section"
        id="products"
      >

        <div className="section-heading">

          <span className="eyebrow">
            OUR PRODUCTS
          </span>

          <h2>
            Power that
            <br />
            <span>moves you.</span>
          </h2>

          <p>
            Explore our range of fuel products and find the
            solution that suits your requirements.
          </p>

        </div>


        <div className="product-grid">

          {products.map((product) => (

            <article
              className="product-card"
              key={product.number}
            >

              <div className="product-card-top">

                <span className="product-number">
                  {product.number}
                </span>

                <span className="product-symbol">
                  {product.symbol}
                </span>

              </div>


              <div className="product-visual">

                <div className="product-orb">
                  <span>
                    {product.symbol}
                  </span>
                </div>

              </div>


              <h3>
                {product.name}
              </h3>

              <p>
                {product.description}
              </p>


              <a
                href="#contact"
                className="product-link"
              >
                Enquire now <span>↗</span>
              </a>

            </article>

          ))}

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section
        className="about-section"
        id="about"
      >

        <div className="about-decoration">
          JN
        </div>


        <div className="about-content">

          <span className="eyebrow">
            ABOUT JN FUEL
          </span>

          <h2>
            Built around energy.
            <br />
            <span>Driven by reliability.</span>
          </h2>

          <p>
            At JN Fuel, our focus is on dependable fuel solutions,
            strong customer relationships and a commitment to
            quality service. We work to help keep people and
            businesses moving.
          </p>

          <a
            href="#contact"
            className="btn-primary"
          >
            Connect With Us <span>↗</span>
          </a>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section
        className="contact-section"
        id="contact"
      >

        <span className="eyebrow">
          LET'S CONNECT
        </span>

        <h2>
          Ready to move
          <br />
          <span>forward together?</span>
        </h2>

        <p>
          Contact our team to learn more about our products
          and available fuel solutions.
        </p>


        <a
          className="btn-primary"
          href="mailto:yourcompany@example.com"
        >
          Contact Us <span>↗</span>
        </a>


        <div className="contact-details">

          <span>
            yourcompany@example.com
          </span>

          <span>
            +91 XXXXX XXXXX
          </span>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="fuel-footer">

        <a
          className="fuel-logo"
          href="#home"
        >
          <img
            src="/jn-fuel-logo.jpeg"
            alt="JN Fuel Private Limited"
            className="logo-image footer-logo"
          />
        </a>


        <p>
          Powering journeys. Building connections.
        </p>


        <span className="copyright">
          © {new Date().getFullYear()} JN Fuel. All rights reserved.
        </span>

      </footer>

    </main>
  );
}