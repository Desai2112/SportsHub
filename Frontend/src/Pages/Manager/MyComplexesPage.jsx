import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ComplexCard from "../../Components/Manager/ComplexCard";
import MNavbar from "../../Components/Manager/MNavbar";


const MyComplexesPage = () => {
  const [complexes, setComplexes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Disable scroll when modals are open
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  // Fetch complexes from API with optimization
  const fetchComplexes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:5000/complex/client", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.data.success) {
        setComplexes(response.data.allComplex);
      } else {
        throw new Error("Failed to fetch complexes");
      }
    } catch (error) {
      console.error("Error fetching complexes:", error);
      setError("Error fetching complexes");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch complexes on component mount
  useEffect(() => {
    fetchComplexes();
  }, [fetchComplexes]);

  return (
    <>
      <MNavbar />
      <div className="min-h-screen p-6 bg-gray-900 text-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Complexes</h1>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => navigate("/manager/complex/add")}
          >
            Add New Complex
          </button>
        </div>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {complexes.map((complex) => (
            <ComplexCard
              key={complex._id}
              complex={complex}
              onEdit={() => {}}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyComplexesPage;
