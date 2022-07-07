import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import WelcomePgContent from './WelcomePgContent';
import WelcomePGUCONN from './WelcomePGUCONN';
import { ScrollContainer, ScrollPage, Animator, batch, Sticky, Fade, MoveOut, Zoom, StickyIn, FadeIn, ZoomIn } from 'react-scroll-motion';
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
const ZoomInScrollOut = batch(FadeIn(), ZoomIn());

const Welcome = () => {
  const classes = useStyles();
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={Fade()}>
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
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <WelcomePgContent />
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeIn()}>
          <WelcomePGUCONN />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  )
}

export default Welcome