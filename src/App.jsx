import React from "react";
import "./App.css";
import JNFuelLogo from "./JNFuelLogo";

const services = [
  {
    no: "01",
    title: "Fuel Delivery",
    description:
      "Reliable fuel delivery solutions designed to keep your business moving without interruption.",
    icon: "⚡",
  },
  {
    no: "02",
    title: "Fleet Solutions",
    description:
      "Smart and dependable fuel solutions for fleets, transport businesses and commercial operations.",
    icon: "🚛",
  },
  {
    no: "03",
    title: "Business Fuel",
    description:
      "Flexible fuel supply solutions built around the changing needs of modern businesses.",
    icon: "⛽",
  },
];

const solutions = [
  "On-demand fuel delivery",
  "Commercial fuel supply",
  "Fleet fuel solutions",
  "Reliable fuel availability",
];

function App() {
  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
  <JNFuelLogo />
</a>

          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Get Started
            <span>↗</span>
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-grid"></div>

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="tag-dot"></span>
            POWERING THE FUTURE OF FUEL DELIVERY
          </div>

          <h1>
            Fueling
            <br />
            <span>Progress.</span>
            <br />
            Moving
            <br />
            <span>Forward.</span>
          </h1>

          <p className="hero-text">
            Fast and dependable fuel solutions for businesses, fleets and modern
            operations. JN Fuel brings fuel closer to where you need it.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="primary-btn">
              Explore Solutions
              <span>↗</span>
            </a>

            <a href="#about" className="outline-btn">
              Discover JN Fuel
            </a>
          </div>
        </div>

        {/* RIGHT 3D AREA */}
        <div className="hero-visual">
          <div className="blue-glow"></div>

          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>

          {/* MAIN 3D SPHERE */}
          <div className="fuel-sphere">
            <div className="sphere-highlight"></div>

            <div className="sphere-ring ring-1"></div>
            <div className="sphere-ring ring-2"></div>
            <div className="sphere-ring ring-3"></div>

            {/* JN FUEL LOGO */}
            <div className="sphere-logo">
              <img src="/jn-fuel-logo.jpeg" alt="JN Fuel" />
            </div>

            <div className="sphere-star">✦</div>
          </div>

          {/* TOP FLOATING CARD */}
          <div className="floating-card delivery-card">
            <div className="floating-icon">⚡</div>

            <div className="floating-info">
              <small>DELIVERY</small>
              <strong>On Demand</strong>
            </div>

            <span className="online-dot"></span>
          </div>

          {/* BOTTOM FLOATING CARD */}
          <div className="floating-card business-card">
            <div className="floating-icon">🚛</div>

            <div className="floating-info">
              <small>FUEL SOLUTION</small>
              <strong>Business Ready</strong>
            </div>

            <span className="online-dot"></span>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        <div className="stat-item">
          <strong>24/7</strong>
          <span>Fuel Availability</span>
        </div>

        <div className="stat-item">
          <strong>100%</strong>
          <span>Reliable Delivery</span>
        </div>

        <div className="stat-item">
          <strong>Fast</strong>
          <span>On-Demand Service</span>
        </div>

        <div className="stat-item">
          <strong>JN</strong>
          <span>Fueling Progress</span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section about-section" id="about">
        <div className="section-label">ABOUT JN FUEL</div>

        <div className="about-layout">
          <div className="about-heading">
            <h2>
              Built to keep
              <br />
              <span>business moving.</span>
            </h2>
          </div>

          <div className="about-description">
            <p>
              JN Fuel Private Limited is focused on providing dependable fuel
              solutions for businesses, fleets and commercial operations.
            </p>

            <p>
              We combine reliable fuel supply, responsive delivery and a modern
              approach to make fuel access simpler, faster and more efficient.
            </p>

            <a href="#contact" className="simple-link">
              Talk to JN Fuel
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section services-section" id="services">
        <div className="services-heading">
          <div>
            <div className="section-label">OUR SERVICES</div>

            <h2>
              Fuel solutions
              <br />
              <span>made simple.</span>
            </h2>
          </div>

          <p>
            Flexible fuel services designed for businesses that cannot afford to
            slow down.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service.no}>
              <div className="service-top">
                <span className="service-number">{service.no}</span>

                <div className="service-icon">{service.icon}</div>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="section solutions-section" id="solutions">
        <div className="solution-visual">
          <div className="solution-orbit"></div>

          <div className="solution-circle">
            <div className="solution-circle-ring"></div>

            <div className="solution-logo">
              <img src="/jn-fuel-logo.jpeg" alt="JN Fuel" />
            </div>
          </div>
        </div>

        <div className="solution-content">
          <div className="section-label">OUR SOLUTIONS</div>

          <h2>
            Fuel that works
            <br />
            <span>around you.</span>
          </h2>

          <p>
            From everyday business requirements to fleet operations, JN Fuel
            provides flexible solutions built around your requirements.
          </p>

          <div className="solution-list">
            {solutions.map((item, index) => (
              <div className="solution-item" key={index}>
                <span className="check-icon">✓</span>

                <span>{item}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="primary-btn">
            Start a Conversation
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* ================= WHY JN ================= */}
      <section className="section why-section">
        <div className="why-heading">
          <div className="section-label">WHY JN FUEL</div>

          <h2>
            More than fuel.
            <br />
            <span>A reliable partner.</span>
          </h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <span>01</span>

            <h3>Reliable</h3>

            <p>
              Dependable fuel solutions designed to support uninterrupted
              business operations.
            </p>
          </div>

          <div className="why-card">
            <span>02</span>

            <h3>Responsive</h3>

            <p>
              Flexible delivery solutions that adapt to changing business
              requirements.
            </p>
          </div>

          <div className="why-card">
            <span>03</span>

            <h3>Future Ready</h3>

            <p>
              A modern approach to fuel delivery and commercial fuel management.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section" id="contact">
        <div className="cta-light"></div>

        <div className="cta-content">
          <div className="section-label">GET STARTED</div>

          <h2>
            Ready to move
            <br />
            <span>forward?</span>
          </h2>

          <p>Let's build a smarter fuel solution for your business.</p>

          <a href="mailto:info@jnfuel.com" className="primary-btn">
            Contact JN Fuel
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/jn-fuel-logo.jpeg" alt="JN Fuel Private Limited" />
            </div>

            <p>
              Powering progress.
              <br />
              Moving business forward.
            </p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>

            <a href="#contact">Contact</a>
            <a href="#contact">Get Started</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 JN Fuel Private Limited. All rights reserved.</span>

          <span>Fueling the future.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
