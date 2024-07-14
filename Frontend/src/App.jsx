// App.jsx

// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landing Page/LandingPage';
import Login from './Pages/Authentication/login';
import SignUp from './Pages/Authentication/SignUp';
import PlayerSignUp from './Components/SignUp/Player';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/player" element={<PlayerSignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
