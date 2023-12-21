import React from 'react'
import image from "../../helper/lesson-reminder.gif"
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <img src={image} alt="" />
        <h1>Clarusway</h1>
    </div>
  )
}

export default Header