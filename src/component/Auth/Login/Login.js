import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Box, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import authContext from '../../../HRMSContext/AuthContext';

const LoginPage = () => {
    const { setAuthenticated } = useContext(authContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Replace this with your actual authentication logic
        if (username === 'admin' && password === 'password') {
            setAuthenticated(true);
            navigate('/');
        } else {
            setError('Incorrect username or password');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
        setError('');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={error}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{
                    '& .MuiSnackbarContent-root': {
                        backgroundColor: '#f44336', // Red background
                        color: '#fff',
                        fontWeight: 'bold',
                    },
                }}
            />
        </Box>
    );
};

export default LoginPage;
