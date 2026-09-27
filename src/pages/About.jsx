import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

function About() {
  return (
    <div className="app">

      <Navbar />

      <main>

        {/* ================= ABOUT ================= */}
        <section className="about section">

          <div className="section-container about-grid">

            <div className="about-image">

              <img
                src="/p2.jpeg"
                alt="JN Fuel mini fuel station"
              />

              <div className="image-tag">
                Fuel Access
              </div>

            </div>

            <div className="about-content">

              <span className="section-kicker">
                ABOUT JN FUEL
              </span>

              <h2>
                Making fuel access
                <span>
                  {" "}simpler, closer and more convenient.
                </span>
              </h2>

              <div className="about-description">

                <p>
                  JN Fuel is an emerging fuel distribution and
                  energy solutions company focused on making
                  reliable fuel accessible in rural, semi-urban,
                  and underserved areas.
                </p>

                <p>
                  We aim to bridge the last-mile fuel gap by
                  developing a network of fuel dealers, mini fuel
                  stations, distribution partners, and fuel
                  delivery solutions. Through technology-enabled
                  distribution, we make fuel access more
                  convenient, efficient, and transparent.
                </p>

                <p>
                  We combine reliable fuel supply, responsive
                  delivery and a modern approach to make fuel
                  access simpler, faster and more efficient.
                </p>

                <Link
                  to="/contact"
                  className="simple-link"
                >
                  Talk to JN Fuel
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* ================= WHERE WE SERVE ================= */}
        <section className="serve section">

          <div className="section-container">

            <div className="section-heading">

              <span className="section-kicker">
                WHERE WE SERVE
              </span>

              <h2>
                Bringing fuel solutions
                <span>
                  {" "}closer to where they matter.
                </span>
              </h2>

              <p>
                JN Fuel focuses on locations where conventional
                fuel access can be limited or inconvenient.
              </p>

            </div>

            <div className="location-grid">

              {locations.map((location, index) => (

                <div
                  className="location-card"
                  key={location}
                >

                  <span className="location-icon">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{location}</h3>

                  <span className="location-arrow">
                    →
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= APPROACH ================= */}
        <section className="approach section">

          <div className="section-container approach-grid">

            <div className="approach-content">

              <span className="section-kicker">
                OUR APPROACH
              </span>

              <h2>
                Understanding the need.
                <span>
                  {" "}Connecting the solution.
                </span>
              </h2>

              <p>
                We identify regions where customers and
                businesses experience difficulty accessing
                traditional fuel stations and work towards
                creating convenient local distribution solutions.
              </p>

              <p>
                Our approach combines local partnerships,
                distribution points, fuel delivery solutions
                and technology-enabled management.
              </p>

              <Link
                to="/services"
                className="simple-link"
              >
                Explore our services
                <span>→</span>
              </Link>

            </div>


            <div className="benefits-list">

              {benefits.map((benefit) => (

                <div
                  className="benefit-item"
                  key={benefit}
                >

                  <span className="check">
                    ✓
                  </span>

                  <span>
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default About;