import { useState } from 'react';
import { Box, Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'ABM' },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'SM' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'ABM' },
    ]);

    const handleRemoveUser = (id: any) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <Box sx={{ padding: 3 }}>

            <Typography variant='h4' gutterBottom>
                Dashboards
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <Button variant='contained' color='primary' onClick={() => navigate('/user-form')}>
                    Create User
                </Button>
                <Button variant='contained' color='secondary' onClick={() => navigate('/login')}>
                    Logout
                </Button>
            </Box>
            <List sx={{ width: '100%', maxWidth: 360 }}>
                {users.map(({ id, name, email, role }) => (
                    <ListItem key={id} secondaryAction={<IconButton onClick={() => handleRemoveUser(id)}><DeleteIcon /></IconButton>}>
                        <ListItemButton onClick={() => navigate(`/user/${id}`)}>

                            <ListItemText primary={name} secondary={email} />
                        </ListItemButton>
                        <ListItemText primary={role} />
                    </ListItem >
                ))}
            </List >
        </Box >
    );
};

export default Dashboard;
