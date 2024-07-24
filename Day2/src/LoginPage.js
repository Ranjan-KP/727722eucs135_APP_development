import React from 'react';
import { Container, TextField, Button, Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const handleForgotPasswordRedirect = () => {
    navigate('/forgot-password'); // Adjust the path as needed
  };

  return (
    <Box className="root">
      <Container component="main" maxWidth="xs" className="formContainer">
        <Typography component="h1" variant="h5" align="center">
          Login
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            className="textField"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className="textField"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="button"
          >
            Sign In
          </Button>
          <Box mt={2} display="flex" flexDirection="column" alignItems="center">
            <Link onClick={handleForgotPasswordRedirect} style={{ cursor: 'pointer' }}>
              Forgot password?
            </Link>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link onClick={handleRegisterRedirect} style={{ cursor: 'pointer' }}>
                Register
              </Link>
            </Typography>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
