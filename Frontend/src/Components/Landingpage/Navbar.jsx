// components/Navbar.js
// import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-6">
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dgvslio7u/image/upload/v1720845639/tofmmxz1oj8lvexsqaet.png"
            alt="Logo"
            className="h-14 w-20"
          />
        </Link>
        <nav className="flex-1 flex items-center justify-center space-x-16 text-lg font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="#about" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link to="#sports" className="hover:text-blue-600 transition-colors">
            Sports
          </Link>
          <Link to="#about" className="hover:text-blue-600 transition-colors">
           About
          </Link>
        </nav>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
