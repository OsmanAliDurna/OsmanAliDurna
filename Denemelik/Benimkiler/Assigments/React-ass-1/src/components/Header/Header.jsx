import React from 'react'
import logo from "../../assets/lessonreminder.gif"
import "./Header.css"

const Header = () => {
  return (
    <div className="headerDiv">
        <img src={logo} alt=""/>
        <h1>Clarusway</h1>
    </div>
  )
}

export default Header