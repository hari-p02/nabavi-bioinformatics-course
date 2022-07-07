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
    <div>
      <Card className='courseCard' elevation={sha}>
        <CardActionArea disableRipple >
            <CardMedia 
            style={{ height: "250px", paddingTop: "2%" }}
            component="img"
            image={course.imgpath}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {course.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                { course.description }
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={() => navigate('/mod1')}>
            Goto
            </Button>
        </CardActions>
      </Card>
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