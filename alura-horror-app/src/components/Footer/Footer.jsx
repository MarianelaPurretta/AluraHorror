// src/components/Footer/Footer.jsx

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src="/assets/logos/logo-AH.png"
          alt="Logo"
          className="footer-logo"
        />
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Marianela Purretta 2025. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
