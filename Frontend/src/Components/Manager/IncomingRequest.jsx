// import React from 'react';

const IncomingRequest = () => {
  const requests = [
    {
      name: 'John Doe',
      userType: 'Member',
      message: 'John wants to book a slot for',
      sport: 'Tennis',
      slotDate: '2024-07-28',
      slotTime: '10:00 AM - 11:00 AM',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Smith',
      userType: 'New User',
      message: 'Emily wants to book a slot for',
      sport: 'Badminton',
      slotDate: '2024-07-29',
      slotTime: '02:00 PM - 03:00 PM',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Michael Brown',
      userType: 'Member',
      message: 'Michael wants to book a slot for',
      sport: 'Basketball',
      slotDate: '2024-07-30',
      slotTime: '04:00 PM - 05:00 PM',
      avatar: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests.map((request, index) => (
          <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-400 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 flex flex-col justify-between leading-normal">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300" src={request.avatar} alt="Avatar" />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none font-bold">{request.name}</p>
                  <p className="text-gray-600">{request.userType}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 text-base">
                  {request.message} <span className="font-bold">{request.sport}</span>
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Date: <span className="font-semibold">{request.slotDate}</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Time: <span className="font-semibold">{request.slotTime}</span>
                </p>
              </div>
              <div className="flex justify-between">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                  Approve
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                  Decline
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomingRequest;
