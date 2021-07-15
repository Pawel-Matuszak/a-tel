import React from 'react'
import "./button.css"

const Button = ({type, content, link}) => {
  if(type==="a"){
    return (
      <a href={link} className="link-btn">{content}</a>
    )
  }else if(type==="submit"){
    return (
      <button type="submit" className="link-btn">{content}</button>
    )
  }else{
    return (
      <span>No type specified</span>
    )
  }
  
}

export default Button