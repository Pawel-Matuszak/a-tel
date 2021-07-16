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
      <h2 className="gallery-title">Nasze referencje</h2>
      <div className="gallery-content">
        {images.map((image, id) => (
          <Reference src={image.default} key={id}/>
        ))}
      </div>
    </div>
  )
}

export default Gallery
