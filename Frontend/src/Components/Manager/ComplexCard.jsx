import { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ComplexCard = ({ complex, onEdit }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  if (!complex || !complex.images || complex.images.length === 0) {
    return (
      <div className="border rounded-2xl overflow-hidden shadow-lg bg-white relative p-6 text-center">
        <p className="text-gray-600">No complex details available</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === complex.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? complex.images.length - 1 : prevIndex - 1
    );
  };

  const handleViewDetails = () => {
    navigate(`/manager/complex/${complex._id}`);
  };

  return (
    <div
      className="border rounded-2xl overflow-hidden shadow-lg bg-white relative transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
      onClick={handleViewDetails}
    >
      <div className="relative">
        <div className="h-60 w-full overflow-hidden relative">
          <img
            src={complex.images[currentImageIndex]}
            alt={complex.name}
            className="h-full w-full object-cover rounded-t-2xl transition-opacity duration-500"
          />
          {complex.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-75 transition"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-75 transition"
              >
                <FaChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="p-6 bg-white text-gray-800 rounded-b-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">{complex.name}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(complex._id);
            }}
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaEdit size={20} />
          </button>
        </div>
        <div className="flex items-center mb-4">
          <FaLocationDot className="text-red-500 w-6 h-6 mr-2" />
          <span className="text-lg text-gray-700">{complex.city}</span>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gradient-to-l hover:from-blue-600 hover:to-blue-800 transition-colors duration-300"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ComplexCard.propTypes = {
  complex: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ComplexCard;
