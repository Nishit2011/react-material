import React, { useState } from 'react'
import { Box, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, FormHelperText } from '@mui/material'

const MuiRadioButton = () => {
    const [value, setValue] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <Box>
            <FormControl error>
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup name='job-experience-group'
                    aria-labelledby='job-experience-group-label'
                    value={value}
                    onChange={handleChange} >
                    <FormControlLabel control={<Radio size='small' color='secondary' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default MuiRadioButton