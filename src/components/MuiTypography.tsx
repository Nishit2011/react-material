import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>H1 heading</Typography>
            <Typography variant='h2'>H2 heading</Typography>
            <Typography variant='h3'>H3 heading</Typography>
            <Typography variant='h4' component='h1'>H4 heading</Typography>

            <Typography variant='h5' gutterBottom>H5 heading</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptas eius doloribus veritatis nesciunt, dolorum fuga nam libero est nihil ratione pariatur eligendi dolor consectetur ipsum dolores harum repellendus illum.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptas eius doloribus veritatis nesciunt, dolorum fuga nam libero est nihil ratione pariatur eligendi dolor consectetur ipsum dolores harum repellendus illum.</Typography>
        </div>
    )
}

export default MuiTypography