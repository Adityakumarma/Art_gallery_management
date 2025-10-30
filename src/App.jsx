import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Artist/components/Navbar.jsx";
import Footer from "./Artist/components/Footer.jsx";

import Home from "./Artist/pages/Home.jsx";
import Addwork from "./Artist/pages/Addwork.jsx";
import Viewwork from "./Artist/pages/Viewwork.jsx";
import Editwork from "./Artist/pages/Editwork.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Addwork />} />
          <Route path="/view" element={<Viewwork />} />
          <Route path="/edit/:id" element={<Editwork />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

