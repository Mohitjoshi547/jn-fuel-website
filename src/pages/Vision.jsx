import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Vision() {
  return (
    <div className="app">

      <Navbar />

      <main>

        {/* ================= VISION ================= */}
        <section className="vision section">

          <div className="section-container">

            <div className="vision-top">

              <div>

                <span className="section-kicker">
                  OUR VISION
                </span>

                <h2>
                  Building a fuel network
                  <span>
                    {" "}that reaches every corner.
                  </span>
                </h2>

              </div>

              <p>
                To build a strong and accessible fuel
                distribution network that connects underserved
                regions with reliable fuel solutions and creates
                sustainable livelihood opportunities.
              </p>

            </div>

            <div className="vision-line"></div>

            <div className="vision-bottom">

              <span>01</span>

              <p>
                Connecting communities, businesses and local
                entrepreneurs through a growing fuel
                distribution ecosystem.
              </p>

            </div>

          </div>

        </section>


        {/* ================= MISSION ================= */}
        <section className="mission section">

          <div className="section-container mission-container">

            <span className="section-kicker">
              OUR MISSION
            </span>

            <h2>
              Making fuel access
              <span>
                {" "}simpler, closer and more connected.
              </span>
            </h2>

            <p>
              Our mission is to improve fuel accessibility,
              develop strong local dealer and distribution
              networks, enable convenient last-mile solutions,
              create entrepreneurship opportunities and use
              technology to make fuel distribution more
              transparent and efficient.
            </p>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="contact section">

          <div className="section-container contact-grid">

            <div className="contact-content">

              <span className="section-kicker">
                OUR DIRECTION
              </span>

              <h2>
                Building a more
                <span>
                  {" "}connected fuel network.
                </span>
              </h2>

              <p>
                Learn more about our products and services
                or connect with the JN Fuel team.
              </p>

              <Link
                to="/products"
                className="contact-button"
              >
                Explore Products
                <span>→</span>
              </Link>

            </div>

            <div className="contact-card">

              <div className="contact-card-line"></div>

              <span>
                JN FUEL PRIVATE LIMITED
              </span>

              <h3>
                Connecting Fuel
                <br />
                With Every Need.
              </h3>

              <p>
                Reliable fuel distribution and energy
                solutions.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Vision;