import React from 'react'

const Card = ({
  title,
  desc,
  date,
  image
}) => {

  return ( <div className = 'card'
    style = {
      {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width:'500px'
      }
    } >
    <h2>{title}</h2> 
    <p>{date}</p> 
    <span>{desc}</span>    
    </div>
  )
}

export default Card