import React from 'react'
import "./button.css"

const Button = ({link, content}) => {
  return (
    <a href={link} className="link-btn">{content}</a>
  )
}

export default Button
