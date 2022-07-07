import React, { useEffect, useState} from 'react'
import geneome from '../images/geneome.jpg'
import gene_var  from '../images/gene_var.jpg'
import { CardContent,  Button, CardActionArea, CardMedia, CardActions, Card} from '@material-ui/core'
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
const WelcomePgContent = () => {

    return (
       <div className='blue-back'>
        <div className='grid-container'>
                <Typography className='grid-1 grid-item' variant='body1'>
                Ab rerum aliquid in sint omnis ut voluptatem corrupti ea voluptatibus fuga et beatae molestias ea rerum fugiat. Qui internos perspiciatis non tenetur optio ut quas officiis eum autem saepe. Et dolor dolorum et vero nemo et quibusdam rerum eos suscipit molestias. Non dolores omnis ab error voluptatem cupiditate praesentium est delectus consequatur et dolor vero et dolore eligendi aut doloribus tempora.
                Ab rerum aliquid in sint omnis ut voluptatem corrupti ea voluptatibus fuga et beatae molestias ea rerum fugiat. Qui internos perspiciatis non tenetur optio ut quas officiis eum autem saepe. Et dolor dolorum et vero nemo et quibusdam rerum eos suscipit molestias. Non dolores omnis ab error voluptatem cupiditate praesentium est delectus consequatur et dolor vero et dolore eligendi aut doloribus tempora.
                </Typography>
                <img alt='' className='grid-2 grid-item home-page-geneome' src={geneome} />
                <img alt='' className='grid-3 grid-item home-page-evolution' src={gene_var} />
                <Typography className='grid-4 grid-item' variant='body1'>
                Ab rerum aliquid in sint omnis ut voluptatem corrupti ea voluptatibus fuga et beatae molestias ea rerum fugiat. Qui internos perspiciatis non tenetur optio ut quas officiis eum autem saepe. Et dolor dolorum et vero nemo et quibusdam rerum eos suscipit molestias. Non dolores omnis ab error voluptatem cupiditate praesentium est delectus consequatur et dolor vero et dolore eligendi aut doloribus tempora.
                Ab rerum aliquid in sint omnis ut voluptatem corrupti ea voluptatibus fuga et beatae molestias ea rerum fugiat. Qui internos perspiciatis non tenetur optio ut quas officiis eum autem saepe. Et dolor dolorum et vero nemo et quibusdam rerum eos suscipit molestias. Non dolores omnis ab error voluptatem cupiditate praesentium est delectus consequatur et dolor vero et dolore eligendi aut doloribus tempora.
                </Typography>
        </div>
       </div>
    )
}

export default WelcomePgContent