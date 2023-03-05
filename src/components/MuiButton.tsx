import React from 'react'
import { Button, Stack, IconButton } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const MuiButton = () => {
    return (
        <div>
            <Stack spacing={2} direction='row' >
                <Stack spacing={2} direction='row'>
                    <Button variant='text' href="https://google.com">Text</Button>
                    <Button variant='contained'>Contained</Button>
                    <Button variant='outlined'>Outlined</Button>
                </Stack>

                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary'>primary</Button>
                    <Button variant='contained' color='secondary'>secondary</Button>
                    <Button variant='contained' color='error'>error</Button>
                    <Button variant='contained' color='warning'>warning</Button>
                    <Button variant='contained' color='info'>info</Button>
                    <Button variant='text' color='success'>success</Button>

                </Stack>

                <Stack display='block' spacing={2} direction='row' >
                    <Button variant='contained' size='small' onClick={() => alert('clicked')}>Small</Button>
                    <Button variant='contained' size='medium'>Medium</Button>
                    <Button variant='contained' size='large'>Large</Button>
                </Stack>

                <Stack spacing={2} direction='row'>
                    <Button variant='contained' startIcon={<ThumbUpIcon />} disableElevation>Like</Button>
                    <Button variant='contained' endIcon={<ThumbUpIcon />} disableRipple>Like</Button>
                    <IconButton aria-label='send' color='success' size='small'></IconButton>
                </Stack>

            </Stack>
        </div>
    )
}

export default MuiButton