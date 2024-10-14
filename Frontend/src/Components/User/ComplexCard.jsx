/* eslint-disable react/prop-types */
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const ComplexCard = ({ complex }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative w-80 m-4">
      <img
        src={complex.image}
        alt={`${complex.title} image`}
        className="w-full h-48 object-cover rounded-t-lg transition duration-300 transform hover:scale-105"
      />
      <div className="p-4">
        <div className="mb-3">
          {/* Badge style for sports type */}
          <span className="bg-blue-500 text-white text-sm font-semibold py-1 px-2 rounded-full">
            {complex.type}
          </span>
          <h3 className="text-2xl font-bold">{complex.title}</h3>
        </div>

        <h3 className="text-blue-400 mb-2">{complex.rent} / Hour</h3>
        <div className="border border-gray-600 mb-3"></div>
        <div className="flex justify-between items-center">
          <div className="text-orange-400 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {complex.location}
          </div>
          <Link
            to={`/user/complex/${complex.id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComplexCard;
