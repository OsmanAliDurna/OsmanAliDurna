import React from 'react'
import Doctors from '../components/Doctors'
import AppointmentList from '../components/AppointmentList'
import {doctorData, appointmentData} from "../helpers/data"

const Home = () => {
  return (
    <div>
        <Doctors doctorData={doctorData}/>
        <AppointmentList appointmentData={appointmentData}/>
    </div>
  )
}

export default Home