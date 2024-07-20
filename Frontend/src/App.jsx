// App.jsx

// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/login';
import SignUp from './Pages/Authentication/SignUp';
import LandingPage from './Pages/Landing_Page/LandingPage';
import HomePage from './Pages/User/HomePage';
import MHomePage from './Pages/Manager/MHomePage';
import ComplexCard from './Components/User/ComplexCard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/user" element={<HomePage />} />
        <Route path="/manager" element={<MHomePage />} />
        <Route path="/card" element={<ComplexCard />} />


      </Routes>
    </Router>
  );
};

export default App;
