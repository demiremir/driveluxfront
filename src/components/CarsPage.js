import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

const CarsPage = () => {
  const [filter, setFilter] = useState('');
  const [carList, setCarList] = useState([]);
  const [openAddCar, setOpenAddCar] = useState(false);
  const [openDeleteCar, setOpenDeleteCar] = useState(false);
  const [addCarData, setAddCarData] = useState({
    brand: '',
    model: '',
    gear: '',
    km: '',
    year: '',
    color: '',
    dailyRentalPrice: '',
    image: '',
    description: '',
    username: '',
  });

  const [deleteCarData, setDeleteCarData] = useState({
    carId: '',
  });

  const fetchCarList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/car/');
      setCarList(response.data);
    } catch (error) {
      console.error('Error fetching car list:', error);
    }
  };

  useEffect(() => {
    fetchCarList();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddCar = async () => {
    try {
      // Send POST request to API with addCarData
      await axios.post('http://localhost:8080/api/v1/car/save', addCarData); // Replace with your API endpoint

      // Clear addCarData
      setAddCarData({
        brand: '',
        model: '',
        gear: '',
        km: '',
        year: '',
        color: '',
        dailyRentalPrice: '',
        image: '',
        description: '',
        username: '',
      });

      // Fetch updated car list from API
      fetchCarList();

      // Close add car dialog
      setOpenAddCar(false);
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  const handleDeleteCar = async () => {
    try {
      // Send DELETE request to API with deleteCarData
      await axios.delete(`http://localhost:8080/api/v1/car/delete/${deleteCarData.carId}`); // Replace with your API endpoint

      // Clear deleteCarData
      setDeleteCarData({
        carId: '',
      });

      // Fetch updated car list from API
      fetchCarList();

      // Close delete car dialog
      setOpenDeleteCar(false);
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleFilter = async () => {
    try {
      // Send GET request to API with filter query params
      const response = await axios.get(`http://localhost:8080/api/v1/car/?filter=${filter}`); // Replace with your API endpoint
      setCarList(response.data);
    } catch (error) {
      console.error('Error filtering car list:', error);
    }
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
            label="Max Rental Price"
            variant="outlined"
            fullWidth
            value={filter}
            onChange={handleFilterChange}
          />
          <TextField
            label="Min Rental Price"
            variant="outlined"
            fullWidth
            value={filter}
            onChange={handleFilterChange}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleFilter}>
            Filter
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper style={{ height: 'calc(100vh - 64px)', marginBottom: '32px' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="h6">Car List</Typography>
            <div>
              <Button variant="contained" color="primary" onClick={() => setOpenAddCar(true)}>
                Add Car
              </Button>
              <Button variant="contained" color="secondary" onClick={() => setOpenDeleteCar(true)}>
                Delete Car
              </Button>
            </div>
          </Box>
          <div>
            {carList.content ? (
              carList.content.map((item) => (
                <div>
                  <Grid item xs={4} key={item.id}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                      <Typography variant="h6">{item.brand}</Typography>
                      <Typography variant="subtitle1">{item.model}</Typography>

                      <Typography variant="body2">Gear: {item.gear}</Typography>
                      <Typography variant="body2">Km: {item.km}</Typography>
                      <Typography variant="body2">Year: {item.year}</Typography>
                      <Typography variant="body2">Color: {item.color}</Typography>
                      <Typography variant="body2">Daily Rental Price: {item.dailyRentalPrice}</Typography>
                      <Typography variant="body2">Description: {item.description}</Typography>
                      <Typography variant="body2">Username: {item.ero}</Typography>
                    </Paper>
                  </Grid>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
          {/* {Array.isArray(carList) ? (
  carList.map((car) => (
    <Grid item xs={4} key={car.id}>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h6">{car.brand}</Typography>
        <Typography variant="subtitle1">{car.model}</Typography>
  
        <Typography variant="body2">Gear: {car.gear}</Typography>
        <Typography variant="body2">Km: {car.km}</Typography>
        <Typography variant="body2">Year: {car.year}</Typography>
        <Typography variant="body2">Color: {car.color}</Typography>
        <Typography variant="body2">Daily Rental Price: {car.dailyRentalPrice}</Typography>
        <Typography variant="body2">Description: {car.description}</Typography>
        <Typography variant="body2">Username: {car.username}</Typography>
      </Paper>
    </Grid>
  ))
) : (
  <Typography variant="body2">Araba listesi yükleniyor...</Typography>
)} */}

        </Paper>
      </Grid>
      {/* Add Car Dialog */}
      <Dialog open={openAddCar} onClose={() => setOpenAddCar(false)}>
        <DialogTitle>Add Car</DialogTitle>
        <DialogContent>
          {/* Add car form */}
          <TextField
            label="Brand"
            variant="outlined"
            fullWidth
            value={addCarData.brand}
            onChange={(e) => setAddCarData({ ...addCarData, brand: e.target.value })}
          />
          <TextField
            label="Model"
            variant="outlined"
            fullWidth
            value={addCarData.model}
            onChange={(e) => setAddCarData({ ...addCarData, model: e.target.value })}
          />
          <TextField
            label="Gear"
            variant="outlined"
            fullWidth
            value={addCarData.gear}
            onChange={(e) => setAddCarData({ ...addCarData, gear: e.target.value })}
          />
          <TextField
            label="Km"
            variant="outlined"
            fullWidth
            value={addCarData.km}
            onChange={(e) => setAddCarData({ ...addCarData, km: e.target.value })}
          />
          <TextField
            label="Year"
            variant="outlined"
            fullWidth
            value={addCarData.year}
            onChange={(e) => setAddCarData({ ...addCarData, year: e.target.value })}
          />
          <TextField
            label="Color"
            variant="outlined"
            fullWidth
            value={addCarData.color}
            onChange={(e) => setAddCarData({ ...addCarData, color: e.target.value })}
          />
          <TextField
            label="Daily Rental Price"
            variant="outlined"
            fullWidth
            value={addCarData.dailyRentalPrice}
            onChange={(e) => setAddCarData({ ...addCarData, dailyRentalPrice: e.target.value })}
          />
          <TextField
            label="Image"
            variant="outlined"
            fullWidth
            value={addCarData.image}
            onChange={(e) => setAddCarData({ ...addCarData, image: e.target.value })}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={addCarData.description}
            onChange={(e) => setAddCarData({ ...addCarData, description: e.target.value })}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={addCarData.username}
            onChange={(e) => setAddCarData({ ...addCarData, username: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddCar(false)}>Cancel</Button>
          <Button onClick={handleAddCar} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {/* Delete Car Dialog */}
      <Dialog open={openDeleteCar} onClose={() => setOpenDeleteCar(false)}>
        <DialogTitle>Delete Car</DialogTitle>
        <DialogContent>
          {/* Delete car form */}
          <TextField
            label="Car ID"
            variant="outlined"
            fullWidth
            value={deleteCarData.carId}
            onChange={(e) => setDeleteCarData({ ...deleteCarData, carId: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteCar(false)}>Cancel</Button>
          <Button onClick={handleDeleteCar} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default CarsPage;
