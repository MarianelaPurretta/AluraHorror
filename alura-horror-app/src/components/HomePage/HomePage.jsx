// src/components/HomePage/HomePage.jsx
import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import Banner from "../Banner/Banner";
import VideoList from "../VideoList/VideoList";

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const snapshot = await getDocs(collection(db, "videos"));
        const videoData = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        setVideos(videoData);
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };
    fetchVideos();
  }, []);

  // Encuentra el video recomendado
  const recommendedVideo = videos.find((v) => v.category === "RECOMENDADO");

  return (
    <div>
      <Banner recommendedVideo={recommendedVideo} />
      <VideoList videos={videos} />
    </div>
  );
};

export default HomePage;
