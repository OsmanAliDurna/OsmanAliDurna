import React from 'react'
import Doctor from './Doctor'

const Doctors = ({doctorData}) => {
  return (
    <>
        <h1>CLARUS HOSPITAL</h1>  
        <h2>Our Doctors</h2>
        <div className='doctors'>
            {doctorData.map((doc) => (<Doctor {...doc}/>))}
        </div>
    </>
  )
}

export default Doctors