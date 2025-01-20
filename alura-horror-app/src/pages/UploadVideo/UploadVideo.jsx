import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { db } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import "./UploadVideo.css"; // Importa tu CSS

const UploadVideo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "videos"), {
        name,
        description,
        videoUrl,
        category,
        thumbnailUrl,
      });
      navigate("/"); // Regresa al home
    } catch (error) {
      console.error("Error al subir el video:", error);
    }
  };

  return (
    <div className="upload-video-background"> {/* Clase aplicada aquí */}
      <div className="upload-video-container">
        <form onSubmit={handleSubmit} className="upload-form">
          {/* Inputs del formulario */}
          <input
            type="text"
            placeholder="Nombre del video"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="URL del video"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="ALURA HORROR">ALURA HORROR</option>
            <option value="PARANORMALURA">PARANORMALURA</option>
            <option value="ALURAFOBIA">ALURAFOBIA</option>
            <option value="RECOMENDADO">RECOMENDADO</option>
          </select>
          <input
            type="url"
            placeholder="URL de la imagen"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            required
          />

          <div className="form-buttons">
            <Button type="submit">Subir Video</Button>
            <Button type="button" onClick={() => navigate("/")}>
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadVideo;
