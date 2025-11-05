import React from "react";
import { Link, useNavigate } from "react-router-dom";

function UserHeader() {
  const navigate = useNavigate();

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear logged user data
    localStorage.removeItem("token"); // (optional, if you ever store token)
    alert("👋 Logged out successfully!");
    navigate("/"); // Redirect to login page
  };

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-black px-4 shadow-sm">
        <Link className="navbar-brand fw-bold text-white fs-4" to="/userhome">
          Galleria
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/userhome">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/userabout">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/collection">
                Art Collection
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/wishlist">
                Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">
                Cart
              </Link>
            </li>

            {/* ✅ Logout Button */}
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="btn btn-link nav-link text-white text-decoration-none"
                style={{ cursor: "pointer" }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default UserHeader;
