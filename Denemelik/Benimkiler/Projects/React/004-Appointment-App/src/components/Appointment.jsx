import React, { useState } from 'react'

const Appointment = ({patient, doctor, day, consulted}) => {
    const [clear, setClear] = useState(false);
    const [isConsulted, setIsConsulted] = useState(consulted);

    const handleClear = () => {
        setClear(!clear);
    }

    const handleConsulted = () => {
        setIsConsulted(!isConsulted);
    }

  return (
    clear ? null :(<div className='li' onDoubleClick={handleConsulted}>
        <div className='pat-doc'>
            {isConsulted === true && <button className='space'></button>}
            <h4>{patient}</h4>
            <p>{doctor}</p>
        </div>
        <div className='istOk'>
            <p>Date : {day.getDate().toString().padStart(2,0) + " . " + (Number(day.getMonth()) + 1).toString().padStart(2,0) + " . " + (Number(day.getYear()) + 1900).toString()}</p>
            <p>Time : {day.getHours().toString().padStart(2,0) + " : " + day.getMinutes().toString().padStart(2,0) + " : " + day.getHours().toString().padStart(2,0)}</p>
            {isConsulted === true && <button className="consulted">CONSULTED</button>}
        </div>
        <button type="submit" onClick={handleClear}>❌</button>
    </div>)
  )
}

export default Appointment