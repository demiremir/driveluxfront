import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Box } from '@material-ui/core';

const CarsPage = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddCar = () => {
    // Add car logic
  };

  const handleDeleteCar = () => {
    // Delete car logic
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper>
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>
          <TextField
            label="Model"
            variant="outlined"
            fullWidth
            value={filter}
            onChange={handleFilterChange}
          />
          <TextField
            label="Brand"
            variant="outlined"
            fullWidth
            value={filter}
            onChange={handleFilterChange}
          />
          <TextField
            label="Km"
            variant="outlined"
            fullWidth
            value={filter}
            onChange={handleFilterChange}
          />
          <TextField
            label="Gear Type"
            variant="outlined"
            fullWidth
            value={filter}
            onChange={handleFilterChange}
          />
          <Button variant="contained" color="primary" fullWidth>
            Filter
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper style={{ height: 'calc(100vh - 64px)', marginBottom: '32px' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="h6">Car List</Typography>
            <div>
              <Button variant="contained" color="primary" onClick={handleAddCar}>
                Add Car
              </Button>
              <Button variant="contained" color="secondary" onClick={handleDeleteCar}>
                Delete Car
              </Button>
            </div>
          </Box>
          {/* Car List */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CarsPage;
