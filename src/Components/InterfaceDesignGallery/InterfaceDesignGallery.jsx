import React, { useState } from "react";
import styles from "./InterfaceDesignGallery.module.css";

const InterfaceDesignGallery = ({ images }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredImage(id);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const getImageStyle = (id) => {
    if (hoveredImage === id) {
      if (id === "Hop" || id === "Jones") {
        return { left: "100px", transform: "scale(1.1) rotate(0deg)" };
      } else {
        return { left: "575px", transform: "scale(1.1) rotate(0deg)" };
      }
    }
    return {};
  };

  return (
    <div className={styles.interfaceDesignMediaWrapper}>
      {images.map((image) => (
        <React.Fragment key={image.id}>
          <img
            className={`${styles.interfaceDesignPhoto} ${styles[image.id]} ${
              hoveredImage && hoveredImage !== image.id ? styles.hidden : ""
            }`}
            src={image.src}
            alt={image.alt}
            style={getImageStyle(image.id)}
            onMouseEnter={() => handleMouseEnter(image.id)}
            onMouseLeave={handleMouseLeave}
          />
          <div
            className={`${styles.interfaceDesignInfo} ${
              styles[`${image.id}Info`]
            } ${hoveredImage === image.id ? styles.visible : ""}`}
          >
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default InterfaceDesignGallery;
