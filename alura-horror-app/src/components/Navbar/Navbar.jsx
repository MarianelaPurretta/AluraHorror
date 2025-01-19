// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Alura Horror</h1>
      {/* Botón para ir a la página de carga de videos */}
      <Link to="/upload">
        <button>Agregar Video</button>
      </Link>
      {/* Botón para volver al home */}
      <Link to="/">
        <button>Volver al Home</button>
      </Link>
    </nav>
  );
};

export default Navbar;
