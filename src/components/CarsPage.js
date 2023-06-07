import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

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

  const handleAddCarSubmit = () => {
    // Add car logic
    setAddCarOpen(false);
  };

  const handleDeleteCarSubmit = () => {
    // Delete car logic
    setDeleteCarOpen(false);
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

      {/* Add Car Popup */}
      <Dialog open={addCarOpen} onClose={() => setAddCarOpen(false)}>
        <DialogTitle>Add Car</DialogTitle>
        <DialogContent>
          <TextField label="Car Brand" variant="outlined" fullWidth />
          <TextField label="Model" variant="outlined" fullWidth />
          <TextField label="Gear" variant="outlined" fullWidth />
          <TextField label="Km" variant="outlined" fullWidth />
          <TextField label="Year" variant="outlined" fullWidth />
          <TextField label="Color" variant="outlined" fullWidth />
          <TextField label="Daily Rental Price" variant="outlined" fullWidth />
          <TextField label="Image" variant="outlined" fullWidth />
          <TextField label="Description" variant="outlined" fullWidth />
          <TextField label="Username" variant="outlined" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddCarSubmit} color="primary" variant="contained">
            Add
          </Button>
          <Button onClick={() => setAddCarOpen(false)} color="default" variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Car Popup */}
      <Dialog open={deleteCarOpen} onClose={() => setDeleteCarOpen(false)}>
        <DialogTitle>Delete Car</DialogTitle>
        <DialogContent>
          <TextField
            label="Car ID"
            variant="outlined"
            fullWidth
            value={carId}
            onChange={(e) => setCarId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCarSubmit} color="secondary" variant="contained">
            Delete
          </Button>
          <Button onClick={() => setDeleteCarOpen(false)} color="default" variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default CarsPage;
