import React, { useState } from 'react'

const Cards = ({name, img, statistics}) => {
    const [toggle, setToggle] = useState(true);

    const handleChangeImg = () => {

        setToggle(!toggle);
    }

  return (
    toggle ? (
        <div className="card">
            <img src={img} onClick={handleChangeImg} className="card-img-top" alt="basketball-player"/>
            <div className="card-body">
                <p className="card-text">{name}</p>
            </div>
        </div>
    ) : ( <div className="card backside" onClick={handleChangeImg}>
        <ul>
            {statistics.map((item, i) => (<li style={{listStyleType:"none"}} key={i}> 🏀  {item}</li>))}
        </ul>
    </div>)
    )
};

export default Cards