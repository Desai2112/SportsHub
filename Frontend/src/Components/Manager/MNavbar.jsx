import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const MNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex h-16 items-center justify-between bg-[#1E2A38] px-6 text-white shadow-md">
      {/* Logo Section */}
      <Link  className="flex items-center gap-3">
        <img
          src="https://res.cloudinary.com/dgvslio7u/image/upload/v1720845639/tofmmxz1oj8lvexsqaet.png"
          alt="SportsHub"
          className="h-14 w-20 object-cover rounded-lg shadow-lg border-2 border-[#00B2A9] bg-white p-2"
        />
        <span className="font-semibold text-2xl tracking-wide text-[#00B2A9]">
          SportsHub
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center gap-12">
        <Link
          to="/manager"
          className={`text-lg font-medium transition duration-300 ${
            isActive("/manager") ? "text-[#00B2A9] border-b-2 border-[#00B2A9]" : "text-gray-300"
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/manager/complex"
          className={`text-lg font-medium transition duration-300 ${
            isActive("/manager/complex") ? "text-[#00B2A9] border-b-2 border-[#00B2A9]" : "text-gray-300"
          }`}
        >
          My Complexes
        </Link>
        <Link
          to="/manager/bookings"
          className={`text-lg font-medium transition duration-300 ${
            isActive("/manager/bookings") ? "text-[#00B2A9] border-b-2 border-[#00B2A9]" : "text-gray-300"
          }`}
        >
          Bookings
        </Link>
        <Link
          to="/manager/maintanance"
          className={`text-lg font-medium transition duration-300 ${
            isActive("/manager/maintanance") ? "text-[#00B2A9] border-b-2 border-[#00B2A9]" : "text-gray-300"
          }`}
        >
          Maintenance
        </Link>
      </nav>

      {/* User Avatar and Menu Toggle */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="/placeholder-user.jpg"
            alt="Avatar"
            className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </div>
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6 hover:text-[#00B2A9] transition duration-300" />
          ) : (
            <FaBars className="h-6 w-6 hover:text-[#00B2A9] transition duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#1E2A38] text-white flex flex-col items-center gap-6 py-6 shadow-md rounded-b-lg md:hidden">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaTimes />
          </button>
          <Link
            to="/manager"
            className={`text-xl font-medium transition duration-300 ${
              isActive("/manager") ? "text-[#00B2A9]" : "text-gray-300"
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/manager/complex"
            className={`text-xl font-medium transition duration-300 ${
              isActive("/manager/complex") ? "text-[#00B2A9]" : "text-gray-300"
            }`}
          >
            My Complexes
          </Link>
          <Link
            to="/manager/bookings"
            className={`text-xl font-medium transition duration-300 ${
              isActive("/manager/bookings") ? "text-[#00B2A9]" : "text-gray-300"
            }`}
          >
            Bookings
          </Link>
          <Link
            to="/manager/maintanance"
            className={`text-xl font-medium transition duration-300 ${
              isActive("/manager/maintanance") ? "text-[#00B2A9]" : "text-gray-300"
            }`}
          >
            Maintenance
          </Link>
        </nav>
      )}
    </header>
  );
};

export default MNavbar;
