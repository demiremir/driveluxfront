import React from 'react';

const CarsPage = () => {
  return (
    <div className="page-container">
      <div className="sidebar">
        <div className="sidebar-content">
          <h2>Filters</h2>
          <div className="filter-group">
            <label htmlFor="model">Model:</label>
            <input type="text" id="model" />
          </div>
          <div className="filter-group">
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" />
          </div>
          <div className="filter-group">
            <label htmlFor="km">KM:</label>
            <input type="text" id="km" />
          </div>
          <div className="filter-group">
            <label htmlFor="gear-type">Gear Type:</label>
            <input type="text" id="gear-type" />
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <h2>Car List</h2>
          {/* Araba listesi */}
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
