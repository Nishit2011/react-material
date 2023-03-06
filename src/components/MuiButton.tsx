import React, { useState } from 'react'
import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
    const [formats, setFormats] = useState<string[]>([])
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        console.log({ formats })
        setFormats(updatedFormats)
    }
    return (
        <div>
            <Stack spacing={4}>
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

                <Stack direction='row'>
                    <ButtonGroup
                        variant='contained'
                        orientation='vertical'
                        size='small'
                        color='secondary'
                        aria-label='alignment button group'>
                        <Button onClick={() => alert('clicked')}>Left</Button>
                        <Button >Center</Button>
                        <Button >Right</Button>
                    </ButtonGroup>
                </Stack>

                <Stack direction='row'>
                    <ToggleButtonGroup aria-label='text formatting' onChange={handleFormatChange}>
                        <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
                        <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
                        <ToggleButton value='underlined'><FormatUnderlinedIcon /></ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </div>
    )
}

export default MuiButton