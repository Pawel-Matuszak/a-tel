import React from 'react'

const Service = ({src, children}) => {
  return (
    <div className="icon-circle-container">
      <div className="icon-circle">
        <img src={src} alt="icon" className="icon" />
      </div>
      <div className="icon-text">
        <h3>{children}</h3>
      </div>
    </div>
  )
}

export default Service