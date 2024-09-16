import { useLocation } from 'react-router-dom';

const EnquiryPage = () => {
  const location = useLocation();
  const { complex } = location.state || {};

  if (!complex) {
    return <div className="p-8 text-red-500 text-center">No complex data available.</div>;
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-7xl mx-auto animate-fadeIn">
        {/* Sidebar with Complex Image and Details */}
        <div className="flex-none md:w-1/2 bg-cover bg-center relative" style={{ backgroundImage: `url(${complex.image})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h1 className="text-2xl font-bold text-white">{complex.title}</h1>
            <p className="text-white mt-2"><strong>Type:</strong> {complex.type}</p>
            <p className="text-white"><strong>Rent:</strong> {complex.rent} / Hour</p>
            <p className="text-white mt-4">{complex.description}</p>
            <p className="text-white mt-2"><strong>Location:</strong> {complex.location}</p>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Booking Enquiry</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sports Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter the sport name"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Booking Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Time</label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Time</label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
