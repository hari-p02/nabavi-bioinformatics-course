import React, { useEffect, useState} from 'react'
import cells from '../images/cells.jpg.jpg'
import kar from '../images/kar.jpg'
import { CardContent,  Button, CardActionArea, CardMedia, CardActions, Card} from '@material-ui/core'
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
const WelcomePgContent = () => {

    return (
       <div className='blue-back'>
        <div className='grid-container'>
            <p className='grid-1 grid-item'>
                <b>Quam minus ea libero similique?</b>
                <br/>
                <br/>
                {/* <Typography  variant='body1'> */}
                Ab rerum aliquid in sint omnis ut voluptatem corrupti ea voluptatibus fuga et beatae molestias ea rerum fugiat. Qui internos perspiciatis non tenetur optio ut quas officiis eum autem saepe. Et dolor dolorum et vero nemo et quibusdam rerum eos suscipit molestias. Non dolores omnis ab error voluptatem cupiditate praesentium est delectus consequatur et dolor vero et dolore eligendi aut doloribus tempora.
                {/* </Typography> */}
            </p>
            <img alt='' className='grid-2 grid-item home-page-geneome' src={cells} />
            <img alt='' className='grid-3 grid-item home-page-evolution' src={kar} />
            <p className='grid-4 grid-item' >
                <b>Quam minus ea libero similique?</b>
                <br/>
                <br/>
                {/* <Typography variant='body1'> */}
                Ab rerum aliquid in sint omnis ut voluptatem corrupti ea voluptatibus fuga et beatae molestias ea rerum fugiat. Qui internos perspiciatis non tenetur optio ut quas officiis eum autem saepe. Et dolor dolorum et vero nemo et quibusdam rerum eos suscipit molestias. Non dolores omnis ab error voluptatem cupiditate praesentium est delectus consequatur et dolor vero et dolore eligendi aut doloribus tempora.
                {/* </Typography> */}
            </p>
        </div>
       </div>
    )
}

export default WelcomePgContent