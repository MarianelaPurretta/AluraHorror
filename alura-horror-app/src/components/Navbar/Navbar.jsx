// src/components/Navbar/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  return (
    <nav className="navbar">
      {/* Logo de la aplicación */}
      <img src="/assets/logos/logo-AH.png" alt="Logo" className="navbar-logo" />

      {/* Botones de navegación */}
      <div className="navbar-buttons">
        <Button onClick={() => navigate("/")}>Inicio</Button>
        <Button onClick={() => navigate("/upload")}>Subir Video</Button>
      </div>
    </nav>
  );
};

export default Navbar;
