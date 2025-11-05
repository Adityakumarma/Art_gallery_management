import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// 🎨 Artist module imports
import Home from "./Artist/pages/Home";
import Addwork from "./Artist/pages/Addwork";
import Viewwork from "./Artist/pages/Viewwork";
import Editwork from "./Artist/pages/Editwork";

// 👤 User module imports
import UserHome from "./user/pages/UserHome";
import Collection from "./user/pages/Collection";
import UserAbout from "./user/pages/UserAbout";

// ❌ 404 Page import
import PageNotFound from "./Artist/pages/PageNotFound";

function App() {
  return (
    <Routes>
      {/* Redirect root to artist home */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* 🎨 Artist routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<Addwork />} />
      <Route path="/view" element={<Viewwork />} />
      <Route path="/edit/:id" element={<Editwork />} />

      {/* 👤 User routes */}
      <Route path="/userHome" element={<UserHome />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/userabout" element={<UserAbout />} />

      {/* ❌ Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
