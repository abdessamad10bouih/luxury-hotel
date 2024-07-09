import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './main pages/HomePage';
import Registerpage from './main pages/RegisterPage';
import LoginPage from './main pages/loginPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/luxury-hotel" element={<HomePage />} />
        <Route path="/register" element={<Registerpage></Registerpage>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
