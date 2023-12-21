import React from 'react'
import style from "../components/LessonCard/lesson.module.css"

const Lesson = ({name, hour, image}) => {
  return (
    <div className={style.lesson}>
        <img src={image} alt="" />
        <div>
          <p>Lesson Name : <span>{name}</span></p>
          <p>Lesson Hour : <span>{hour}</span></p>
        </div>
    </div>
  )
}

export default Lesson