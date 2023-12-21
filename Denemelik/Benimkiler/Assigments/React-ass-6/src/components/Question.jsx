import React, { useState } from 'react'
import {arrowdown, arrowup} from "../helper/icons"

const Question = ({id, question, answer}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

  return (
    <div className='fullQuestion'>
        <div className='question'>
            <h2>{id} . {question}</h2>
            <div onClick={handleOpen}>
                {open ? (arrowup) : (arrowdown)}
            </div>
        </div>        
        {open && (<h3>{answer}</h3>)}
    </div>
  )
}

export default Question