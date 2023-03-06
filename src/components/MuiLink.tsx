import React from 'react'
import { Link, Stack, Typography } from "@mui/material"

const MuiLink = () => {
    return (
        <Stack spacing={2} direction='row' m={4}>
            <Link href="#" >Link</Link>

            <Link href="#" color='secondary' underline='hover'>Secondary</Link>

            <Typography variant='h6'>
                <Link href="#" color='secondary' underline='hover'>With Typography</Link>
            </Typography>

            <Link href="#" variant='body2'>With variant attribute</Link>
        </Stack>
    )
}

export default MuiLink