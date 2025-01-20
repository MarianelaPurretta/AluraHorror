// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import VideoList from "./components/VideoList/VideoList"; 
import UploadVideo from "./pages/UploadVideo/UploadVideo";

function App() {
  return (
    <Router>
      {/* Navbar y Footer siempre visibles */}
      <Navbar />
      <Routes>
        {/* Página principal: muestra VideoList */}
        <Route path="/" element={<VideoList />} />

        {/* Nueva página: UploadVideo */}
        <Route path="/upload" element={<UploadVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
