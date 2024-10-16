import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";


const MNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for avatar dropdown
  const location = useLocation(); // Get the current 
  const navigate=useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;


  const handleLogout = async () => {
    try {
      // Axios request to logout endpoint
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`,{
        withCredentials: true,
      }) 

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="flex h-16 items-center justify-between bg-[#1E2A38] px-6 text-white shadow-md">
      {/* Logo Section */}
      <Link className="flex items-center gap-3">
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
      <div className="relative flex items-center gap-4">
        {/* Avatar Section */}
        <div className="relative">
          <img
            src="/placeholder-user.jpg"
            alt="Avatar"
            className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 text-black">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
              >
                Profile
              </Link>
              <Link
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={handleLogout} // Close dropdown on click
              >
                Logout
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
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
