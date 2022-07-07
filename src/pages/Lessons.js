import React from 'react'
import { Container, Grid} from '@material-ui/core'
import CourseCard from './CourseCard'

const Lessons = ({ courses }) => {

  return (
    <div className='grid-container-2'>
    {/* // <Container maxWidth="lg"> */}
        {/* // <Grid container style={{ gap: 15 }}> */}
            {courses.map(course => (
                // <Grid key={course.module_num} xs={12} md={3} lg={5}>
                    <CourseCard course={course} sha={11}/>
                // </Grid>
            ))}
        {/* </Grid> */}
    {/* // </Container> */}
    </div>
  )
}

export default Lessons