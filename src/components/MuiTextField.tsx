import { Stack, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'

const MuiTextField = () => {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' ></TextField>
                <TextField label='Name' variant='filled'></TextField>
                <TextField label='Name' variant='standard' ></TextField>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small seconddary' size='small' color='secondary' variant='outlined' ></TextField>

            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' required value={value} onChange={e => setValue(e.target.value)}
                    error={!value} helperText={!value ? 'Required' : 'Do not share your password with anyone'}></TextField>
                <TextField label='Form Input' helperText='Do not share your password with anyone' ></TextField>
                <TextField
                    label='Password'
                    type='password'
                    disabled ></TextField>
                <TextField
                    label='Read only'
                    type='password'
                    InputProps={{ readOnly: true }} ></TextField>
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment>, }}></TextField>
                <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment>, }}></TextField>
            </Stack>


        </Stack>
    )
}

export default MuiTextField