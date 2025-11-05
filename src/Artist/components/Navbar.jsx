import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove logged-in user info saved after login
    localStorage.removeItem("user");

    // Optional: if you’re storing token or role, clear them too
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    alert("👋 Logged out successfully!");
    navigate("/"); // Go back to login page
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-black px-4 shadow-sm">
      <Link className="navbar-brand fw-bold text-white fs-4" to="/home">
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

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add">
              Add Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/view">
              Art Collection
            </Link>
          </li>
          {/* ✅ JSON Server Logout button */}
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
  );
};

export default Navbar;
