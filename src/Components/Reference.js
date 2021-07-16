import React, {useState} from 'react'

const Reference = ({src}) => {
  const [zoom, setZoom] = useState(false)

  return (
    <div 
      className="reference-img" 
      onClick={()=>setZoom(!zoom)} 
      style={
        {backgroundImage: `url("${src}")`}
      }>
      {zoom && (
        <div className="zoomed-image-container">
          <img src={src} alt="Referencja" className="zoomed-image"></img>
        </div>
      )}
    </div>
  )
}

export default Reference
