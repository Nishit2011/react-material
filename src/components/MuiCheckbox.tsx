import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckbox = () => {
    const [skills, setSkills] = useState<string[]>([])
    const [acceptTnC, setAcceptTnC] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event?.target.value))
        }

    }
    return (

        <Box>
            <Box>
                <FormControlLabel label='I accept terms and condition'
                    control={<Checkbox onChange={handleChange} />} />
            </Box>
            <Checkbox icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                checked={acceptTnC}
                onChange={handleChange}
            />
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label='HTML'
                            control={<Checkbox value='html' size='small' color='secondary'
                                checked={skills.includes('html')} onChange={handleSkillChange} />} />

                        <FormControlLabel
                            label='CSS'
                            value='css'
                            control={<Checkbox value='css'
                                checked={skills.includes('css')} onChange={handleSkillChange} />} />
                        <FormControlLabel
                            label='JavaScript'
                            value='javascript'
                            control={<Checkbox value='javascript'
                                checked={skills.includes('javascript')} onChange={handleSkillChange} />} />
                    </FormGroup>
                    <FormHelperText>Helper Text</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckbox