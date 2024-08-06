/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const ComplexCard = ({ complex }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = complex.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white text-black rounded-lg shadow-lg shadow-blue-300 relative w-80 m-4 transform transition duration-500 hover:scale-105">
      <img
        src={complex.image}
        alt={`${complex.title} image`}
        className="w-full h-48 object-contain rounded-t-lg mx-auto mt-4 transition duration-500 hover:opacity-80"
      />
      <div className="p-4">
        <div className="mb-3">
          <div className="text-blue-600 my-2">{complex.type}</div>
          <h3 className="text-xl font-bold">{complex.title}</h3>
        </div>

        <div className="mb-3">{description}</div>
        <button
          className="text-blue-500 mb-3 hover:text-blue-600"
          onClick={() => setShowFullDescription((prevState) => !prevState)}
        >
          {showFullDescription ? "Less" : "More"}
        </button>
        <h3 className="text-blue-500 mb-2">{complex.rent} / Hour</h3>

        <div className="border border-gray-200 mb-3"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-3">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {complex.location}
          </div>
          <Link
            to={`/complexes/${complex.id}`}
            state={{ complex }}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComplexCard;
