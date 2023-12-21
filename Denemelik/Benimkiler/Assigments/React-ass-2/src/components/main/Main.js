import React from 'react'
import {data} from "../../helper/data"
import Card from './Card'
import "./Main.scss"

const Main = () => {
  return (
    <div className='main'>
        {data.map((horoscope) => (<Card {...horoscope}/>))}
    </div>
  )
}

export default Main