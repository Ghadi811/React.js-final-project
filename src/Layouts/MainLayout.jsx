import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: "1.5rem" }}>
              موقعي
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/" style={{ fontSize: "1.1rem" }}>
                    الرئيسية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/menu" style={{ fontSize: "1.1rem" }}>
                    قائمة الطعام
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/contactus" style={{ fontSize: "1.1rem" }}>
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-light text-center py-4">
        <div className="container">
          <div className="mb-3">
            <Link to="/" className="text-dark mx-3" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
              الرئيسية
            </Link>
            <Link to="/contactus" className="text-dark mx-3" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
              تواصل معنا
            </Link>
          </div>
          <div className="mb-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-2" style={{ fontSize: "1.5rem" }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-2" style={{ fontSize: "1.5rem" }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-2" style={{ fontSize: "1.5rem" }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-2" style={{ fontSize: "1.5rem" }}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p style={{ fontSize: "0.9rem", margin: "0" }}>
            &copy; 2024 موقعي. جميع الحقوق محفوظة. 
          </p>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
