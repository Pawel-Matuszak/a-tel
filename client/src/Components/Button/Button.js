import React from 'react'
import { Link } from "react-router-dom";

const Button = ({type, content, link}) => {
  if(type==="a"){
    return (
      <Link to={link} className="link-btn">{content}</Link>
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