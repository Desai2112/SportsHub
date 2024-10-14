import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const UserNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex h-20 items-center py-6 justify-between bg-gray-900 px-6 text-white shadow-lg z-50">
      {/* Logo Section */}
      <Link className="flex items-center gap-3" to="/">
        <img
          src="https://res.cloudinary.com/dgvslio7u/image/upload/v1720845639/tofmmxz1oj8lvexsqaet.png"
          alt="SportsHub"
          className="h-14 w-20 object-cover rounded-lg shadow-lg border-2 border-[#00B2A9] bg-white p-2 transition transform hover:scale-105"
        />
        <h1 className="text-3xl font-bold text-[#00B2A9] transition transform hover:text-[#00DFC2]">
          SportsHub
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center gap-12 ">
        <Link
          to="/user/complexes"
          className={`text-lg font-medium transition duration-300 ${
            isActive("/user/complexes")
              ? "text-[#00DFC2] border-b-2 border-[#00DFC2]"
              : "text-gray-300 hover:text-[#00DFC2]"
          }`}
        >
          Complexes
        </Link>
        <Link
          to="/user/bookings"
          className={`text-lg font-medium transition duration-300 ${
            isActive("/user/bookings")
              ? "text-[#00DFC2] border-b-2 border-[#00DFC2]"
              : "text-gray-300 hover:text-[#00DFC2]"
          }`}
        >
          Bookings
        </Link>
      </nav>

      {/* Menu Toggle for Mobile */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <FaTimes className="h-6 w-6 hover:text-[#00B2A9] transition duration-300" />
        ) : (
          <FaBars className="h-6 w-6 hover:text-[#00B2A9] transition duration-300" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#1E2A38] text-white flex flex-col items-center gap-6 py-6 shadow-md rounded-b-lg md:hidden transition-all ease-in-out duration-500">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaTimes />
          </button>
          <Link
            to="/user/complexes"
            className={`text-xl font-medium transition duration-300 ${
              isActive("/user/complexes") ? "text-[#00DFC2]" : "text-gray-300 hover:text-[#00DFC2]"
            }`}
            onClick={toggleMenu} // Close menu after clicking
          >
            Complexes
          </Link>
          <Link
            to="/user/bookings"
            className={`text-xl font-medium transition duration-300 ${
              isActive("/user/bookings") ? "text-[#00DFC2]" : "text-gray-300 hover:text-[#00DFC2]"
            }`}
            onClick={toggleMenu} // Close menu after clicking
          >
            Bookings
          </Link>
        </nav>
      )}
    </header>
  );
};

export default UserNavbar;
