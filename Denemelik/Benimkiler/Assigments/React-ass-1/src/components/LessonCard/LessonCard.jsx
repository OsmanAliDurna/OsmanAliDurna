import React from 'react'
import Lesson from '../../pages/Lesson'
import {data} from "../../helper/data"
import lessonStyle from "./LessonCard.module.css"

const LessonCard = () => {
  return (
    <div className={lessonStyle.allCardDiv}>
        {data.map((lesson) => (<Lesson {...lesson}/>))}        
    </div>
  )
}

export default LessonCard