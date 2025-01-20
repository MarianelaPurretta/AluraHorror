import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage"; // Reutiliza el componente HomePage
import UploadVideo from "./pages/UploadVideo/UploadVideo";

function App() {
  return (
    <Router>
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Sistema de rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página principal */}
        <Route path="/upload" element={<UploadVideo />} /> {/* Agregar video */}
      </Routes>

      {/* Footer siempre visible */}
      <Footer />
    </Router>
  );
}

export default App;
