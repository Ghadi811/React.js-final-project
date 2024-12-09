import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CallMe from "./components/CallMe";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Landing />} />

          {/* Contact Us */}
          <Route path="/contactus" element={<CallMe />} />

          {/* Menu Page */}
          <Route path="/menu" element={<Menu />} />

          {/* Payment Page */}
          <Route path="/payment" element={<Payment />} />

          {/* Fallback for Undefined Routes */}
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>Page Not Found</h1>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
