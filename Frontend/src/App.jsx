// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/login';
import SignUp from './Pages/Authentication/SignUp';
import LandingPage from './Pages/Landing_Page/LandingPage';
import HomePage from './Pages/User/HomePage';
import MHomePage from './Pages/Manager/MHomePage';
import ShowComplex from './Pages/User/ShowComplex';
// import ProfilePage from '../../Components/User/ProfilePage';
import NotFound from './Components/NotFound';
// import EnquiryPage from './Components/User/EnquiryPage';
import MyComplexesPage from './Pages/Manager/MyComplexesPage';
import ViewComplexPage from './Pages/Manager/ViewComplexPage';
import BookingPage from './Pages/Manager/BookingPage';
import MaintenancePage from './Pages/Manager/MaintanancePage';
import AddComplexPage from './Pages/Manager/AddComplexPage';
import BookNow from './Components/User/BookNow';
import BookingsPage from './Pages/User/BookingsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/user" element={<HomePage />} />
        <Route path="/manager" element={<MHomePage />} />
        <Route path="/user/Complexes" element={<ShowComplex />} />
        <Route path="/user/Complex/:complexId" element={<BookNow />} />
        <Route path="/user/bookings" element={<BookingsPage />} />
        {/* <Route path="/user/profile" element={<ProfilePage />} /> */}
        <Route path="/manager/complex" element={<MyComplexesPage />} />
        <Route path="/manager/complex/add" element={<AddComplexPage />} />
        <Route path="/manager/complex/:complexId" element={<ViewComplexPage />} />
        <Route path="/manager/bookings" element={<BookingPage />} />
        <Route path="/manager/maintanance" element={<MaintenancePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
