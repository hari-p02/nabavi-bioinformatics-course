import React from 'react'
import {Typography,  makeStyles } from '@material-ui/core'
import CourseCard from './CourseCard'
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
  something: {
    color: "#A0E7E5"
  }
});
const Lessons = ({ courses }) => {
  const classes = useStyles();
  return (
    <div>
      <div className='lessonbkimg'>
        <div className='lessonheader'>
          <Typography
          variant="h2"
          className={classes.root}>
            Modules!
          </Typography>
        </div>
      </div>
      <div className='grid-container-2'>
              {courses.map(course => (
                      <CourseCard course={course} sha={11}/>
              ))}
      </div>
    </div>
  )
}

export default Lessons