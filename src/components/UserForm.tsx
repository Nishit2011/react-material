import React, { useState } from 'react';
import {
    Box,
    Container,
    TextField,
    Button,
    Grid,
    Typography,
    MenuItem
} from '@mui/material';

function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [countries, setCountries] = useState<string[]>([])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setCountries(typeof value === 'string' ? value.split(',') : value)

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '50px',
                marginBottom: '50px',
            }}
        >
            <Container maxWidth='xs'>
                <Typography variant='h5' gutterBottom>
                    User Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Name'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Email'
                                type='email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Password'
                                type='password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Confirm Password'
                                type='password'
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label='Select Country' select value={countries} onChange={handleChange}
                                fullWidth
                                SelectProps={{
                                    multiple: true
                                }}
                                size='small'
                                color='secondary'
                                helperText='Please select your country'
                            >
                                <MenuItem value='IN'>India</MenuItem>
                                <MenuItem value='US'>USA</MenuItem>
                                <MenuItem value='AU'>Australia</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant='contained'
                                color='primary'
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}

export default UserForm;
