import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    // API isteği gönderme işlemleri
    const data = { username, password };
    axios.post('your_signup_api_url', data)
      .then(response => {
        // Başarılı kayıt işlemiyle ilgili işlemler
      })
      .catch(error => {
        // Hata durumlarıyla ilgili işlemler
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
