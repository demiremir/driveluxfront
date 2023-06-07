import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const CarsPage = () => {
  const [filter, setFilter] = useState('');
  const [addCarOpen, setAddCarOpen] = useState(false);
  const [deleteCarOpen, setDeleteCarOpen] = useState(false);
  const [carId, setCarId] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddCar = () => {
    setAddCarOpen(true);
  };

  const handleDeleteCar = () => {
    setDeleteCarOpen(true);
  };

  const handleAddCarClose = () => {
    setAddCarOpen(false);
  };

  const handleDeleteCarClose = () => {
    setDeleteCarOpen(false);
  };

  const handleCarIdChange = (e) => {
    setCarId(e.target.value);
  };

  const handleDelete = () => {
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
      <Dialog open={addCarOpen} onClose={handleAddCarClose}>
        <DialogTitle>Add Car</DialogTitle>
        <DialogContent>
          {/* Add Car Form */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddCarClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddCarClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={deleteCarOpen} onClose={handleDeleteCarClose}>
        <DialogTitle>Delete Car</DialogTitle>
        <DialogContent>
          <TextField
            label="Car ID"
            variant="outlined"
            fullWidth
            value={carId}
            onChange={handleCarIdChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCarClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default CarsPage;
