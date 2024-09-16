import { useState, useEffect } from 'react';
// import { FaCheck, FaTimes, FaPlus } from 'react-icons/fa';
import MNavbar from '../../Components/Manager/MNavbar';

const dummyBookings = [
  {
    _id: '1',
    title: 'Tennis Court Booking',
    clientName: 'John Doe',
    complexName: 'Sports Arena',
    date: '2024-09-20T00:00:00Z',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    status: 'Pending',
  },
  {
    _id: '2',
    title: 'Basketball Court Booking',
    clientName: 'Jane Smith',
    complexName: 'Sports Arena',
    date: '2024-09-21T00:00:00Z',
    startTime: '2:00 PM',
    endTime: '4:00 PM',
    status: 'Pending',
  },
  {
    _id: '3',
    title: 'Swimming Pool Booking',
    clientName: 'Michael Johnson',
    complexName: 'Sports Arena',
    date: '2024-09-22T00:00:00Z',
    startTime: '6:00 AM',
    endTime: '8:00 AM',
    status: 'Accepted',
  },
];

const BookingPage = () => {
  const [bookings, setBookings] = useState(dummyBookings);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [dateFilter, setDateFilter] = useState('');
  const [complexFilter, setComplexFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false); // Simulate loading state
  }, []);

  // const handleStatusChange = async (bookingId, status) => {
  //   try {
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     setBookings(bookings.map((booking) =>
  //       booking._id === bookingId ? { ...booking, status } : booking
  //     ));
  //   } catch (err) {
  //     setError('Failed to update booking status');
  //   }
  // };

  // const handleAddBooking = () => {
  //   alert('Feature to add a new booking is not implemented yet.');
  // };

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-400">{error}</p>;

  const upcomingBookings = bookings.filter((booking) => new Date(booking.date) > new Date());

  const filteredBookings = upcomingBookings.filter((booking) => {
    return (
      (dateFilter ? new Date(booking.date).toLocaleDateString() === new Date(dateFilter).toLocaleDateString() : true) &&
      (complexFilter ? booking.complexName.toLowerCase().includes(complexFilter.toLowerCase()) : true)
    );
  });

  return (
    <>
      <MNavbar />
      <div className="p-8 bg-gray-900 text-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">Manage Bookings</h1>

        <div className="flex mb-8 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'upcoming' ? 'border-b-2 border-blue-400 text-blue-300' : 'text-gray-400'}`}
          >
            Upcoming Bookings
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'requests' ? 'border-b-2 border-yellow-400 text-yellow-300' : 'text-gray-400'}`}
          >
            Booking Requests
          </button>
        </div>

        {activeTab === 'upcoming' && (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-100">Upcoming Bookings</h2>
            
            {/* Filters */}
            <div className="mb-6">
              <div className="flex space-x-4">
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
                  placeholder="Filter by Date"
                />
                <input
                  type="text"
                  value={complexFilter}
                  onChange={(e) => setComplexFilter(e.target.value)}
                  className="p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
                  placeholder="Filter by Complex Name"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-gray-900 p-4 rounded-lg shadow-lg">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800 text-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Complex</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredBookings.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center p-4 text-gray-400">No upcoming bookings.</td>
                    </tr>
                  )}
                  {filteredBookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-gray-700 transition-colors duration-300">
                      <td className="px-6 py-4 text-gray-100">{booking.title}</td>
                      <td className="px-6 py-4 text-gray-100">{booking.clientName}</td>
                      <td className="px-6 py-4 text-gray-100">{booking.complexName}</td>
                      <td className="px-6 py-4 text-gray-100">{new Date(booking.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-gray-100">{booking.startTime} - {booking.endTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Booking Requests tab code here */}
      </div>
    </>
  );
};

export default BookingPage;
