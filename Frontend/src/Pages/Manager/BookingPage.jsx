/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import MNavbar from "../../Components/Manager/MNavbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookingPage = () => {
  const [approvedBookings, setApprovedBookings] = useState([]);
  const [rejectedBookings, setRejectedBookings] = useState([]);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "upcoming");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/booking/manager/show`,
        {
          withCredentials: true,
        }
      );
      const bookings = response.data.bookingRequests;

      const now = new Date();

      const approved = bookings.filter(
        (booking) => booking.approvalStatus === "Approved" && new Date(booking.startTime) > now
      );
      const rejected = bookings.filter(
        (booking) => booking.approvalStatus === "Rejected"
      );
      const pending = bookings.filter(
        (booking) => booking.approvalStatus === "Pending"
      );

      const completed = bookings.filter(
        (booking) =>
          booking.approvalStatus === "Approved" &&
          new Date(booking.endTime) < now
      );

      setApprovedBookings(approved);
      setRejectedBookings(rejected);
      setPendingBookings(pending);
      setCompletedBookings(completed);

      setLoading(false);
    } catch (err) {
      setError("Failed to fetch bookings");
      setLoading(false);
    }
  };

  useEffect(() => {
    // Store active tab in localStorage so it persists after reload
    localStorage.setItem("activeTab", activeTab);
    fetchBookings();
  }, [activeTab]);

  const handleAccept = async (bookingId) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/booking/manager/accept/${bookingId}`,
        null,
        { withCredentials: true }
      );
      fetchBookings(); // Update the bookings list after accepting
    } catch (err) {
      alert("Failed to accept booking");
    }
  };

  const handleReject = async (bookingId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/booking/manager/reject`,
        { bookingId },
        { withCredentials: true }
      );
      fetchBookings(); // Update the bookings list after rejecting
    } catch (err) {
      alert("Failed to reject booking");
    }
  };

  return (
    <>
      <MNavbar />
      <div className="p-8 bg-gray-900 text-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">
          Manage Bookings
        </h1>

        <div className="flex mb-8 border-b border-gray-700">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`py-2 px-4 text-lg font-semibold ${
              activeTab === "upcoming"
                ? "border-b-2 border-blue-400 text-blue-300"
                : "text-gray-400"
            }`}
          >
            Upcoming Bookings
          </button>
          <button
            onClick={() => setActiveTab("requests")}
            className={`py-2 px-4 text-lg font-semibold ${
              activeTab === "requests"
                ? "border-b-2 border-yellow-400 text-yellow-300"
                : "text-gray-400"
            }`}
          >
            Booking Requests
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`py-2 px-4 text-lg font-semibold ${
              activeTab === "completed"
                ? "border-b-2 border-green-400 text-green-300"
                : "text-gray-400"
            }`}
          >
            Completed Bookings
          </button>
          <button
            onClick={() => setActiveTab("rejected")}
            className={`py-2 px-4 text-lg font-semibold ${
              activeTab === "rejected"
                ? "border-b-2 border-red-400 text-red-300"
                : "text-gray-400"
            }`}
          >
            Rejected Bookings
          </button>
        </div>

        {/* Upcoming Bookings */}
        {activeTab === "upcoming" && (
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">
              Upcoming Approved Bookings
            </h2>
            {loading ? (
              <SkeletonTable />
            ) : approvedBookings.length === 0 ? (
              <p className="text-center text-gray-400">No upcoming approved bookings.</p>
            ) : (
              <BookingTable bookings={approvedBookings} />
            )}
          </div>
        )}

        {/* Booking Requests */}
        {activeTab === "requests" && (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Pending Requests</h2>
            {loading ? (
              <SkeletonTable />
            ) : pendingBookings.length === 0 ? (
              <p className="text-center text-gray-400">No pending requests.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pendingBookings.map((booking) => (
                  <div key={booking._id} className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-600">
                    {/* Heading Section */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-blue-400">{booking.sport.name} Booking</h3>
                      <p className="text-gray-300">Client: <span className="font-medium text-white">{booking.user.name}</span></p>
                      <p className="text-gray-300">Complex: <span className="font-medium text-white">{booking.sportComplex.name}</span></p>
                    </div>

                    {/* Details Section */}
                    <div className="border-t border-gray-500 pt-4">
                      <p className="text-gray-300">Date: <span className="font-medium text-white">{new Date(booking.startTime).toLocaleDateString()}</span></p>
                      <p className="text-gray-300">Time: <span className="font-medium text-white">{new Date(booking.startTime).toLocaleTimeString()} - {new Date(booking.endTime).toLocaleTimeString()}</span></p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex mt-4 space-x-4">
                      <button
                        onClick={() => handleAccept(booking._id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition-colors transform hover:scale-105"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(booking._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition-colors transform hover:scale-105"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Completed Bookings */}
        {activeTab === "completed" && (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Completed Bookings</h2>
            {loading ? (
              <SkeletonTable />
            ) : completedBookings.length === 0 ? (
              <p className="text-center text-gray-400">No completed bookings.</p>
            ) : (
              <BookingTable bookings={completedBookings} />
            )}
          </div>
        )}

        {/* Rejected Bookings */}
        {activeTab === "rejected" && (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-red-400">Rejected Bookings</h2>
            {loading ? (
              <SkeletonTable />
            ) : rejectedBookings.length === 0 ? (
              <p className="text-center text-gray-400">No rejected bookings.</p>
            ) : (
              <BookingTable bookings={rejectedBookings} />
            )}
          </div>
        )}
      </div>
    </>
  );
};


const BookingTable = ({ bookings }) => {
  return (
    <div className="overflow-x-auto bg-gray-900 p-4 rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800 text-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Client
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Complex
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {bookings.map((booking) => (
            <tr
              key={booking._id}
              className="hover:bg-gray-700 transition-colors duration-300"
            >
              <td className="px-6 py-4 text-gray-100">
                {booking.sport.name} Booking
              </td>
              <td className="px-6 py-4 text-gray-100">{booking.user.name}</td>
              <td className="px-6 py-4 text-gray-100">
                {booking.sportComplex.name}
              </td>
              <td className="px-6 py-4 text-gray-100">
                {new Date(booking.startTime).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-gray-100">
                {new Date(booking.startTime).toLocaleTimeString()} -{" "}
                {new Date(booking.endTime).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SkeletonTable = () => {
  return (
    <div className="overflow-x-auto bg-gray-900 p-4 rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800 text-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              <Skeleton width={100} />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              <Skeleton width={100} />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              <Skeleton width={100} />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              <Skeleton width={100} />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              <Skeleton width={100} />
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {Array.from({ length: 5 }).map((_, index) => (
            <tr
              key={index}
              className="hover:bg-gray-700 transition-colors duration-300"
            >
              <td className="px-6 py-4">
                <Skeleton width={200} />
              </td>
              <td className="px-6 py-4">
                <Skeleton width={100} />
              </td>
              <td className="px-6 py-4">
                <Skeleton width={150} />
              </td>
              <td className="px-6 py-4">
                <Skeleton width={100} />
              </td>
              <td className="px-6 py-4">
                <Skeleton width={200} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingPage;
