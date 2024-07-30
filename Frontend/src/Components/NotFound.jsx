// src/components/NotFound.js
// import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is awkward... You are looking for something that doesn’t actually exist.
      </p>
      <div className="mb-8">
        <img
          src="https://res.cloudinary.com/dgvslio7u/image/upload/v1721931780/o9y4fy9w7jcmput0orni.png" // replace with the path to your image
          alt="404"
          className="w-64 h-64"
        />
      </div>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
      >
        Go back friend, go back
      </button>
    </div>
  );
};

export default NotFound;
