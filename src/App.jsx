import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Apply from "./Apply";
import ApplicationSuccess from "./ApplicationSucess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Apply Pages */}
        <Route path="/apply" element={<Apply />} />
        <Route path="/success" element={<ApplicationSuccess />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div style={{ padding: "100px", textAlign: "center" }}>
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;