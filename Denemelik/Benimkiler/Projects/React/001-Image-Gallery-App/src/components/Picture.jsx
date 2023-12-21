import React from 'react'

const Picture = ({photographer, src}) => {
  return (
    <div className='picture'>
        <div className="imageContainer">
            <img src={src.large} alt={photographer} />
        </div>
        <p className='info'>{photographer}</p>
    </div>
  )
}

export default Picture