import { useEffect, useState } from "react";
import axios from "axios";
import ComplexCard from "./ComplexCard";

const ComplexList = () => {
  const [complexes, setComplexes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("");

  // Fetch complexes data using Axios
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/complex/all`, {
        withCredentials: true,
      })
      .then((response) => {
        const fetchedComplexes = response.data.allComplex.map((complex) => ({
          id: complex._id,
          image: complex.images[0], // Use the first image in the array
          type: complex.sports.map((sport) => sport.name).join(", "), // Combine all sport names
          title: complex.name,
          description: complex.description,
          rent: `₹${complex.pricePerHour}`,
          location: `${complex.city}`,
        }));
        setComplexes(fetchedComplexes);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch complexes. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Filter complexes based on search term and selected sport
  const filteredComplexes = complexes.filter((complex) => {
    const matchesSearch =
      complex.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complex.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport =
      selectedSport === "" || complex.type.toLowerCase().includes(selectedSport.toLowerCase());

    return matchesSearch && matchesSport;
  });

  if (loading) {
    return (
      <div className="text-center text-xl text-white py-8">Loading...</div>
    );
  }

  if (error) {
    return <div className="text-center text-xl text-red-500 py-8">{error}</div>;
  }

  return (
    <div className="py-8 px-4 bg-gradient-to-b from-[#1E2A38] to-[#2A3B4E] min-h-screen">
      <div className="text-center text-4xl font-bold text-[#E0E0E0] mb-8">
        All Complexes
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
        <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by name or city..."
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B2A9] bg-[#1E2A38] text-white placeholder-gray-400 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B2A9] bg-[#1E2A38] text-white w-full md:w-1/4 ml-0 md:ml-4"
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value)}
        >
          <option value="">All Sports</option>
          <option value="Cricket">Cricket</option>
          <option value="Soccer">Soccer</option>
          <option value="Tennis">Tennis</option>
          <option value="Badminton">Badminton</option>
          <option value="Table Tennis">Table Tennis</option>
          <option value="Squash">Squash</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredComplexes.map((complex) => (
          <ComplexCard key={complex.id} complex={complex} />
        ))}
      </div>
    </div>
  );
};

export default ComplexList;
