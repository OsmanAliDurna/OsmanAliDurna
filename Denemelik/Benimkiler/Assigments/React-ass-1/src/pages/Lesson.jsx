import React from 'react'
import lessonStyle from '../components/LessonCard/LessonCard.module.css';

const Lesson = ({name, hour, image}) => {
  return (
    <div className={lessonStyle.cardDiv}>
        <div>
            <img src={image} alt="lesson_logo" />
        </div>
        <div className={lessonStyle.pDiv}>
            <p>Lesson Name : <span>{name}</span></p>
            <p>Lesson Hour : <span>{hour}</span></p>
        </div>

    </div>
  )
}

export default Lesson