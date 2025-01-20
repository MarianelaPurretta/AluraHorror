// src/components/VideoList/VideoList.jsx
import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import Category from "../Category/Category";
import Modal from "react-modal";
import "./VideoList.css";

Modal.setAppElement("#root");

function VideoList() {
  const [videos, setVideos] = useState([]);

  // Para el modal de edición
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

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

  // Filtrar los videos por categoría
  const aluraHorror = videos.filter((v) => v.category === "ALURA HORROR");
  const paranormalura = videos.filter((v) => v.category === "PARANORMALURA");
  const alurafobia = videos.filter((v) => v.category === "ALURAFOBIA");
  const recomendado = videos.filter((v) => v.category === "RECOMENDADO"); // Nueva categoría

  // Funciones para borrar
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "videos", id));
      setVideos((prev) => prev.filter((video) => video.id !== id));
      console.log("Video eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el video:", error);
    }
  };

  // Funciones para editar
  const openEditModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setCurrentVideo(null);
    setIsModalOpen(false);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!currentVideo) return;

    try {
      const { id, name, description, videoUrl, thumbnailUrl } = currentVideo;
      // Actualizamos el documento en Firestore con los campos
      await updateDoc(doc(db, "videos", id), {
        name,
        description,
        videoUrl,
        thumbnailUrl,
      });

      // Actualiza la lista local
      setVideos((prev) =>
        prev.map((vid) =>
          vid.id === id
            ? { ...vid, name, description, videoUrl, thumbnailUrl }
            : vid
        )
      );
      console.log("Video editado con éxito");
      closeEditModal();
    } catch (error) {
      console.error("Error al editar el video:", error);
    }
  };

  return (
    <div className="video-list-container">
      <h1>Videos por Categoría</h1>

      {/* Carrusel de ALURA HORROR */}
      <Category
        title="ALURA HORROR"
        videos={aluraHorror}
        onDelete={handleDelete}
        onEdit={openEditModal}
      />

      {/* Carrusel de PARANORMALURA */}
      <Category
        title="PARANORMALURA"
        videos={paranormalura}
        onDelete={handleDelete}
        onEdit={openEditModal}
      />

      {/* Carrusel de ALURAFOBIA */}
      <Category
        title="ALURAFOBIA"
        videos={alurafobia}
        onDelete={handleDelete}
        onEdit={openEditModal}
      />

      {/* Carrusel de RECOMENDADO */}
      <Category
        title="RECOMENDADO"
        videos={recomendado} // Videos de la categoría RECOMENDADO
        onDelete={handleDelete}
        onEdit={openEditModal}
      />

      {/* Modal para editar videos */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Editar Video"
        className="edit-modal"
        overlayClassName="edit-overlay"
      >
        <h2>Editar Video</h2>
        {currentVideo && (
          <form onSubmit={handleEditSubmit} className="edit-form">
            {/* Nombre */}
            <label>Nombre:</label>
            <input
              type="text"
              value={currentVideo.name}
              onChange={(e) =>
                setCurrentVideo({ ...currentVideo, name: e.target.value })
              }
              required
            />

            {/* Descripción */}
            <label>Descripción:</label>
            <textarea
              value={currentVideo.description}
              onChange={(e) =>
                setCurrentVideo({
                  ...currentVideo,
                  description: e.target.value,
                })
              }
              required
            />

            {/* URL del Video */}
            <label>URL del Video:</label>
            <input
              type="url"
              value={currentVideo.videoUrl || ""}
              onChange={(e) =>
                setCurrentVideo({
                  ...currentVideo,
                  videoUrl: e.target.value,
                })
              }
            />

            {/* Imagen (thumbnailUrl) */}
            <label>URL de la Imagen:</label>
            <input
              type="url"
              value={currentVideo.thumbnailUrl || ""}
              onChange={(e) =>
                setCurrentVideo({
                  ...currentVideo,
                  thumbnailUrl: e.target.value,
                })
              }
            />

            <div className="modal-buttons">
              <button type="submit">Guardar</button>
              <button type="button" onClick={closeEditModal}>
                Cancelar
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default VideoList;
