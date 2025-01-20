import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Category.css";
import Button from "../../components/Button/Button";

const Category = ({ title, videos, onDelete, onEdit }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [videos]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className={`category-section ${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <h2>{title}</h2>
      {videos.length === 0 && <p>No hay videos en esta categoría.</p>}
      <Slider {...settings} ref={sliderRef}>
        {videos.map((video) => (
          <div key={video.id} className="category-card">
            {/* Imagen del video */}
            <img
              src={video.thumbnailUrl}
              alt={video.name}
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />

            {/* Contenido de la tarjeta */}
            <div className="card-content">
              <h3>{video.name}</h3>
              <p>{video.description}</p>
              <div className="buttons">
                {/* Botón para ver el video */}
                <Button
                  variant="primary"
                  onClick={() => window.open(video.videoUrl, "_blank")}
                >
                  Ver Video
                </Button>

                {/* Botones de editar y borrar */}
                <Button onClick={() => onEdit(video)}>Editar</Button>
                <Button onClick={() => onDelete(video.id)} variant="danger">
                  Borrar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Category;
