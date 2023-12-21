import React from 'react'
import image from "../../assets/nba-logo.png";
import "./header.scss"

const Header = () => {
  return (
    <div className='header'>
        <img src={image} alt="" />
        <h1>NBA LEGENDS</h1>
        <input type="text" placeholder="    search player..." />
    </div>
  )
}

export default Header;