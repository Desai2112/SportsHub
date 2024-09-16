import { useState } from "react";
import { FaCalendarPlus, FaCheck } from "react-icons/fa";
import MNavbar from "../../Components/Manager/MNavbar";

// Dummy maintenance data
const dummyMaintenance = [
  {
    _id: "1",
    title: "Tennis Court Resurfacing",
    date: "2024-09-25T00:00:00Z",
    startTime: "09:00 AM",
    endTime: "11:00 AM",
    description:
      "Resurfacing the tennis court to ensure a smooth playing surface.",
    status: "Upcoming",
  },
  {
    _id: "2",
    title: "Pool Cleaning",
    date: "2024-09-20T00:00:00Z",
    startTime: "06:00 AM",
    endTime: "08:00 AM",
    description: "Regular pool cleaning and maintenance.",
    status: "Completed",
  },
];

const MaintenancePage = () => {
  const [maintenance, setMaintenance] = useState(dummyMaintenance);
  const [newMaintenance, setNewMaintenance] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMaintenance({ ...newMaintenance, [name]: value });
  };

  const handleAddMaintenance = () => {
    const newEntry = {
      _id: Date.now().toString(),
      ...newMaintenance,
      status: "Upcoming",
    };
    setMaintenance([...maintenance, newEntry]);
    setNewMaintenance({
      title: "",
      date: "",
      startTime: "",
      endTime: "",
      description: "",
    });
  };

  const handleCompleteMaintenance = (id) => {
    setMaintenance(
      maintenance.map((item) =>
        item._id === id ? { ...item, status: "Completed" } : item
      )
    );
  };

  const upcomingMaintenance = maintenance.filter(
    (item) => item.status === "Upcoming"
  );
  const completedMaintenance = maintenance.filter(
    (item) => item.status === "Completed"
  );

  return (
    <>
      <MNavbar />
      <div className="p-6 bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Maintenance Management
        </h1>

        {/* Schedule New Maintenance */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Schedule New Maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="title"
              value={newMaintenance.title}
              onChange={handleInputChange}
              placeholder="Maintenance Title"
              className="p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
            />
            <input
              type="date"
              name="date"
              value={newMaintenance.date}
              onChange={handleInputChange}
              className="p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
            />
            <input
              type="time"
              name="startTime"
              value={newMaintenance.startTime}
              onChange={handleInputChange}
              placeholder="Start Time (e.g., 9:00 AM)"
              className="p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
            />
            <input
              type="time"
              name="endTime"
              value={newMaintenance.endTime}
              onChange={handleInputChange}
              placeholder="End Time (e.g., 11:00 AM)"
              className="p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
            />
            <textarea
              name="description"
              value={newMaintenance.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
            />
          </div>
          <button
            onClick={handleAddMaintenance}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 flex items-center"
          >
            <FaCalendarPlus className="mr-2" /> Schedule Maintenance
          </button>
        </div>

        {/* Upcoming Maintenance Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Upcoming Maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMaintenance.length === 0 && (
              <p className="text-center text-gray-400">
                No upcoming maintenance.
              </p>
            )}
            {upcomingMaintenance.map((item) => (
              <div
                key={item._id}
                className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg flex flex-col"
              >
                <div className="bg-yellow-600 text-white p-4">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="text-sm">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm">
                    Time: {item.startTime} - {item.endTime}
                  </p>
                </div>
                <div className="p-4 flex-grow">
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  <button
                    onClick={() => handleCompleteMaintenance(item._id)}
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    <FaCheck className="mr-2" /> Mark as Completed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Maintenance Section */}
        <h2 className="text-3xl font-semibold mb-6 text-white">
            Upcoming Maintenance
          </h2>
        <div className="overflow-x-auto bg-gray-900 p-4 rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {completedMaintenance.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-400">
                    No completed maintenance.
                  </td>
                </tr>
              )}
              {completedMaintenance.map((item) => (
                <tr key={item._id} className="hover:bg-gray-700">
                  <td className="px-6 py-4 text-white">{item.title}</td>
                  <td className="px-6 py-4 text-white">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-white">
                    {item.startTime} - {item.endTime}
                  </td>
                  <td className="px-6 py-4 text-white">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MaintenancePage;
