import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

const MuiCard = () => {
    return (
        (
            <Box width='300px'>
                <Card>
                    <CardMedia
                        component='img'
                        height='140'
                        image='https://source.unsplash.com/random'
                        alt='unsplash-img'
                    >

                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            React
                        </Typography>
                        <Typography gutterBottom variant='body2' color='text.secondary'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi tenetur quidem ea voluptatibus dicta, qui ratione deserunt aut dignissimos eaque! Placeat aliquid molestias omnis quibusdam culpa debitis dicta ab!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        )
    )
}

export default MuiCard