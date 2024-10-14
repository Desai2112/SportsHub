import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserNavbar from "../../Components/User/UserNavbar";

// Enum for statuses
export const BookingStatus = {
  booked: "Booked",
  completed: "Completed",
  cancelled: "Cancelled",
};

export const ApprovalStatus = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
};

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [filters, setFilters] = useState({
    complexName: "",
    sport: "",
    status: "",
    approvalStatus: "",
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/booking/user/show`,
          { withCredentials: true }
        );
        if (response.data.success) {
          setBookings(response.data.bookings);
          setFilteredBookings(response.data.bookings); // Initialize filtered bookings
        } else {
          throw new Error("Failed to fetch bookings.");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch bookings.");
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    // Filter bookings based on selected filters
    const applyFilters = () => {
      let filtered = bookings;

      if (filters.complexName) {
        filtered = filtered.filter((booking) =>
          booking.sportComplex.name
            .toLowerCase()
            .includes(filters.complexName.toLowerCase())
        );
      }
      if (filters.sport) {
        filtered = filtered.filter((booking) =>
          booking.sport.name.toLowerCase().includes(filters.sport.toLowerCase())
        );
      }
      if (filters.status) {
        filtered = filtered.filter(
          (booking) => booking.status === filters.status
        );
      }
      if (filters.approvalStatus) {
        filtered = filtered.filter(
          (booking) => booking.approvalStatus === filters.approvalStatus
        );
      }

      setFilteredBookings(filtered);
    };

    applyFilters();
  }, [filters, bookings]);

  const handleFilterChange = (e, filterType) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: e.target.value,
    }));
  };

  if (loading) {
    return <div className="text-center text-xl text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  return (
    <>
      <UserNavbar />
      <div className="bg-[#1E2A38] min-h-screen flex flex-col items-center p-4 sm:p-6">
        <ToastContainer />
        <h1 className="text-4xl font-bold text-[#E0E0E0] text-center mb-6">
          My Bookings
        </h1>

        {filteredBookings.length === 0 ? (
          <div className="text-white text-center text-xl">
            No bookings found.
          </div>
        ) : (
          <div className="w-full max-w-6xl">
            <div className="overflow-x-auto bg-gray-900 rounded-lg shadow-lg">
              <table className="min-w-full table-auto rounded-lg overflow-hidden text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#243B53] to-[#1E3A53] text-[#00B2A9] uppercase tracking-wider">
                    <th className="py-4 px-6 text-left text-lg font-semibold">Date</th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">
                      Complex Name
                      <select
                        className="ml-2 bg-gray-800 text-white rounded p-2"
                        value={filters.complexName}
                        onChange={(e) => handleFilterChange(e, "complexName")}
                      >
                        <option value="">All</option>
                        {[...new Set(bookings.map((b) => b.sportComplex.name))].map((complexName) => (
                          <option key={complexName} value={complexName}>
                            {complexName}
                          </option>
                        ))}
                      </select>
                    </th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">
                      Sport
                      <select
                        className="ml-2 bg-gray-800 text-white rounded p-2"
                        value={filters.sport}
                        onChange={(e) => handleFilterChange(e, "sport")}
                      >
                        <option value="">All</option>
                        {[...new Set(bookings.map((b) => b.sport.name))].map((sportName) => (
                          <option key={sportName} value={sportName}>
                            {sportName}
                          </option>
                        ))}
                      </select>
                    </th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">Start Time</th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">End Time</th>
                    <th className="py-4 px-6 text-center text-lg font-semibold">
                      Status
                      <select
                        className="ml-2 bg-gray-800 text-white rounded p-2"
                        value={filters.status}
                        onChange={(e) => handleFilterChange(e, "status")}
                      >
                        <option value="">All</option>
                        {Object.values(BookingStatus).map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </th>
                    <th className="py-4 px-6 text-center text-lg font-semibold">
                      Approval Status
                      <select
                        className="ml-2 bg-gray-800 text-white rounded p-2"
                        value={filters.approvalStatus}
                        onChange={(e) => handleFilterChange(e, "approvalStatus")}
                      >
                        <option value="">All</option>
                        {Object.values(ApprovalStatus).map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking, index) => (
                    <tr
                      key={booking._id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                      } hover:bg-gray-600 transition-colors duration-300`}
                    >
                      <td className="py-4 px-6 text-left text-lg font-medium">
                        {new Date(booking.startTime).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6 text-left text-lg font-medium">
                        {booking.sportComplex.name}
                      </td>
                      <td className="py-4 px-6 text-left text-lg font-medium">{booking.sport.name}</td>
                      <td className="py-4 px-6 text-left text-lg font-medium">
                        {new Date(booking.startTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-4 px-6 text-left text-lg font-medium">
                        {new Date(booking.endTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-4 px-6 text-center text-lg font-medium">
                        {booking.status === "Booked" ? (
                          <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-full">
                            Booked
                          </span>
                        ) : booking.status === "Completed" ? (
                          <span className="bg-blue-500 text-gray-900 px-3 py-1 rounded-full">
                            Completed
                          </span>
                        ) : (
                          <span className="bg-red-500 text-gray-900 px-3 py-1 rounded-full">
                            Cancelled
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-lg font-medium">
                        {booking.approvalStatus === "Approved" ? (
                          <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-full">
                            Approved
                          </span>
                        ) : booking.approvalStatus === "Pending" ? (
                          <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full">
                            Pending
                          </span>
                        ) : (
                          <span className="bg-red-500 text-gray-900 px-3 py-1 rounded-full">
                            Rejected
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookingsPage;
