import React from 'react';

const VideoCard = ({ title, description, thumbnail, videoUrl }) => {
  return (
    <div className="video-card">
      <img src={thumbnail} alt="Video thumbnail" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">Ver Video</a>
    </div>
  );
};

export default VideoCard;
