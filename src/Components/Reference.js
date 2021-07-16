import React, {useState} from 'react'

const Reference = ({src}) => {
  const [zoom, setZoom] = useState(false)

  return (
    <div 
      className="reference-img-container"
      onClick={()=>setZoom(!zoom)} 
      >
        <img src={src} alt="Referencja" className="reference-img"></img>
      {zoom && (
        <div className="zoomed-image-container">
          <img src={src} alt="Referencja" className="zoomed-image"></img>
        </div>
      )}
    </div>
  )
}

export default Reference
