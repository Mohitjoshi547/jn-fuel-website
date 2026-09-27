import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    title: "Mini Fuel Pump",
    description:
      "Compact fuel access solutions designed to bring reliable fuel availability closer to underserved and semi-urban communities.",
    image: "/p1.jpeg",
  },
  {
    title: " Fuel Delivery Partner",
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

function Products() {
  return (
    <div className="app">

      <Navbar />

      <main>

        {/* ================= PRODUCTS ================= */}
        <section className="products section">

          <div className="section-container">

            <div className="section-heading products-heading">

              <span className="section-kicker">
                OUR PRODUCTS & SERVICES
              </span>

              <h2>
                Fuel solutions designed
                <span>
                  {" "}around accessibility.
                </span>
              </h2>

              <p>
                From local fuel access points to mobile
                distribution solutions, JN Fuel is developing
                flexible ways to bring fuel closer to customers
                and businesses.
              </p>

            </div>


            <div className="product-grid">

              {products.map((product) => (

                <article
                  className="product-card"
                  key={product.title}
                >

                  <div className="product-image">

                    <img
                      src={product.image}
                      alt={product.title}
                    />

                  </div>

                  <div className="product-content">

                    <h3>
                      {product.title}
                    </h3>

                    <p>
                      {product.description}
                    </p>

                    <Link to="/contact">
                      Know More
                      <span>→</span>
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* ================= BUSINESS SOLUTIONS ================= */}
        <section className="solutions section">

          <div className="section-container solutions-grid">

            <div className="solutions-image">

              <img
                src="/p1.jpeg"
                alt="JN Fuel fuel access solution"
              />

              <div className="solutions-image-label">
                Reliable Fuel Access
              </div>

            </div>


            <div className="solutions-content">

              <span className="section-kicker">
                BUSINESS SOLUTIONS
              </span>

              <h2>
                Solutions that keep
                <span>
                  {" "}business moving.
                </span>
              </h2>

              <p>
                JN Fuel supports businesses and communities
                with convenient fuel distribution solutions
                designed around accessibility, reliability
                and local requirements.
              </p>


              <div className="solution-points">

                <div>
                  <strong>01</strong>
                  <span>
                    On-demand fuel solutions
                  </span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>
                    Commercial fuel support
                  </span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>
                    Fleet fuel solutions
                  </span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>
                    Reliable fuel availability
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="mission section">

          <div className="section-container mission-container">

            <span className="section-kicker">
              PARTNER WITH US
            </span>

            <h2>
              Interested in our
              <span>
                {" "}fuel solutions?
              </span>
            </h2>

            <p>
              Get in touch with JN Fuel to learn more about
              our products and distribution solutions.
            </p>

            <Link
              to="/contact"
              className="primary-btn"
            >
              Contact Us
              <span>→</span>
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Products;