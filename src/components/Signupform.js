import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {
    const data = { username, password };
    axios.post('http://localhost:8080/api/auth/signup', data)
      .then(response => {
        Swal.fire({
          title: 'Success',
          text: 'Signup successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      })
      .catch(error => {
        if (error.response && error.response.data.message === 'User already exists') {
          Swal.fire({
            title: 'Error',
            text: 'User already exists',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Signup failed!',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
  };

  return (
    <Grid container spacing={2} justify="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={6}>
        <Paper style={{ padding: '2rem' }}>
          <Typography variant="h6" gutterBottom>
            Signup
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
            Signup
          </Button>
          <Button component={Link} to="/" color="primary" fullWidth style={{ marginTop: '1rem' }}>
            Login
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
