import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 mt-auto border-top border-secondary">
      <div className="container">
        <div className="row text-center text-md-start justify-content-center">
          {/* About Column */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase mb-3 text-center">About Galleria</h5>
            <p className="text-secondary small mx-auto" style={{ maxWidth: "350px", textAlign: "justify" }}>
              Galleria is a creative hub that connects artists and art lovers worldwide.
              Discover, share, and appreciate beautiful works of art — all in one inspiring platform.
              Our mission is to celebrate creativity and make art accessible to everyone.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-4 mb-4 text-center">
            <h5 className="fw-bold text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link className="text-secondary text-decoration-none" to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link className="text-secondary text-decoration-none" to="/add">Add Work</Link>
              </li>
              <li className="mb-2">
                <Link className="text-secondary text-decoration-none" to="/view">View Work</Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-md-4 mb-4 text-center">
            <h5 className="fw-bold text-uppercase mb-3">Contact</h5>
            <p className="text-secondary small mb-1">
              <i className="bi bi-envelope me-2"></i> support@galleria.com
            </p>
            <p className="text-secondary small mb-1">
              <i className="bi bi-telephone me-2"></i> +91 98765 43210
            </p>
            <p className="text-secondary small">
              <i className="bi bi-geo-alt me-2"></i> Kochi, Kerala, India
            </p>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Footer Bottom */}
        <div className="text-center text-secondary small mt-3">
          © {new Date().getFullYear()} <strong>Galleria</strong> | Designed by
          <span className="text-white"> Artist Module</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
