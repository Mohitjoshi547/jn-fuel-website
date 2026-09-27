import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Apply.css";
import JNFuelLogo from "./JNFuelLogo";

function Apply() {
  const form = useRef();
  const navigate = useNavigate();

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const sendApplication = (e) => {
    e.preventDefault();

    setSending(true);
    setError("");

    emailjs
      .sendForm(
        "service_wo4hhlr",
        "template_qe0mfke",
        form.current,
        {
          publicKey: "rrwbMuIU_nz648TX7",
        }
      )
      .then(
        () => {
          setSending(false);

          form.current.reset();

          // React Router route
          navigate("/success");
        },
        (error) => {
          console.error("EmailJS Error:", error);

          setSending(false);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="apply-page">

      {/* ================= HEADER ================= */}
      <header className="apply-header">

        <Link to="/" className="apply-logo">
          <JNFuelLogo />
        </Link>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </header>


      {/* ================= MAIN ================= */}
      <main className="apply-main">

        <div className="apply-heading">

          <span>JOIN JN FUEL</span>

          <h1>
            Apply for a
            <strong> Fuel Solution.</strong>
          </h1>

          <p>
            Fill in your details and select the JN Fuel product
            you are interested in.
          </p>

        </div>


        {/* ================= FORM CARD ================= */}
        <div className="apply-card">

          <form
            ref={form}
            onSubmit={sendApplication}
            className="application-form"
          >

            {/* NAME */}
            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />

            </div>


            {/* PHONE */}
            <div className="form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                maxLength="10"
                inputMode="numeric"
                required
              />

            </div>


            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />

            </div>


            {/* AADHAAR LAST 4 */}
            <div className="form-group">

              <label htmlFor="aadhaar">
                Aadhaar Last 4 Digits
              </label>

              <input
                id="aadhaar"
                type="text"
                name="aadhaar_last4"
                placeholder="Enter last 4 digits"
                pattern="[0-9]{4}"
                maxLength="4"
                inputMode="numeric"
                required
              />

              <small>
                For privacy, please do not enter your full Aadhaar number.
              </small>

            </div>


            {/* ADDRESS */}
            <div className="form-group">

              <label htmlFor="address">
                Address
              </label>

              <textarea
                id="address"
                name="address"
                placeholder="Enter your complete address"
                rows="3"
                required
              ></textarea>

            </div>


            {/* STATE */}
            <div className="form-group">

              <label htmlFor="state">
                State
              </label>

              <div className="select-wrapper">

                <select
                  id="state"
                  name="state"
                  required
                  defaultValue=""
                >

                  <option value="" disabled>
                    Select your state
                  </option>

                  <option value="Andhra Pradesh">
                    Andhra Pradesh
                  </option>

                  <option value="Arunachal Pradesh">
                    Arunachal Pradesh
                  </option>

                  <option value="Assam">
                    Assam
                  </option>

                  <option value="Bihar">
                    Bihar
                  </option>

                  <option value="Chhattisgarh">
                    Chhattisgarh
                  </option>

                  <option value="Goa">
                    Goa
                  </option>

                  <option value="Gujarat">
                    Gujarat
                  </option>

                  <option value="Haryana">
                    Haryana
                  </option>

                  <option value="Himachal Pradesh">
                    Himachal Pradesh
                  </option>

                  <option value="Jharkhand">
                    Jharkhand
                  </option>

                  <option value="Karnataka">
                    Karnataka
                  </option>

                  <option value="Kerala">
                    Kerala
                  </option>

                  <option value="Madhya Pradesh">
                    Madhya Pradesh
                  </option>

                  <option value="Maharashtra">
                    Maharashtra
                  </option>

                  <option value="Manipur">
                    Manipur
                  </option>

                  <option value="Meghalaya">
                    Meghalaya
                  </option>

                  <option value="Mizoram">
                    Mizoram
                  </option>

                  <option value="Nagaland">
                    Nagaland
                  </option>

                  <option value="Odisha">
                    Odisha
                  </option>

                  <option value="Punjab">
                    Punjab
                  </option>

                  <option value="Rajasthan">
                    Rajasthan
                  </option>

                  <option value="Sikkim">
                    Sikkim
                  </option>

                  <option value="Tamil Nadu">
                    Tamil Nadu
                  </option>

                  <option value="Telangana">
                    Telangana
                  </option>

                  <option value="Tripura">
                    Tripura
                  </option>

                  <option value="Uttar Pradesh">
                    Uttar Pradesh
                  </option>

                  <option value="Uttarakhand">
                    Uttarakhand
                  </option>

                  <option value="West Bengal">
                    West Bengal
                  </option>

                  <option value="Delhi">
                    Delhi
                  </option>

                  <option value="Jammu and Kashmir">
                    Jammu and Kashmir
                  </option>

                  <option value="Ladakh">
                    Ladakh
                  </option>

                </select>

                <span className="select-arrow">
                  ↓
                </span>

              </div>

            </div>


            {/* PINCODE */}
            <div className="form-group">

              <label htmlFor="pincode">
                Pincode
              </label>

              <input
                id="pincode"
                type="text"
                name="pincode"
                placeholder="Enter 6-digit pincode"
                pattern="[0-9]{6}"
                maxLength="6"
                inputMode="numeric"
                required
              />

            </div>


            {/* PRODUCT */}
            <div className="form-group">

              <label>
                Select Product
              </label>

              <div className="product-options">

                {/* PRODUCT 1 */}
                <label className="product-option">

                  <input
                    type="radio"
                    name="product"
                    value="Mini Fuel Pump"
                    required
                  />

                  <span>
                    <strong>
                      Mini Fuel Pump
                    </strong>

                    <small>
                      Compact fuel access solution
                    </small>
                  </span>

                </label>


                {/* PRODUCT 2 */}
                <label className="product-option">

                  <input
                    type="radio"
                    name="product"
                    value="Mini Fuel Partner"
                  />

                  <span>
                    <strong>
                       Fuel Delivery Partner
                    </strong>

                    <small>
                      Local fuel business opportunity
                    </small>
                  </span>

                </label>


                {/* PRODUCT 3 */}
                <label className="product-option">

                  <input
                    type="radio"
                    name="product"
                    value="Mobile Fuel Bowser"
                  />

                  <span>
                    <strong>
                      Mobile Fuel Bowser
                    </strong>

                    <small>
                      Mobile fuel distribution solution
                    </small>
                  </span>

                </label>

              </div>

            </div>


            {/* ERROR */}
            {error && (
              <div className="form-error">
                {error}
              </div>
            )}


            {/* SUBMIT */}
            <button
              type="submit"
              className="apply-submit"
              disabled={sending}
            >

              {sending
                ? "Submitting..."
                : "Submit Application"
              }

              {!sending && (
                <span>→</span>
              )}

            </button>

          </form>

        </div>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="apply-footer">

        <p>
          © {new Date().getFullYear()} JN Fuel Private Limited.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Apply;