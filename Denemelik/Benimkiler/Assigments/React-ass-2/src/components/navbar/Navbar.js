import React from 'react'
import image from "../../helper/logo.png"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={image} alt="" />
        <ul>
          <a href="#horoscopes" >HOROSCOPE</a>
          <a href="#daily">DAILY</a>
          <a href="#tarot">TAROT</a>
          <a href="#article">ARTICLE</a>
          <a href="#contact">CONTACT</a>
        </ul>
    </div>
  )
}

export default Navbar