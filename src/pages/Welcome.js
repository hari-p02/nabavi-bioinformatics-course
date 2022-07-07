import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import WelcomePgContent from './WelcomePgContent';
import WelcomePGUCONN from './WelcomePGUCONN';
// import { ScrollContainer, ScrollPage, Animator, batch, Sticky, Fade, MoveOut, Zoom, StickyIn, FadeIn, ZoomIn } from 'react-scroll-motion';
// import {teal} from '@mui/material/colors';
// import { spacing } from '@mui/system';

// const theme = createTheme({
//     palette: {
//       secondary: {
//         main: teal[50]
//       } 
//     },
//     typography: {
//       "fontFamily": `'Poppins', sans-serif`,
//       allVariants: {
//         color: "common.white"
//       }
  
//      }
// })
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
  something: {
    color: "#A0E7E5"
  }
});

const Welcome = () => {
  const classes = useStyles();
  return (
    <div>
      <div className='bkimg'>
        <div className='welcome-header'>
            <Typography 
              variant="h2"
              className={classes.root} 
              >
              Welcome to Our 
            </Typography>
            <Typography 
              variant="h2" 
              className={classes.root} 
              >
              Bioinformatics Course!
            </Typography>
            <Typography 
              variant="h6" 
              className={classes.root} 
              >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Typography>
        </div>
      </div>
      <WelcomePgContent />
      <div>
        <div className='uconn-img-container'></div>
          <p>
                Ab rerum aliquid in sint omnis ut voluptatem corrupti ea voluptatibus fuga et beatae molestias ea rerum fugiat. Qui internos perspiciatis non tenetur optio ut quas officiis eum autem saepe. Et dolor dolorum et vero nemo et quibusdam rerum eos suscipit molestias. Non dolores omnis ab error voluptatem cupiditate praesentium est delectus consequatur et dolor vero et dolore eligendi aut doloribus tempora.
          </p>
      </div>
    </div>
  )
}

export default Welcome