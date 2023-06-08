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
  const [filter2, setFilter2] = useState('');
  const [filter3, setFilter3] = useState('');
  const [filter4, setFilter4] = useState('');
  const [carList, setCarList] = useState([]);
  const [openAddCar, setOpenAddCar] = useState(false);
  const [openDeleteCar, setOpenDeleteCar] = useState(false);
  const [addCarData, setAddCarData] = useState({
    carBrand: '',
    model: '',
    gear: '',
    km: 0,
    year: 0,
    color: '',
    dailyRentalPrice: 0,
    description: '',
    ownerId: '',
    image: [],
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

  const handleFilterChange2 = (e) => {
    setFilter2(e.target.value);
  };

  const handleFilterChange3 = (e) => {
    setFilter3(e.target.value);
  };

  const handleFilterChange4 = (e) => {
    setFilter4(e.target.value);
  };

  const handleAddCar = async () => {
    try {
      console.log("düstü")
      // Send POST request to API with addCarData
      await axios.post('http://localhost:8080/api/v1/car/save', addCarData); // Replace with your API endpoint

      // Clear addCarData
      setAddCarData({
        carBrand: '',
        model: '',
        gear: '',
        km: 0,
        year: 0,
        color: '',
        dailyRentalPrice: 0,
        description: '',
        ownerId: '',
        image: [],
      });

      // Fetch updated car list from API
      fetchCarList();

      // Close add car dialog
      setOpenAddCar(false);
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  const handleDeleteCar = async (carid) => {
    try {
      // Send DELETE request to API with deleteCarData
      await axios.delete(`http://localhost:8080/api/v1/car/delete/${carid}`); // Replace with your API endpoint

      // Clear deleteCarData
      // setDeleteCarData({
      //   carId: '',
      // });

      // Fetch updated car list from API
      fetchCarList();

      // Close delete car dialog
      // setOpenDeleteCar(false);
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleFilter = async () => {
    try {
      // Send GET request to API with filter query params
      const response = await axios.get(`http://localhost:8080/api/v1/car/?page=0&size=10&model=${filter}`); // Replace with your API endpoint
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
            label="CarBrand"
            variant="outlined"
            fullWidth
            value={filter2}
            onChange={handleFilterChange2}
          />
          <TextField
            label="Max Rental Price"
            variant="outlined"
            fullWidth
            value={filter3}
            onChange={handleFilterChange3}
          />
          <TextField
            label="Min Rental Price"
            variant="outlined"
            fullWidth
            value={filter4}
            onChange={handleFilterChange4}
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
                      <img src={item.images[0]} alt="Photo (Optional)" />
                      <Typography variant="h6">{item.carBrand}</Typography>
                      <Typography variant="subtitle1">{item.model}</Typography>

                      <Typography variant="body2">Gear: {item.gear}</Typography>
                      <Typography variant="body2">Km: {item.km}</Typography>
                      <Typography variant="body2">Year: {item.year}</Typography>
                      <Typography variant="body2">Color: {item.color}</Typography>
                      <Typography variant="body2">Daily Rental Price: {item.dailyRentalPrice}</Typography>
                      <Typography variant="body2">Description: {item.description}</Typography>


                      <button onClick={() => { handleDeleteCar(item.id) }} style={{ float: 'right', backgroundColor: '#d61111d4' }} class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold  px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Delete Car</button>

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
            label="Carbrand"
            variant="outlined"
            fullWidth
            value={addCarData.carBrand}
            onChange={(e) => setAddCarData({ ...addCarData, carBrand: e.target.value })}
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
          {/* <TextField
            label="Image"
            variant="outlined"
            fullWidth
            value={addCarData.image}
            onChange={(e) => setAddCarData({ ...addCarData, image: e.target.value })}
          /> */}
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={addCarData.description}
            onChange={(e) => setAddCarData({ ...addCarData, description: e.target.value })}
          />
          <TextField
            label="Images"
            variant="outlined"
            fullWidth
            value={addCarData.image}
            onChange={(e) => setAddCarData({ ...addCarData, image: [e.target.value] })} // Resim URL'sini bir diziye yerleştirin
          />
          <TextField
            label="OwnerId"
            variant="outlined"
            fullWidth
            value={addCarData.username}
            onChange={(e) => setAddCarData({ ...addCarData, ownerId: e.target.value })}
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

    </Grid>
  );
};

export default CarsPage;
