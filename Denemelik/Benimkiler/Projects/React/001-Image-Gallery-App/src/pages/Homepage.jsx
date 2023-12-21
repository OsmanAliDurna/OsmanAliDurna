import React from 'react'
import Picture from '../components/Picture'
import data from "../helper/data.js"

const Homepage = () => {
  return (
    <div>
        <h1>Image Gallery</h1>
        <div className='morePicture'>
            <ul className='pictures'>
                {data.map((pic) => (<li><Picture {...pic}/></li>))} 
            </ul>       
        </div>    
    </div>
  )
}

export default Homepage