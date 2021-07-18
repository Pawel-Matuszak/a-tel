import React, { useState, useEffect } from 'react'
import Reference from './Reference'
import './Gallery.css'

const Gallery = () => {
  const [images, setImages] = useState([])

  const importAll = (r) => {
    return r.keys().map(r);
  }

  useEffect(() => {
    setImages(importAll(require.context('../ReferenceImgs/', false, /\.(png|jpe?g|svg)$/))) 
  }, [])

  return (
    <div className="gallery-container">
        <div className="references-title">
           <h2 className="section-title">Referencje</h2>
            <div class='rect rect1'></div>
            <div class='rect rect2'></div>
        </div>
      <div className="gallery-content">
        {images.map((image, id) => (
          <Reference src={image.default} key={id}/>
        ))}
      </div>
    </div>
  )
}

export default Gallery
