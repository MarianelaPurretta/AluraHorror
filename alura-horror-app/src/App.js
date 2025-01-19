import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import UploadVideo from "./pages/UploadVideo";
import VideoList from "./components/VideoList/VideoList";

function App() {
  return (
    <Router>
      <Navbar />
      <VideoList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
