import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const data = { username, password };
    axios.post('http://localhost:8080/api/auth/login', data)
      .then(response => {
        Swal.fire({
          title: 'Success',
          text: 'Login successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/cars'); // /cars sayfasına yönlendirme
        });
      })
      .catch(error => {
        if (error.response && error.response.data.message === 'Invalid username or password') {
          Swal.fire({
            title: 'Error',
            text: 'Invalid username or password',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Login failed!',
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
            Login
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
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Login
          </Button>
          <Button component={Link} to="/signup" color="primary" fullWidth style={{ marginTop: '1rem' }}>
            Signup
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
