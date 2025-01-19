// src/components/VideoList/VideoList.jsx

import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const snapshot = await getDocs(collection(db, "videos"));
        const videoData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setVideos(videoData);
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };
    fetchVideos();
  }, []);

  // =============== FUNCIÓN PARA BORRAR ===============
  const handleDelete = async (id) => {
    try {
      // Eliminamos el documento de Firestore
      await deleteDoc(doc(db, "videos", id));
      // Quitamos el video de la lista local
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
      console.log("Video eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el video:", error);
    }
  };

  // =============== FUNCIÓN PARA EDITAR ===============
  const handleEdit = async (video) => {
    try {
      // Pedimos un nuevo nombre y descripción solo como ejemplo simple
      const nuevoNombre = prompt("Nuevo nombre del video:", video.name);
      if (nuevoNombre === null) return; // Si cancelan el prompt, salimos

      const nuevaDescripcion = prompt("Nueva descripción:", video.description);
      if (nuevaDescripcion === null) return;

      // Actualizamos el documento en Firestore
      await updateDoc(doc(db, "videos", video.id), {
        name: nuevoNombre,
        description: nuevaDescripcion
      });

      // Actualizamos la lista local sin recargar toda la página
      setVideos((prevVideos) =>
        prevVideos.map((v) => {
          if (v.id === video.id) {
            return {
              ...v,
              name: nuevoNombre,
              description: nuevaDescripcion
            };
          }
          return v;
        })
      );
      console.log("Video editado con éxito");
    } catch (error) {
      console.error("Error al editar el video:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Videos</h2>
      {videos.length === 0 && <p>No hay videos todavía.</p>}
      {videos.map((video) => (
        <div key={video.id} style={styles.card}>
          <h3>{video.name}</h3>
          <p>{video.description}</p>
          <img src={video.thumbnailUrl} alt={video.name} style={styles.image} />
          <br />
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            Ver Video
          </a>
          <br /><br />
          {/* Botones de Editar y Borrar */}
          <button onClick={() => handleEdit(video)}>Editar</button>
          <button onClick={() => handleDelete(video.id)}>Borrar</button>
        </div>
      ))}
    </div>
  );
};

// Estilos rápidos en línea (opcional)
const styles = {
  card: {
    border: "1px solid #ddd",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "4px"
  },
  image: {
    maxWidth: "300px",
    display: "block",
    marginTop: "10px"
  }
};

export default VideoList;
