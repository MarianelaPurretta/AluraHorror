// src/pages/UploadVideo.jsx

import React, { useState } from "react";
import { db } from "../../services/firebase";  // Importa la referencia de la base de datos
import { collection, addDoc } from "firebase/firestore";

const UploadVideo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guardar el video en Firestore (API modular)
      await addDoc(collection(db, "videos"), {
        name,
        description,
        videoUrl,
        category,
        thumbnailUrl,
      });
      console.log("Video agregado con éxito");
      
      // Limpiar el formulario
      setName("");
      setDescription("");
      setVideoUrl("");
      setCategory("");
      setThumbnailUrl("");
    } catch (error) {
      console.error("Error al agregar el video:", error);
    }
  };

  return (
    <div>
      <h2>Subir Video</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del video:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>URL del video:</label>
          <input
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Categoría:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="ALURA HORROR">ALURA HORROR</option>
            <option value="PARANORMALURA">PARANORMALURA</option>
            <option value="ALURAFOBIA">ALURAFOBIA</option>
          </select>
        </div>
        
        <div>
          <label>URL de la imagen:</label>
          <input
            type="url"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Subir Video</button>
      </form>
    </div>
  );
};

export default UploadVideo;
