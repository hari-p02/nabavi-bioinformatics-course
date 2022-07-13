import React from 'react'
import Card from '@material-ui/core/Card'
import { useNavigate } from 'react-router-dom'
// import CardHeader from '@material-ui/core/CardHeader'
import { CardContent,  Button, CardActionArea, CardMedia, CardActions} from '@material-ui/core'
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

export default function CourseCard({ course, sha }) {
//   const path = "../images/introbio.jpg";
    const navigate = useNavigate()
  return (
    // <div key={course.module_num}>
    //   <Card className='courseCard' elevation={sha}>
    //     <CardActionArea disableRipple >
    //         <CardMedia 
    //         style={{ height: "250px", paddingTop: "2%" }}
    //         component="img"
    //         image={course.imgpath}
    //         />
    //         <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //             {course.title}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //             { course.description }
    //         </Typography>
    //         </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //         <Button size="small" color="primary" onClick={() => navigate('/mod1')}>
    //         Goto
    //         </Button>
    //     </CardActions>
    //   </Card>
    // </div>
    <div class="course" key={course.module_num}>
        <div class="course-preview" style={{backgroundColor: course.bkcolor}}>
            <h6>Course</h6>
            <h2>{course.title}</h2>
            <a href=" ">View all chapters <i class="fas fa-chevron-right"></i></a>
        </div>
        <div class="course-info">
            <div class="progress-container">
                <div class="progress" style={{backgroundColor: course.bkcolor}}></div>
                <span class="progress-text">
                    6/9 Challenges
                </span>
            </div>
            <h6>{"Module ".concat(course.module_num)}</h6>
            <h2>{ course.description }</h2>
            <button class="btn" onClick={() => navigate('/mod1')} style={{backgroundColor: course.bkcolor}}>Continue</button>
        </div>
    </div>
  )
}

// <CardHeader
//           title={course.title}
//         //   subheader={note.category}
//         />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary">
//             { course.description }
//           </Typography>
//         </CardContent>