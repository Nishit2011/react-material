import React from 'react'
import { Button, Stack } from "@mui/material"

const MuiButton = () => {
    return (
        <div>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </div>
    )
}

export default MuiButton