// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src="/assets/logos/logo-AH.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Lista de Videos</Link>
        <Link to="/upload">Agregar Video</Link>
      </div>
    </nav>
  );
};

export default Navbar;
