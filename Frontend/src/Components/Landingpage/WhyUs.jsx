// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faSearch, faTag, faUsers } from '@fortawesome/free-solid-svg-icons';

const WhyUs = () => {
  return (
    <section className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl mb-4">Why Choose SportsHub?</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Discover the features and benefits that make SportsHub your go-to platform for booking sports facilities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FontAwesomeIcon icon={faCalendar} className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Easiest Booking</h3>
            <p className="text-gray-300">
              Our intuitive booking system ensures you can quickly find and reserve the perfect sports facility.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FontAwesomeIcon icon={faSearch} className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Widest Selection</h3>
            <p className="text-gray-300">
              Browse our extensive database of sports facilities and find the best options near you.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FontAwesomeIcon icon={faTag} className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Unbeatable Prices</h3>
            <p className="text-gray-300">
              Compare prices and discover the best deals on sports facility rentals.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FontAwesomeIcon icon={faUsers} className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Expert Advice</h3>
            <p className="text-gray-300">
              Get tailored recommendations from our team of sports enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
