// import React from 'react';
import { useLocation } from 'react-router-dom';

const EnquiryPage = () => {
  const location = useLocation();
  const { complex } = location.state || {};

  if (!complex) {
    return <div className="p-8 text-red-500 text-center">No complex data available.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white text-black rounded-lg shadow-lg p-8 w-full max-w-6xl animate-fadeIn">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">{`Enquiry for ${complex.title}`}</h1>
        <div className="flex flex-col lg:flex-row">
          <img
            src={complex.image}
            alt={`${complex.title} image`}
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-4 transform hover:scale-105 transition duration-500 ease-in-out"
          />
          <div className="lg:w-1/2 lg:pl-4">
            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <p className="text-gray-700 mb-2"><strong>Type:</strong> {complex.type}</p>
              <p className="text-gray-700 mb-2"><strong>Rent:</strong> {complex.rent} / Hour</p>
            </div>
            <p className="text-gray-700 mb-2"><strong>Description:</strong> {complex.description}</p>
            <p className="text-gray-700 mb-2"><strong>Location:</strong> {complex.location}</p>
          </div>
        </div>
        <form className="mt-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPage;
