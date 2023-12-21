import React from 'react'
import Appointment from './Appointment'

const AppointmentList = ({appointmentData}) => {
  return (
    <div>
      <h2>Appointment List</h2>
        <div className='ul'>
          {appointmentData.map((appointment) => (<Appointment {...appointment}/>))}
        </div>
    </div>
  )
}

export default AppointmentList