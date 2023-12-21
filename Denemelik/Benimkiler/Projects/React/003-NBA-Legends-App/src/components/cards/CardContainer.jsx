import React from 'react'
import Cards from './Cards'
import {data} from "../../assets/data.js"
import "./cards.scss"

const CardContainer = () => {
  return (
    <div className='cardContainer'>
        {data.map((data, index) => (<Cards key={index} {...data}/>))}
    </div>
  )
}

export default CardContainer