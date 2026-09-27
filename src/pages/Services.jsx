import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  "Mini Fuel Station Development",
  "Fuel Dealer & Distributor Network",
  "Fuel Delivery Solutions",
  "Fuel Distribution & Logistics",
  "Last-Mile Fuel Accessibility",
  "Partner & Franchise Development",
  "Technology-Enabled Fuel Management",
];

function Services() {
  return (
    <div className="app">

      <Navbar />

      <main>

        {/* ================= SERVICES ================= */}
        <section className="services section">

          <div className="section-container">

            <div className="services-header">

              <div>

                <span className="section-kicker">
                  WHAT WE DO
                </span>

                <h2>
                  Building the infrastructure
                  <span>
                    {" "}behind better fuel access.
                  </span>
                </h2>

              </div>

              <p>
                JN Fuel works across fuel distribution,
                local partnerships and technology-enabled
                solutions to support a more connected
                fuel ecosystem.
              </p>

            </div>


            <div className="services-grid">

              {services.map((service) => (

                <div
                  className="service-card"
                  key={service}
                >

                  <span className="service-dot"></span>

                  <h3>
                    {service}
                  </h3>

                  <span className="service-arrow">
                    →
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= HOW WE HELP ================= */}
        <section className="how-help section">

          <div className="section-container">

            <div className="how-help-header">

              <div>

                <span className="section-kicker">
                  HOW WE HELP
                </span>

                <h2>
                  Making fuel access
                  <span>
                    {" "}easier for everyone.
                  </span>
                </h2>

              </div>

              <p>
                Our solutions are designed to reduce the
                distance between fuel and the people,
                businesses and communities that depend on it.
              </p>

            </div>


            <div className="help-grid">

              <div className="help-image">

                <img
                  src="/p3.jpeg"
                  alt="JN Fuel mobile fuel bowser"
                />

              </div>


              <div className="help-content">

                <div className="help-item">

                  <span>01</span>

                  <div>

                    <h3>
                      Better Accessibility
                    </h3>

                    <p>
                      Supporting fuel access in rural,
                      remote and underserved locations.
                    </p>

                  </div>

                </div>


                <div className="help-item">

                  <span>02</span>

                  <div>

                    <h3>
                      Convenient Solutions
                    </h3>

                    <p>
                      Bringing fuel distribution closer
                      to the point where it is needed.
                    </p>

                  </div>

                </div>


                <div className="help-item">

                  <span>03</span>

                  <div>

                    <h3>
                      Business Support
                    </h3>

                    <p>
                      Supporting industries, transporters,
                      farms and institutions with fuel
                      distribution solutions.
                    </p>

                  </div>

                </div>


                <div className="help-item">

                  <span>04</span>

                  <div>

                    <h3>
                      Local Entrepreneurship
                    </h3>

                    <p>
                      Creating opportunities for dealers
                      and distribution partners.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TRUST ================= */}
        <section className="trust-section">

          <div className="trust-container">

            <div className="trust-content">

              <span className="trust-label">
                TRUSTED FUEL SOLUTIONS
              </span>

              <h2>
                We are trusted by
                <span>
                  {" "}1000+ satisfied customers.
                </span>
              </h2>

              <p>
                From growing businesses to communities in
                underserved regions, JN Fuel is working to
                make fuel access more convenient, reliable
                and accessible.
              </p>

            </div>


            <div className="trust-stats">

              <div className="trust-stat">

                <strong>
                  1000+
                </strong>

                <span>
                  Satisfied Customers
                </span>

              </div>


              <div className="trust-stat">

                <strong>
                  Growing
                </strong>

                <span>
                  Fuel Network
                </span>

              </div>


              <div className="trust-stat">

                <strong>
                  Everywhere
                </strong>

                <span>
                  We Aim To Serve
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="mission section">

          <div className="section-container mission-container">

            <span className="section-kicker">
              WORK WITH US
            </span>

            <h2>
              Build the future of
              <span>
                {" "}fuel accessibility.
              </span>
            </h2>

            <p>
              Interested in becoming a partner or learning
              more about our distribution network?
            </p>

            <Link
              to="/contact"
              className="primary-btn"
            >
              Talk to Us
              <span>→</span>
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Services;