import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
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
                <Link to="/about" className="primary-btn">
                  Discover JN Fuel
                  <span>→</span>
                </Link>

                <Link to="/contact" className="secondary-btn">
                  Talk to Us
                </Link>
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
        {/* ================= QUICK INTRO ================= */}
        <section className="trust-section">
          <div className="trust-container">
            <div className="trust-content">
              <span className="trust-label">JN FUEL PRIVATE LIMITED</span>

              <h2>
                Fuel solutions
                <span> closer to every need.</span>
              </h2>

              <p>
                From fuel distribution to local partnerships, JN Fuel is working
                to make fuel access more convenient, reliable and accessible.
              </p>
            </div>

            <div className="trust-stats">
              <div className="trust-stat">
                <strong>Reliable</strong>
                <span>Fuel Solutions</span>
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
      
        {/* ================= WHY CHOOSE JN FUEL ================= */}
        <section className="why-choose-section">
          <div className="why-choose-container">
            <div className="why-choose-heading">
              <span className="section-kicker">THE JN FUEL ADVANTAGE</span>

              <h2>
                Why Choose <span>JN Fuel?</span>
              </h2>

              <p>
                Bringing fuel accessibility, dependable distribution and
                business opportunities closer to every community.
              </p>
            </div>

            <div className="why-choose-grid">
              {/* Card 1 */}
              <div className="why-card">
                <img src="/p1.jpeg" alt="Mini fuel station" />
                <div className="why-card-content">
                  <h3>Fuel Accessibility</h3>
                  <p>
                    Bringing fuel solutions closer to communities with limited
                    access to conventional fuel stations.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="why-card">
                <img src="/p3.jpeg" alt="Mobile fuel delivery solution" />
                <div className="why-card-content">
                  <h3>Reliable Service</h3>
                  <p>
                    Supporting convenient fuel distribution for businesses and
                    customers through dependable solutions.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="why-card">
                <img src="/p2.jpeg" alt="JN Fuel business opportunity" />
                <div className="why-card-content">
                  <h3>Entrepreneurship</h3>
                  <p>
                    Creating opportunities for aspiring entrepreneurs to
                    participate in the growing fuel distribution network.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="why-card">
                <img src="/p1.jpeg" alt="Fuel accessibility in rural areas" />
                <div className="why-card-content">
                  <h3>Rural Development</h3>
                  <p>
                    Supporting local businesses and improving fuel accessibility
                    in rural and underserved regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================= CTA ================= */}
        <section className="mission section">
          <div className="section-container mission-container">
            <span className="section-kicker">EXPLORE JN FUEL</span>

            <h2>
              Making fuel access
              <span> simpler, closer and more connected.</span>
            </h2>

            <p>
              Explore our company, vision, products and services to learn more
              about JN Fuel.
            </p>

            <div className="hero-buttons">
              <Link to="/about" className="primary-btn">
                About JN Fuel
                <span>→</span>
              </Link>

              <Link to="/apply" className="secondary-btn">
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
