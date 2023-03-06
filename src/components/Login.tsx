import React, { useState } from 'react';
import {
    Box,
    Container,
    TextField,
    Button,
    Grid,
    Link,
    Typography,
} from '@mui/material';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle login logic here
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
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Username'
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
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
                            <Link href='#'>Forgot password?</Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant='contained'
                                color='primary'
                                type='submit'
                            >
                                Log In
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}

export default LoginPage;
