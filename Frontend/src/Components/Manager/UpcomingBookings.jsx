// components/Manager/UpcomingBookings.js
// import React from 'react';

const bookings = [
  { id: 1, name: "Basketball Court", date: "June 15, 2024", time: "6:00 PM" },
  { id: 2, name: "Tennis Court", date: "June 16, 2024", time: "9:00 AM" },
  { id: 3, name: "Swimming Pool", date: "June 17, 2024", time: "11:00 AM" },
  { id: 4, name: "Fitness Center", date: "June 18, 2024", time: "7:00 PM" },
];

const UpcomingBookings = () => (
  <div className="rounded-lg border border-gray-300 bg-white text-gray-800 shadow-sm">
    <div className="flex flex-col space-y-1.5 p-6">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">Upcoming Bookings</h3>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="flex items-center justify-between border border-gray-200 rounded-md p-4">
            <div>
              <div className="font-medium">{booking.name}</div>
              <div className="text-xs text-gray-600">{booking.date} - {booking.time}</div>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 h-9 rounded-md px-3">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default UpcomingBookings;
