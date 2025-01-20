// src/components/Banner/Banner.jsx
import React from "react";
import "./Banner.css";

const Banner = ({ recommendedVideo }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Bienvenidos a la Plataforma de Videos</h1>
        <p>¡Descubre los mejores videos de terror y más!</p>
      </div>

      {recommendedVideo && (
        <div className="recommended-card">
          <div
            className="category-card"
            onClick={() => window.open(recommendedVideo.videoUrl, "_blank")}
          >
            <img
              src={recommendedVideo.thumbnailUrl}
              alt={recommendedVideo.name}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="card-content">
              <h3>{recommendedVideo.name}</h3>
              <p>{recommendedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
