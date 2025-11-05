import React from "react";
import { Link } from "react-router-dom";

function UserFooter() {
  return (
    <footer
      className="bg-black text-white border-top border-secondary"
      style={{
        // position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid text-center py-3 px-2">
        <div className="row justify-content-center align-items-center m-0">
          {/* About */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold text-uppercase mb-2">About Galleria</h6>
            <p className="text-secondary small mb-0 px-3">
              Galleria connects artists and art lovers around the world — explore,
              share, and celebrate creativity in every form.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold text-uppercase mb-2">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li className="d-inline mx-2">
                <Link className="text-secondary text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li className="d-inline mx-2">
                <Link className="text-secondary text-decoration-none" to="/about">
                  About
                </Link>
              </li>
              <li className="d-inline mx-2">
                <Link
                  className="text-secondary text-decoration-none"
                  to="/collection"
                >
                  Collection
                </Link>
              </li>
              <li className="d-inline mx-2">
                <Link
                  className="text-secondary text-decoration-none"
                  to="/artists"
                >
                  Artists
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h6 className="fw-bold text-uppercase mb-2">Contact</h6>
            <p className="text-secondary small mb-0">
              <i className="bi bi-envelope me-2"></i> support@galleria.com
            </p>
            <p className="text-secondary small mb-0">
              <i className="bi bi-telephone me-2"></i> +91 98765 43210
            </p>
          </div>
        </div>

        <hr className="border-secondary my-2" />

        <p className="text-secondary small mb-0">
          © {new Date().getFullYear()} <strong>Galleria</strong> | Designed by{" "}
          <span className="text-white">Team2</span>
        </p>
      </div>
    </footer>
  );
}

export default UserFooter;
