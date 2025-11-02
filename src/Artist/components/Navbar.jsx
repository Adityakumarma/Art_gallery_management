import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-black px-4 shadow-sm">
    <Link className="navbar-brand fw-bold text-white fs-4" to="/">Galleria</Link>
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
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/add">Add Work</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/view">Art Collection</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
