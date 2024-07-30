import { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [mobile, setMobile] = useState("123-456-7890");
//   const [favoriteSports, setFavoriteSports] = useState([]);
  const [preferredComplexes, setPreferredComplexes] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [profilePic, setProfilePic] = useState("https://randomuser.me/api/portraits/men/32.jpg");
  const [tempPic, setTempPic] = useState(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempPic(reader.result);
        setProfilePic(reader.result); // Update profile picture immediately
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeProfilePic = () => {
    document.getElementById("profile-pic-input").click();
  };

  const handleSave = () => {
    // Add logic to save the changes (e.g., API call)
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="flex items-start bg-white p-6 rounded-lg shadow-md max-w-4xl w-full">
        {/* Profile Picture */}
        <div className="relative w-1/3 flex-shrink-0 flex justify-center">
          <img
            alt="Profile"
            src={profilePic}
            className="h-40 w-40 rounded-full object-cover border-4 border-blue-500"
          />
          <button
            type="button"
            onClick={handleChangeProfilePic}
            className="absolute bottom-0 left-0 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Change Profile Pic
          </button>
          <input
            type="file"
            id="profile-pic-input"
            className="hidden"
            onChange={handleProfilePicChange}
          />
        </div>
        
        {/* User Details */}
        <div className="ml-6 w-2/3">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="preferredComplexes" className="block text-sm font-semibold text-gray-700">Preferred Sports Complexes</label>
              <input
                type="text"
                id="preferredComplexes"
                value={preferredComplexes}
                onChange={(e) => setPreferredComplexes(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street Address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-gray-700">State</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
