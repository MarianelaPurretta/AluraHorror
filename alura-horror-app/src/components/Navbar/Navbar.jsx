// src/components/Navbar/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Lista de Videos</button>
      </Link>

      <Link to="/upload">
        <button>Agregar Video</button>
      </Link>
    </nav>
  );
};

export default Navbar;
