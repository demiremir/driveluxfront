import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          DriveLux
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cars" className="nav-link">
              Cars
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reservations" className="nav-link">
              Reservations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
