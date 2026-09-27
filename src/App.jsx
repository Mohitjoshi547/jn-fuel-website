import React, { useState } from "react";
import "./App.css";
import JNFuelLogo from "./JNFuelLogo";
import Apply from "./Apply";
import ApplicationSuccess from "./ApplicationSucess";

const products = [
  {
    title: "Mini Fuel Pump",
    description:
      "Compact fuel access solutions designed to bring reliable fuel availability closer to underserved and semi-urban communities.",
    image: "/p1.jpeg",
  },
  {
    title: "Mini Fuel Partner",
    description:
      "Accessible fuel points designed to support local communities and businesses with convenient fuel availability.",
    image: "/p2.jpeg",
  },
  {
    title: "Mobile Fuel Bowser",
    description:
      "Mobile fuel distribution solutions designed for eligible business, fleet and remote-location requirements.",
    image: "/p3.jpeg",
  },
];

const services = [
  "Mini Fuel Station Development",
  "Fuel Dealer & Distributor Network",
  "Fuel Delivery Solutions",
  "Fuel Distribution & Logistics",
  "Last-Mile Fuel Accessibility",
  "Partner & Franchise Development",
  "Technology-Enabled Fuel Management",
];

const locations = [
  "Rural Areas",
  "Semi-Urban Areas",
  "Remote Regions",
  "Industrial Areas",
  "Agricultural Communities",
  "Commercial Locations",
];

const benefits = [
  "Better fuel accessibility",
  "Reliable fuel supply",
  "Convenient last-mile solutions",
  "Support for local entrepreneurs",
  "Business fuel support",
  "Technology-enabled service",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  if (window.location.pathname === "/apply") {
    return <Apply />;
  }
  if (window.location.pathname === "/success") {
    return <ApplicationSuccess />;
  }

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <div className="jn-navbar-logo">
              <img
                src="/jnfuellogo.png"
                alt="JN Fuel Private Limited"
                className="jn-fuel-logo"
              />
            </div>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#vision" onClick={closeMenu}>
              Vision
            </a>

            <a href="#products" onClick={closeMenu}>
              Products
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a href="/apply" className="nav-button" onClick={closeMenu}>
              Apply Now
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>
        <section className="hero" id="home">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-kicker">JN FUEL PRIVATE LIMITED</span>

              <h1>
                Connecting
                <span> Fuel </span>
                With Every Need,
                <span> Everywhere.</span>
              </h1>

              <p>
                JN Fuel is building a reliable and accessible fuel distribution
                network that brings fuel solutions closer to communities,
                businesses and underserved regions.
              </p>

              <div className="hero-buttons">
                <a href="#about" className="primary-btn">
                  Discover JN Fuel
                  <span>→</span>
                </a>

                <a href="#contact" className="secondary-btn">
                  Talk to Us
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-card">
                <img src="/p3.jpeg" alt="JN Fuel mobile fuel solution" />
              </div>

              <div className="hero-floating-card">
                <span>Fuel Accessibility</span>
                <strong>Closer to Every Need</strong>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <div>
              <strong>Reliable</strong>
              <span>Fuel Solutions</span>
            </div>

            <div>
              <strong>Accessible</strong>
              <span>Last-Mile Network</span>
            </div>

            <div>
              <strong>Connected</strong>
              <span>Business Support</span>
            </div>

            <div>
              <strong>Growing</strong>
              <span>Distribution Network</span>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="about section" id="about">
          <div className="section-container about-grid">
            <div className="about-image">
              <img src="/p2.jpeg" alt="JN Fuel mini fuel station" />

              <div className="image-tag">Fuel Access</div>
            </div>

            <div className="about-content">
              <span className="section-kicker">ABOUT JN FUEL</span>

              <h2>
                Making fuel access
                <span> simpler, closer and more convenient.</span>
              </h2>

              <div className="about-description">
                <p>
                  JN Fuel is an emerging fuel distribution and energy solutions
                  company focused on making reliable fuel accessible in rural,
                  semi-urban, and underserved areas.
                </p>

                <p>
                  We aim to bridge the last-mile fuel gap by developing a
                  network of fuel dealers, mini fuel stations, distribution
                  partners, and fuel delivery solutions. Through
                  technology-enabled distribution, we make fuel access more
                  convenient, efficient, and transparent.
                </p>

                <p>
                  We combine reliable fuel supply, responsive delivery and a
                  modern approach to make fuel access simpler, faster and more
                  efficient.
                </p>

                <a href="#contact" className="simple-link">
                  Talk to JN Fuel
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= VISION ================= */}
        <section className="vision section" id="vision">
          <div className="section-container">
            <div className="vision-top">
              <div>
                <span className="section-kicker">OUR VISION</span>

                <h2>
                  Building a fuel network
                  <span> that reaches every corner.</span>
                </h2>
              </div>

              <p>
                To build a strong and accessible fuel distribution network that
                connects underserved regions with reliable fuel solutions and
                creates sustainable livelihood opportunities.
              </p>
            </div>

            <div className="vision-line"></div>

            <div className="vision-bottom">
              <span>01</span>

              <p>
                Connecting communities, businesses and local entrepreneurs
                through a growing fuel distribution ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WHERE WE SERVE ================= */}
        <section className="serve section">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-kicker">WHERE WE SERVE</span>

              <h2>
                Bringing fuel solutions
                <span> closer to where they matter.</span>
              </h2>

              <p>
                JN Fuel focuses on locations where conventional fuel access can
                be limited or inconvenient.
              </p>
            </div>

            <div className="location-grid">
              {locations.map((location, index) => (
                <div className="location-card" key={location}>
                  <span className="location-icon">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{location}</h3>

                  <span className="location-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= APPROACH ================= */}
        <section className="approach section">
          <div className="section-container approach-grid">
            <div className="approach-content">
              <span className="section-kicker">OUR APPROACH</span>

              <h2>
                Understanding the need.
                <span> Connecting the solution.</span>
              </h2>

              <p>
                We identify regions where customers and businesses experience
                difficulty accessing traditional fuel stations and work towards
                creating convenient local distribution solutions.
              </p>

              <p>
                Our approach combines local partnerships, distribution points,
                fuel delivery solutions and technology-enabled management.
              </p>

              <a href="#services" className="simple-link">
                Explore our services
                <span>→</span>
              </a>
            </div>

            <div className="benefits-list">
              {benefits.map((benefit) => (
                <div className="benefit-item" key={benefit}>
                  <span className="check">✓</span>

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="products section" id="products">
          <div className="section-container">
            <div className="section-heading products-heading">
              <span className="section-kicker">OUR PRODUCTS & SERVICES</span>

              <h2>
                Fuel solutions designed
                <span> around accessibility.</span>
              </h2>

              <p>
                From local fuel access points to mobile distribution solutions,
                JN Fuel is developing flexible ways to bring fuel closer to
                customers and businesses.
              </p>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.title}>
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                  </div>

                  <div className="product-content">
                    <h3>{product.title}</h3>

                    <p>{product.description}</p>

                    <a href="#contact">
                      Know More
                      <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="services section" id="services">
          <div className="section-container">
            <div className="services-header">
              <div>
                <span className="section-kicker">WHAT WE DO</span>

                <h2>
                  Building the infrastructure
                  <span> behind better fuel access.</span>
                </h2>
              </div>

              <p>
                JN Fuel works across fuel distribution, local partnerships and
                technology-enabled solutions to support a more connected fuel
                ecosystem.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <div className="service-card" key={service}>
                  <span className="service-dot"></span>

                  <h3>{service}</h3>

                  <span className="service-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SOLUTIONS ================= */}
        <section className="solutions section">
          <div className="section-container solutions-grid">
            <div className="solutions-image">
              <img src="/p1.jpeg" alt="JN Fuel fuel access solution" />

              <div className="solutions-image-label">Reliable Fuel Access</div>
            </div>

            <div className="solutions-content">
              <span className="section-kicker">BUSINESS SOLUTIONS</span>

              <h2>
                Solutions that keep
                <span> business moving.</span>
              </h2>

              <p>
                JN Fuel supports businesses and communities with convenient fuel
                distribution solutions designed around accessibility,
                reliability and local requirements.
              </p>

              <div className="solution-points">
                <div>
                  <strong>01</strong>
                  <span>On-demand fuel solutions</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Commercial fuel support</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Fleet fuel solutions</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Reliable fuel availability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW WE HELP ================= */}
        <section className="how-help section" id="how-we-help">
          <div className="section-container">
            <div className="how-help-header">
              <div>
                <span className="section-kicker">HOW WE HELP</span>

                <h2>
                  Making fuel access
                  <span> easier for everyone.</span>
                </h2>
              </div>

              <p>
                Our solutions are designed to reduce the distance between fuel
                and the people, businesses and communities that depend on it.
              </p>
            </div>

            <div className="help-grid">
              <div className="help-image">
                <img src="/p3.jpeg" alt="JN Fuel mobile fuel bowser" />
              </div>

              <div className="help-content">
                <div className="help-item">
                  <span>01</span>
                  <div>
                    <h3>Better Accessibility</h3>
                    <p>
                      Supporting fuel access in rural, remote and underserved
                      locations.
                    </p>
                  </div>
                </div>

                <div className="help-item">
                  <span>02</span>
                  <div>
                    <h3>Convenient Solutions</h3>
                    <p>
                      Bringing fuel distribution closer to the point where it is
                      needed.
                    </p>
                  </div>
                </div>

                <div className="help-item">
                  <span>03</span>
                  <div>
                    <h3>Business Support</h3>
                    <p>
                      Supporting industries, transporters, farms and
                      institutions with fuel distribution solutions.
                    </p>
                  </div>
                </div>

                <div className="help-item">
                  <span>04</span>
                  <div>
                    <h3>Local Entrepreneurship</h3>
                    <p>
                      Creating opportunities for dealers and distribution
                      partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUSTED CUSTOMERS ================= */}
        {/* YE SECTION HOW WE HELP KE BAAD HAI */}
        <section className="trust-section">
          <div className="trust-container">
            <div className="trust-content">
              <span className="trust-label">TRUSTED FUEL SOLUTIONS</span>

              <h2>
                We are trusted by <span>1000+ satisfied customers.</span>
              </h2>

              <p>
                From growing businesses to communities in underserved regions,
                JN Fuel is working to make fuel access more convenient, reliable
                and accessible.
              </p>
            </div>

            <div className="trust-stats">
              <div className="trust-stat">
                <strong>1000+</strong>
                <span>Satisfied Customers</span>
              </div>

              <div className="trust-stat">
                <strong>Growing</strong>
                <span>Fuel Network</span>
              </div>

              <div className="trust-stat">
                <strong>Everywhere</strong>
                <span>We Aim To Serve</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MISSION ================= */}
        <section className="mission section">
          <div className="section-container mission-container">
            <span className="section-kicker">OUR MISSION</span>

            <h2>
              Making fuel access
              <span> simpler, closer and more connected.</span>
            </h2>

            <p>
              Our mission is to improve fuel accessibility, develop strong local
              dealer and distribution networks, enable convenient last-mile
              solutions, create entrepreneurship opportunities and use
              technology to make fuel distribution more transparent and
              efficient.
            </p>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact section" id="contact">
          <div className="section-container contact-grid">
            <div className="contact-content">
              <span className="section-kicker">GET IN TOUCH</span>

              <h2>
                Let's build a more
                <span> connected fuel network.</span>
              </h2>

              <p>
                Interested in partnering with JN Fuel, becoming part of our
                distribution network, or learning more about our solutions? Get
                in touch with our team.
              </p>

              <a href="mailto:info@jnfuel.com" className="contact-button">
                Contact JN Fuel
                <span>→</span>
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card-line"></div>

              <span>JN FUEL PRIVATE LIMITED</span>

              <h3>
                Connecting Fuel
                <br />
                With Every Need.
              </h3>

              <p>Reliable fuel distribution and energy solutions.</p>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img
              src="/jnfuellogo.jpeg"
              alt="JN Fuel Private Limited"
              className="footer-logo"
            />

            <p>Connecting fuel with every need, everywhere.</p>
            <h4>Head Office Adress</h4>
            <p>5M57+P49 ,Bidyanagar ,Jalukbari, Guwahati , Assam 781012</p>
            <a href="mailto:info@jnfuel.com" className="contact-button">
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

          <div className="footer-links">
            <div>
              <h4>Explore</h4>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#vision">Vision</a>
              <a href="#products">Products</a>
            </div>

            <div>
              <h4>Company</h4>

              <a href="#services">Services</a>
              <a href="#how-we-help">How We Help</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} JN Fuel Private Limited. All rights
            reserved.
          </span>

          <span>Fueling a more connected tomorrow.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
