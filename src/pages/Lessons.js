import React from 'react'
import { Container, Grid} from '@material-ui/core'
import CourseCard from './CourseCard'

const Lessons = ({ courses }) => {

  return (
    <div>
      <div className='lessonbkimg'></div>
      <div className='grid-container-2'>
              {courses.map(course => (
                      <CourseCard course={course} sha={11}/>
              ))}
      </div>
    </div>
  )
}

export default Lessons