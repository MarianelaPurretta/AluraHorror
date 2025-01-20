// src/components/Banner/Banner.jsx
import React from "react";
import "./Banner.css";

const Banner = ({ recommendedVideo }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Sumérgete en la Oscuridad

        </h1>
        <p>Atrévete a explorar los videos más aterradores y perturbadores. Historias que no te dejarán dormir, secretos que nunca debieron ser revelados… ¿Te atreves a entrar?</p>
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
