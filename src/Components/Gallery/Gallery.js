import React, { useState, useEffect } from "react";
import Reference from "../References/Reference";
import "./gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  useEffect(() => {
    setImages(
      importAll(
        require.context("../../ReferenceImgs/", false, /\.(png|jpe?g|svg)$/)
      )
    );
  }, []);

  return (
    <div className="gallery-container">
      <div className="references-title">
        <h2 className="section-title">Referencje</h2>
        <div className="rect rect1"></div>
        <div className="rect rect2"></div>
      </div>
      <div className="gallery-content">
        {images.map((image, id) => (
          <Reference src={image.default} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
