import React from "react";
import "./ApplicationSucess.css";
import JNFuelLogo from "./JNFuelLogo";

function ApplicationSuccess() {
  return (
    <div className="success-page">

      <header className="success-header">
        <a href="/" className="success-logo">
          <JNFuelLogo />
        </a>

        <a href="/" className="success-home">
          Back to Home
        </a>
      </header>

      <main className="success-main">

        <div className="success-card">

          <div className="success-icon">
            ✓
          </div>

          <span className="success-tag">
            APPLICATION RECEIVED
          </span>

          <h1>
            Thank You for
            <strong> Applying.</strong>
          </h1>

          <p className="success-message">
            Your application has been successfully submitted
            to JN Fuel Private Limited.
          </p>

          <p className="success-submessage">
            Our team will review your details and contact you
            regarding your enquiry.
          </p>

          <div className="enquiry-box">

            <div className="enquiry-heading">
              <span>MORE ENQUIRY?</span>

              <h2>
                Contact <strong>JN Fuel</strong>
              </h2>

              <p>
                For any further information, feel free to
                contact our team.
              </p>
            </div>

            <div className="contact-details">

              <div className="contact-item">
                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <span>CALL US</span>

                  <a href="tel:+919181768699">
                    +91 9181768699
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <span>EMAIL US</span>

                  <a href="mailto:info.jnfuel@gmail.com">
                    info.jnfuel@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item address-item">
                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <span>OFFICE ADDRESS</span>

                  <p>
                    5M57+P49, Bidyanagar, Jalukbari,
                    Guwahati, Assam 781012
                  </p>
                </div>
              </div>

            </div>
          </div>

          <a href="/" className="success-button">
            Back to JN Fuel
            <span>→</span>
          </a>

        </div>

      </main>

      <footer className="success-footer">
        <p>
          © {new Date().getFullYear()} JN Fuel Private Limited.
          All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default ApplicationSuccess;