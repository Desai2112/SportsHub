/* eslint-disable react/prop-types */


const BookingTable = ({ bookings, activeTab, handleAccept, handleReject }) => {
  if (bookings.length === 0) {
    return <p className="text-center text-gray-400">No {activeTab} bookings.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {bookings.map((booking) => (
        <div key={booking._id} className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-400">{booking.sport.name} Booking</h3>
          <p>Client: {booking.user.name}</p>
          <p>Complex: {booking.sportComplex.name}</p>
          <p>Date: {new Date(booking.startTime).toLocaleDateString()}</p>
          <p>Time: {new Date(booking.startTime).toLocaleTimeString()} - {new Date(booking.endTime).toLocaleTimeString()}</p>

          {activeTab === "requests" && (
            <div className="flex mt-4 space-x-4">
              <button onClick={() => handleAccept(booking._id)} className="bg-green-600 text-white px-4 py-2 rounded-md">Accept</button>
              <button onClick={() => handleReject(booking._id)} className="bg-red-600 text-white px-4 py-2 rounded-md">Reject</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingTable;
