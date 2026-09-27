import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="app">

      <Navbar />

      <main>

        {/* ================= CONTACT ================= */}
        <section className="contact section">

          <div className="section-container contact-grid">

            <div className="contact-content">

              <span className="section-kicker">
                GET IN TOUCH
              </span>

              <h2>
                Let's build a more
                <span>
                  {" "}connected fuel network.
                </span>
              </h2>

              <p>
                Interested in partnering with JN Fuel,
                becoming part of our distribution network,
                or learning more about our solutions?
                Get in touch with our team.
              </p>

              <a
                href="mailto:info@jnfuel.com"
                className="contact-button"
              >
                Contact JN Fuel
                <span>→</span>
              </a>

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


        {/* ================= CONTACT DETAILS ================= */}
        <section className="mission section">

          <div className="section-container mission-container">

            <span className="section-kicker">
              CONTACT DETAILS
            </span>

            <h2>
              Get in touch with
              <span>
                {" "}JN Fuel.
              </span>
            </h2>

            <p>
              Head Office: 5M57+P49, Bidyanagar,
              Jalukbari, Guwahati, Assam 781012
            </p>

            <p>
              Email:{" "}
              <a href="mailto:info@jnfuel.com">
                info@jnfuel.com
              </a>
            </p>

            <p>
              Phone:{" "}
              <a href="tel:+919181768699">
                +91 9181768699
              </a>
            </p>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Contact;