import React from 'react';
import { Container, TextField, Button, Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <Box className="root">
      <Container component="main" maxWidth="xs" className="formContainer">
        <Typography component="h1" variant="h5" align="center">
          Register
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            className="textField"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
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
            Register
          </Button>
          <Box mt={2} display="flex" justifyContent="center">
            <Typography variant="body2">
              Already have an account?{' '}
              <Link onClick={handleLoginRedirect} style={{ cursor: 'pointer' }}>
                Login
              </Link>
            </Typography>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default RegisterPage;
