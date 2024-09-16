import { useState, useEffect, useMemo } from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowLeft, FaEdit, FaSave } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MNavbar from "../../Components/Manager/MNavbar";

const ViewComplexPage = () => {
  const { complexId } = useParams();
  const navigate = useNavigate();

  const [complex, setComplex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedSport, setSelectedSport] = useState("");
  const [sports, setSports] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchComplexData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/complex/detail/${complexId}`);
        setComplex(response.data.complexDetails);
        setFormData(response.data.complexDetails); // Initialize form data
        setDescription(response.data.complexDetails.description || ""); // Initialize description
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch complex data.");
        setLoading(false);
      }
    };

    const fetchSportsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/common/sports");
        setSports(response.data.sports);
      } catch (err) {
        setError("Failed to fetch sports data.");
      }
    };

    fetchComplexData();
    fetchSportsData();
  }, [complexId]);

  const nextImage = () => {
    if (complex && complex.images.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === complex.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (complex && complex.images.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? complex.images.length - 1 : prevIndex - 1
      );
    }
  };

  const memoizedSportsList = useMemo(() => {
    if (complex && complex.sports) {
      return complex.sports.map((sport, index) => (
        <li key={index} className="text-lg">{sport.name}</li>
      ));
    }
    return null;
  }, [complex]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const updatedComplex = { ...formData, description };
      setComplex(updatedComplex); // Update local state before server response
      await axios.put(`/api/complexes/${complexId}`, updatedComplex); // Save changes to the server
      setIsEditing(false);
    } catch (err) {
      setError("Failed to save changes.");
    }
  };

  const handleAddSport = () => {
    if (selectedSport) {
      setFormData((prevData) => ({
        ...prevData,
        sports: [...(prevData.sports || []), { name: selectedSport }]
      }));
      setSelectedSport(""); // Clear selection after adding
    }
  };

  if (loading) {
    return <p className="text-center text-gray-300">Loading complex details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-300">{error}</p>;
  }

  if (!complex) {
    return <p className="text-center text-gray-300">No complex found.</p>;
  }

  return (
    <>
      <MNavbar />
      <div className="bg-gray-900 min-h-screen flex flex-col items-center p-6">
        <div className="max-w-6xl w-full bg-gray-800 text-white shadow-lg rounded-2xl overflow-hidden">
          {/* Back Button */}
          <div className="p-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:opacity-80 transition"
            >
              <FaArrowLeft size={20} className="mr-2" />
              Back
            </button>
          </div>

          {/* Image Carousel */}
          {complex.images && complex.images.length > 0 && (
            <div className="relative">
              <img
                src={complex.images[currentImageIndex]}
                alt={complex.name}
                className="w-full h-96 object-cover"
              />
              {complex.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-black to-transparent text-white p-3 rounded-full shadow-lg hover:opacity-80 transition"
                  >
                    <FaChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-black to-transparent text-white p-3 rounded-full shadow-lg hover:opacity-80 transition"
                  >
                    <FaChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          )}

          {/* Details Section */}
          <div className="p-8">
            <h1 className="text-4xl font-extrabold mb-6 text-center">{complex.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location and Contact */}
              <div className="bg-gray-700 p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Location & Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-3" size={20} />
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={formData.address || ''}
                        onChange={handleInputChange}
                        className="bg-gray-600 text-white p-2 rounded w-full"
                      />
                    ) : (
                      <span>{complex.address}, {complex.city}</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-blue-500 mr-3" size={20} />
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleInputChange}
                        className="bg-gray-600 text-white p-2 rounded w-full"
                      />
                    ) : (
                      <span>{complex.phone}</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-green-500 mr-3" size={20} />
                    {isEditing ? (
                      <input
                        type="text"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                        className="bg-gray-600 text-white p-2 rounded w-full"
                      />
                    ) : (
                      <span>{complex.email}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-gray-700 p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">Price Per Hour</h3>
                    {isEditing ? (
                      <input
                        type="number"
                        name="pricePerHour"
                        value={formData.pricePerHour || ''}
                        onChange={handleInputChange}
                        className="bg-gray-600 text-white p-2 rounded w-full"
                      />
                    ) : (
                      <p className="text-lg font-semibold">${complex.pricePerHour}</p>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">Opening Time</h3>
                    {isEditing ? (
                      <input
                        type="text"
                        name="openingTime"
                        value={formData.openingTime || ''}
                        onChange={handleInputChange}
                        className="bg-gray-600 text-white p-2 rounded w-full"
                      />
                    ) : (
                      <p className="text-lg font-semibold">{complex.openingTime}</p>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">Closing Time</h3>
                    {isEditing ? (
                      <input
                        type="text"
                        name="closingTime"
                        value={formData.closingTime || ''}
                        onChange={handleInputChange}
                        className="bg-gray-600 text-white p-2 rounded w-full"
                      />
                    ) : (
                      <p className="text-lg font-semibold">{complex.closingTime}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Description and Sports */}
            <div className="mt-8 bg-gray-700 p-6 rounded-2xl shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              {isEditing ? (
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-600 text-white p-4 rounded w-full h-40"
                />
              ) : (
                <p>{description || "No description provided."}</p>
              )}
            </div>

            <div className="mt-8 bg-gray-700 p-6 rounded-2xl shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Sports Facilities</h2>
              <ul className="list-disc pl-5">{memoizedSportsList}</ul>
              {isEditing && (
                <div className="mt-4 flex items-center">
                  <select
                    value={selectedSport}
                    onChange={(e) => setSelectedSport(e.target.value)}
                    className="bg-gray-600 text-white p-2 rounded mr-4"
                  >
                    <option value="">Select Sport</option>
                    {sports.map((sport, index) => (
                      <option key={index} value={sport.name}>{sport.name}</option>
                    ))}
                  </select>
                  <button
                    onClick={handleAddSport}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Add Sport
                  </button>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-end gap-4">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  <FaSave className="inline mr-2" /> Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700"
                >
                  <FaEdit className="inline mr-2" /> Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewComplexPage;
