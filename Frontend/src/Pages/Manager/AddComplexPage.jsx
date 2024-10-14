import { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { FaArrowLeft } from 'react-icons/fa';
import MNavbar from '../../Components/Manager/MNavbar';
import { useNavigate } from 'react-router-dom';

// AddComplexPage Component
const AddComplexPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [pricePerHour, setPricePerHour] = useState('');
  const [description, setDescription] = useState('');
  const [selectedSports, setSelectedSports] = useState([]);
  const [sportsOptions, setSportsOptions] = useState([]);
  const [images, setImages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const navigate = useNavigate();

  // Fetch sports options from API
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/common/sports`);
        if (response.data.success) {
          const sportsOptions = response.data.sports.map((sport) => ({
            value: sport._id,
            label: sport.name,
          }));
          setSportsOptions(sportsOptions); // Fix: setSportsOptions instead of setAvailableSports
        }
      } catch (error) {
        console.error('Error fetching sports:', error);
      }
    };

    fetchSports(); // Fix: Call fetchSports instead of fetchSportsOptions
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'openingTime':
        setOpeningTime(value);
        break;
      case 'closingTime':
        setClosingTime(value);
        break;
      case 'pricePerHour':
        setPricePerHour(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSportsChange = (selectedOptions) => {
    setSelectedSports(selectedOptions.map(option => option.value));
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#1f2937', // Dark background
      borderColor: '#4b5563', // Light gray border
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#9ca3af', // Lighter gray border on hover
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#3b82f6' : '#1f2937',
      color: state.isSelected ? 'white' : '#d1d5db',
      '&:hover': {
        backgroundColor: '#374151',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#1f2937',
      borderColor: '#4b5563',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#374151',
      color: '#d1d5db',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#d1d5db',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#d1d5db',
      ':hover': {
        backgroundColor: '#ef4444',
        color: 'white',
      },
    }),
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleUploadImages = async () => {
    setUploading(true);
    const uploadedUrls = [];

    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'SportsHub'); // replace with your Cloudinary upload preset

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dgvslio7u/image/upload',
          formData
        );

        uploadedUrls.push(response.data.secure_url);
      }

      setUploadedImages(uploadedUrls);
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name &&
      address &&
      phone &&
      email &&
      city &&
      openingTime &&
      closingTime &&
      pricePerHour &&
      description &&
      selectedSports.length > 0
    ) {
      // Upload images first
      await handleUploadImages();

      // Add complex data
      const complexData = {
        name,
        address,
        phone,
        email,
        city,
        openingTime,
        closingTime,
        pricePerHour,
        description,
        sports: selectedSports,
        images: uploadedImages
      };

      try {
        // TODO: Send complexData to your backend API
        console.log('Complex data:', complexData);
        // Replace the above line with your API call, e.g.,
        // await axios.post('http://localhost:5000/complex', complexData);
        
        // Reset state
        setName('');
        setAddress('');
        setPhone('');
        setEmail('');
        setCity('');
        setOpeningTime('');
        setClosingTime('');
        setPricePerHour('');
        setDescription('');
        setSelectedSports([]);
        setImages([]);
        setUploadedImages([]);

        // Optionally, navigate to another page after successful submission
        navigate('/manager/complex');
      } catch (error) {
        console.error('Error submitting complex data:', error);
      }
    }
  };

  return (
    <div className="dark:bg-gray-800 min-h-screen flex flex-col">
      <MNavbar />
      <div className="flex-1 flex flex-col p-8 max-w-full mx-8">
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <button
              className="text-gray-400 hover:text-gray-300 flex items-center"
              onClick={() => navigate('/manager/complex')}
            >
              <FaArrowLeft size={20} className="mr-2" />
              <span>Back</span>
            </button>
            <h2 className="text-4xl font-bold ml-4">Add New Complex</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleInputChange}
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Opening Time</label>
                <input
                  type="time"
                  name="openingTime"
                  value={openingTime}
                  onChange={handleInputChange}
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Closing Time</label>
                <input
                  type="time"
                  name="closingTime"
                  value={closingTime}
                  onChange={handleInputChange}
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Price Per Hour</label>
                <input
                  type="number"
                  name="pricePerHour"
                  value={pricePerHour}
                  onChange={handleInputChange}
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-400 text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-8">
      <label className="block text-gray-900 text-sm font-medium mb-2">Select Sports</label>
      <Select
        isMulti
        options={sportsOptions}
        onChange={handleSportsChange}
        className="basic-single"
        classNamePrefix="select"
        styles={customStyles} // Apply custom styles here
      />
    </div>
            <div className="mb-8">
              <label className="block text-gray-400 text-sm font-medium mb-2">Upload Images</label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="mb-4"
              />
              {/* <button
                type="button"
                onClick={handleUploadImages}
                disabled={uploading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none hover:bg-blue-700"
              >
                {uploading ? 'Uploading...' : 'Upload Images'}
              </button> */}
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComplexPage;
