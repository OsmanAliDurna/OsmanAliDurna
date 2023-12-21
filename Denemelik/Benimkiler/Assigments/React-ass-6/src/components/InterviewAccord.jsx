import React from 'react'
import data from "../helper/data"
import Question from './Question'

const InterviewAccord = () => {

  return (
    <div className='interview'>
        {data.map((quest, i ) => (<div key={i}> <Question {...quest}/></div>))}
    </div>
  )
}

export default InterviewAccord