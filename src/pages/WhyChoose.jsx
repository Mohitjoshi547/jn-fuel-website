import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./WhyChoose.css";

const reasons = [
  {
    icon: "bi bi-rocket-takeoff-fill",
    title: "Fast Delivery",
    text: "Quick & On Time",
  },
  {
    icon: "bi bi-shield-fill-check",
    title: "Safe Fuel",
    text: "100% Quality",
  },
  {
    icon: "bi bi-people-fill",
    title: "Certified Team",
    text: "Trained Professionals",
  },
  {
    icon: "bi bi-clock-fill",
    title: "24/7 Support",
    text: "Always Here",
  },
  {
    icon: "bi bi-currency-rupee",
    title: "Affordable Price",
    text: "Best Price Guarantee",
  },
  {
    icon: "bi bi-trophy-fill",
    title: "Trusted Company",
    text: "You Can Rely On",
  },
];

const WhyChoose = () => {
  return (
    <div
      className="why-page"
      style={{
        minHeight: "100vh",
        background: "#071b45",
        color: "#ffffff",
      }}
    >
      <Navbar />

      <main
        className="why-main"
        style={{
          background: "#071b45",
          color: "#ffffff",
        }}
      >
        <section
          className="why-section"
          style={{
            background: "#071b45",
            color: "#ffffff",
          }}
        >
          <div className="why-container">
            <div className="why-heading">
              <h1
                style={{
                  color: "#ffffff",
                }}
              >
                Why Choose JN Fuel?
              </h1>

              <div
                className="why-line"
                style={{
                  background: "#ff8a00",
                }}
              ></div>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                }}
              >
                Reliable fuel solutions designed to keep your business
                and operations moving without interruption.
              </p>
            </div>

            <div className="why-grid">
              {reasons.map((reason, index) => (
                <div className="why-card" key={index}>
                  <div
                    className="why-icon"
                    style={{
                      color: "#ff8a00",
                    }}
                  >
                    <i className={reason.icon}></i>
                  </div>

                  <h3
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    {reason.title}
                  </h3>

                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyChoose;