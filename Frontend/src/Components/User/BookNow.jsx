import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookNow = () => {
  const { complexId } = useParams();
  const navigate = useNavigate();
  const [complexDetails, setComplexDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedSport, setSelectedSport] = useState("");

  useEffect(() => {
    const fetchComplexDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/complex/detail/${complexId}`,
          { withCredentials: true }
        );
        if (response.data.success) {
          setComplexDetails(response.data.complexDetails);
          setSelectedSport(response.data.complexDetails.sports[0]._id);
        } else {
          throw new Error("Failed to fetch complex details.");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch complex details.");
        setLoading(false);
      }
    };

    fetchComplexDetails();
  }, [complexId]);

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      sportComplexId: complexDetails._id,
      sportId: selectedSport,
      startTime,
      endTime,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/booking/add`,
        bookingData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        const booking = response.data.booking;
        toast.success(
          `Booking created successfully! Status: ${booking.status}, Approval: ${booking.approvalStatus}`,
          {
            position: "top-center",
          }
        );
      } else {
        throw new Error("Booking creation failed");
      }
    } catch (error) {
      toast.error("Booking failed. Please try again.", {
        position: "top-center"
      });
    }
  };

  if (loading) {
    return <div className="text-center text-xl text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  if (!complexDetails) {
    return (
      <div className="text-center text-xl text-red-500">Complex not found.</div>
    );
  }

  return (
    <div className="bg-[#1E2A38] min-h-screen flex flex-col items-center p-4 sm:p-6">
      {/* Header Section with Back Button and Complex Name */}
      <ToastContainer />
      <div className="flex items-center justify-between w-full mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 px-4 py-2 rounded-lg flex items-center"
        >
          <span className="mr-2">&laquo;</span> Back
        </button>
        <h1 className="text-4xl font-bold text-[#E0E0E0] text-center flex-grow">
          {complexDetails.name}
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {/* Complex Details Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full h-[590px]">
          <h2 className="text-lg font-bold text-3xl text-white">
            Complex Details
          </h2>
          <div className="relative mb-4">
            <img
              src={
                complexDetails.images[0] || "https://via.placeholder.com/800"
              }
              alt={complexDetails.name}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-300 mb-2">{complexDetails.description}</p>
          <p className="text-gray-300 mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-[#00B2A9]" />{" "}
            {complexDetails.address}, {complexDetails.city}
          </p>
          <p className="text-gray-300 mb-2 flex items-center">
            <FaPhoneAlt className="mr-2 text-[#00B2A9]" />{" "}
            {complexDetails.phone}
          </p>
          <p className="text-gray-300 mb-2 flex items-center">
            <FaEnvelope className="mr-2 text-[#00B2A9]" />{" "}
            {complexDetails.email}
          </p>
          <p className="text-gray-300 mb-2 flex items-center">
            <FaClock className="mr-2 text-[#00B2A9]" />{" "}
            {complexDetails.openingTime} - {complexDetails.closingTime}
          </p>
          <p className="text-lg font-semibold text-blue-400 mb-2 flex items-center">
            <FaDollarSign className="mr-2 text-[#00B2A9]" /> ₹
            {complexDetails.pricePerHour} / Hour
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full h-[590px] flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Book Now</h2>
          <form onSubmit={handleBooking} className="w-full">
            {/* Dropdown for Selecting Sport */}
            <div className="mb-4">
              <label htmlFor="sport" className="block text-gray-300 mb-1">
                Select Sport
              </label>
              <select
                id="sport"
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B2A9] bg-[#2A3B4E] text-white"
              >
                {complexDetails.sports.map((sport) => (
                  <option key={sport._id} value={sport._id}>
                    {sport.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Start Time */}
            <div className="mb-4">
              <label htmlFor="startTime" className="block text-gray-300 mb-1">
                Start Time
              </label>
              <input
                type="datetime-local"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B2A9] bg-[#2A3B4E] text-white"
                required
              />
            </div>

            {/* End Time */}
            <div className="mb-4">
              <label htmlFor="endTime" className="block text-gray-300 mb-1">
                End Time
              </label>
              <input
                type="datetime-local"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B2A9] bg-[#2A3B4E] text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00B2A9] to-[#005A7E] text-white px-4 py-2 rounded-lg transition duration-300 hover:scale-105"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
