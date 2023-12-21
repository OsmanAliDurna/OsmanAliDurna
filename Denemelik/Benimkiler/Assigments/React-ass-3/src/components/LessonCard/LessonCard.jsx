import React, { useState } from 'react'
import style from "./lesson.module.css"
import {data} from "../../helper/data"
import Lesson from '../../pages/Lesson'

const LessonCard = () => {

  const [clear, setClear] = useState(true);

  const handleDelete = () => {
    setClear(!clear);
  }

  return (
    clear ? (<div className={style.container}>
        <h3>You have {Object.keys(data).length} lessons today!</h3>
        <div className={style.lessonCard}>
            {data.map((lesson, i) => (<Lesson {...lesson} key={i}/>))}
        </div>
        <div>
          <button onClick={handleDelete}>Clear List</button>
        </div>
    </div>) : (<div className={style.container}>
        <h3>You have 0 lessons today!</h3>
        <div>
          <button onClick={handleDelete}>Restart</button>
        </div>
    </div>)
  )
}

export default LessonCard