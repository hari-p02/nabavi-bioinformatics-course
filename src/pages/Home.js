import React from 'react'
import Welcome from './Welcome.js'
import { Typography, Paper, Box } from '@material-ui/core'
const Home = () => {
  return (
    <div>
    <Welcome />
    <Paper elevation={12} square>
    <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
    </Paper>
    </div>
  )
}

export default Home