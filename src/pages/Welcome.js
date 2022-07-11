import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import WelcomePgContent from './WelcomePgContent';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CourseCard from './CourseCard'
import WelcomePgCard from './WelcomePgCard';
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
  something: {
    color: "#A0E7E5"
  }
});


const Welcome = ({ courses }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    // arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    // className: 'slides',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
      <Slider {...settings}>
        {courses.map(course => (<WelcomePgCard course={course}/>))}
      </Slider>
      <WelcomePgContent />
      <div>
        <div className='uconn-img-container'></div>
          {/* <p>
                Ab rerum aliquid in sint omnis ut voluptatem corrupti ea voluptatibus fuga et beatae molestias ea rerum fugiat. Qui internos perspiciatis non tenetur optio ut quas officiis eum autem saepe. Et dolor dolorum et vero nemo et quibusdam rerum eos suscipit molestias. Non dolores omnis ab error voluptatem cupiditate praesentium est delectus consequatur et dolor vero et dolore eligendi aut doloribus tempora.
          </p> */}
      </div>
      {/* <div className='below-uconn'>
        <div className='below-uconn-text'>
            <Typography 
              variant="h6" 
              // className={classes.root} 
              >
            Ab rerum aliquid in sint omnis
            ut voluptatem corrupti ea voluptatibus 
            fuga et beatae molestias ea rerum fugiat. 
            Qui internos perspiciatis non tenetur optio ut 
            quas officiis eum autem saepe. Et dolor dolorum 
            et vero nemo et quibusdam rerum eos suscipit 
            molestias. Non dolores omnis ab error voluptatem 
            cupiditate praesentium est delectus consequatur 
            et dolor vero et dolore eligendi aut doloribus tempora.
          </Typography>
        </div>
      </div> */}
    </div>
  )
}

export default Welcome