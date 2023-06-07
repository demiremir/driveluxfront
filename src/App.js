import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Signupform from './components/Signupform';
import Header from './components/Header';
import CarsPage from './components/CarsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<Signupform />} />
          <Route path="/cars" element={<CarsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
