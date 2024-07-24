import React from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  return (
    <Box className="root">
      <Container component="main" maxWidth="xs" className="formContainer">
        <Typography component="h1" variant="h5" align="center">
          Forgot Password
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="button"
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ForgotPasswordPage;
