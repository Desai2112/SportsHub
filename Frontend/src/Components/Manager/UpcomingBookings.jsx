// components/Manager/UpcomingBookings.js

import { useNavigate } from "react-router-dom";

const bookings = [
  { id: 1, name: "Basketball Court", date: "June 15, 2024", time: "6:00 PM" },
  { id: 2, name: "Tennis Court", date: "June 16, 2024", time: "9:00 AM" },
  { id: 3, name: "Swimming Pool", date: "June 17, 2024", time: "11:00 AM" },
  { id: 4, name: "Fitness Center", date: "June 18, 2024", time: "7:00 PM" },
];

const UpcomingBookings =()=>{
  const navigate=useNavigate();

const handleViewClick =()=>{
  navigate('/manager/bookings');
}
  
  return (
  <div className="rounded-lg border border-gray-700 bg-gray-800 text-gray-100 shadow-sm">
    <div className="flex flex-col space-y-1.5 p-6">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">Upcoming Bookings</h3>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center justify-between border border-gray-600 rounded-md p-4 bg-gray-900"
          >
            <div>
              <div className="font-medium">{booking.name}</div>
              <div className="text-xs text-gray-400">{booking.date} - {booking.time}</div>
            </div>
            <button onClick={handleViewClick} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-100 h-9 rounded-md px-3">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default UpcomingBookings;
