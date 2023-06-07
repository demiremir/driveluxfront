import React from 'react';

const CarsPage = () => {
  return (
    <div className="cars-page">
      <div className="sidebar">
        <div className="filter-sidebar">
          <h2 className="filter-label">Filters</h2>
          <input type="text" className="filter-field" placeholder="Model" />
          <input type="text" className="filter-field" placeholder="Brand" />
          <input type="text" className="filter-field" placeholder="Km" />
          <input type="text" className="filter-field" placeholder="Gear Type" />
          <button className="filter-button">Filter</button>
        </div>
      </div>
      <div className="car-list">
        {/* Car List */}
      </div>
    </div>
  );
};

export default CarsPage;
