import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark px-4">
    <Link className="navbar-brand fw-bold" to="/">🎨 Art Gallery</Link>
    <div className="ms-auto">
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/add">Add Work</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/view">View Work</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

