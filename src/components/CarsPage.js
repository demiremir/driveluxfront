import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const CarsPage = () => {
  const [filter, setFilter] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    gear: '',
    km: '',
    year: '',
    color: '',
    rentalPrice: '',
    image: '',
    description: '',
    username: '',
  });

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCarDataChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCar = () => {
    // Add car logic using carData state
    console.log(carData);
    handleCloseModal();
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
              <Button variant="contained" color="primary" onClick={handleOpenModal}>
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

      {/* Add Car Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} aria-labelledby="add-car-dialog-title">
        <DialogTitle id="add-car-dialog-title">Add Car</DialogTitle>
        <DialogContent>
          <TextField
            label="Car Brand"
            variant="outlined"
            fullWidth
            name="brand"
            value={carData.brand}
            onChange={handleCarDataChange}
          />
          <TextField
            label="Car Model"
            variant="outlined"
            fullWidth
            name="model"
            value={carData.model}
            onChange={handleCarDataChange}
          />
          <TextField
            label="Gear Type"
            variant="outlined"
            fullWidth
            name="gear"
            value={carData.gear}
            onChange={handleCarDataChange}
          />
          <TextField
            label="Km"
            variant="outlined"
            fullWidth
            name="km"
            value={carData.km}
            onChange={handleCarDataChange}
          />
          <TextField
            label="Year"
            variant="outlined"
            fullWidth
            name="year"
            value={carData.year}
            onChange={handleCarDataChange}
          />
          <TextField
            label="Color"
            variant="outlined"
            fullWidth
            name="color"
            value={carData.color}
            onChange={handleCarDataChange}
          />
          <TextField
            label="Rental Price"
            variant="outlined"
            fullWidth
            name="rentalPrice"
            value={carData.rentalPrice}
            onChange={handleCarDataChange}
          />
          <TextField
            label="Image (Base64)"
            variant="outlined"
            fullWidth
            name="image"
            value={carData.image}
            onChange={handleCarDataChange}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
            value={carData.description}
            onChange={handleCarDataChange}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            name="username"
            value={carData.username}
            onChange={handleCarDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddCar} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default CarsPage;
