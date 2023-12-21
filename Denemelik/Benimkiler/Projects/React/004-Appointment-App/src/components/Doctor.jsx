import React, { useState } from 'react';
import AddModal from './AddModal';

const Doctor = ({name, dep, img}) => {

  const [clicked, setClicked] = useState(false);

    const handleSelect = () => {
      setClicked(true)
    }

  return (
    <div className='doctor'>
        {clicked && <AddModal {...name} />}
        <img src={img} alt={name} width="200px" onClick={handleSelect}/>
        <h3>{name}</h3>
        <p>{dep}</p>
    </div>
  )
}

export default Doctor