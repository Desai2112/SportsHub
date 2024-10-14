import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [complexes, setComplexes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplexes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/complex/all`, {
          withCredentials: true,
        });
        setComplexes(response.data.allComplex);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch complexes.");
        setLoading(false);
      }
    };

    fetchComplexes();
  }, []);

  if (loading) return <div className="text-center text-2xl text-gray-700">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen text-white">
      <header className="flex justify-between items-center p-6 bg-gray-900 bg-opacity-80">
        <h1 className="text-3xl font-bold">Sports Complex Booking</h1>
        <nav>
          <Link to="/about" className="text-lg mx-4 hover:text-gray-400">About</Link>
          <Link to="/contact" className="text-lg mx-4 hover:text-gray-400">Contact</Link>
        </nav>
      </header>

      <main className="px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Explore Sports Complexes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {complexes.map(complex => (
            <div key={complex._id} className="bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src={complex.images[0]} alt={complex.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{complex.name}</h3>
                <p className="mt-2 text-gray-400">{complex.address}, {complex.city}</p>
                <Link to={`/complexes/${complex._id}`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="p-6 bg-gray-900 text-center text-gray-400">
        <p>&copy; 2024 Sports Complex Booking. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
