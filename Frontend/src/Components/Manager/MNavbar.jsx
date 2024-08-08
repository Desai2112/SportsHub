// import React from 'react';
import { Link } from "react-router-dom";

const MNavbar = () => (
  <header className="flex h-16 items-center justify-between border-b bg-green-200 px-6 text-white">
    <div className="flex items-center gap-4">
      <Link to="#" className="flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/dgvslio7u/image/upload/v1720845639/tofmmxz1oj8lvexsqaet.png"
          alt="SportsHub"
          className="h-12 w-16 object-cover"
        />
        <span className="font-bold">SportsHub</span>
      </Link>
      <nav className="hidden gap-4 md:flex">
        <Link to="/manager" className="font-medium hover:text-yellow-300">
          Dashboard
        </Link>
        <Link to="/manager/complexes" className="font-medium hover:text-yellow-300">
          My Complexes
        </Link>
        <Link to="/manager/bookings" className="font-medium hover:text-yellow-300">
          Bookings
        </Link>
        <Link to="/manager/maintanance" className="font-medium hover:text-yellow-300">
          Maintanance
        </Link>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <img
          src="/placeholder-user.jpg"
          alt="Avatar"
          className="h-10 w-10 rounded-full border border-gray-300 object-cover"
        />
        {/* Optional: Add a fallback or default avatar */}
        {/* <span className="absolute inset-0 flex items-center justify-center text-gray-400">CN</span> */}
      </div>
    </div>
  </header>
);

export default MNavbar;
