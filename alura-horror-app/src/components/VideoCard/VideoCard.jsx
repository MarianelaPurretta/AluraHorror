// src/components/VideoCard/VideoCard.jsx
import React from "react";
import "./VideoCard.css";

const VideoCard = ({ video, onEdit, onDelete }) => {
  return (
    <div
      className="video-card"
      style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
    >
      <div className="card-content">
        <h3>{video.name}</h3>
        <p>{video.description}</p>
        <div className="buttons">
          <button onClick={() => onEdit(video)}>Editar</button>
          <button onClick={() => onDelete(video.id)}>Borrar</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
