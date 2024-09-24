import MNavbar from "../../Components/Manager/MNavbar";
import CardItem from "../../Components/Manager/CardItem";
import LineChartComponent from "../../Components/Manager/LineChartComponent";
import BarChartComponent from "../../Components/Manager/BarChartComponent";
import UpcomingBookings from "../../Components/Manager/UpcomingBookings";
import { GiMoneyStack, GiPerson } from "react-icons/gi";
import { AiOutlineCalendar } from "react-icons/ai";

const MHomePage = () => (
  <div className="flex min-h-screen w-full flex-col bg-gray-900 text-gray-100">
    <MNavbar />
    <div className="flex-1 gap-4 p-4 md:p-6">
      <main className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <CardItem
            title="Total Revenue"
            value="₹45,231.89"
            percentage="+20.1% from last month"
            Icon={GiMoneyStack} // Money icon from react-icons
            className="bg-gray-800 border border-gray-700"
          />
          <CardItem
            title="Total Visitors"
            value="+12,234"
            percentage="+19% from last month"
            Icon={GiPerson} // User icon from react-icons
            className="bg-gray-800 border border-gray-700"
          />
          <CardItem
            title="Bookings Today"
            value="50"
            percentage="+5 from yesterday"
            Icon={AiOutlineCalendar} // Calendar icon from react-icons
            className="bg-gray-800 border border-gray-700"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <div className="border border-gray-700 rounded-lg shadow-md p-4 bg-gray-800">
            <h2 className="text-lg font-semibold mb-4">Line Chart</h2>
            <LineChartComponent />
          </div>
          <div className="border border-gray-700 rounded-lg shadow-md p-4 bg-gray-800">
            <h2 className="text-lg font-semibold mb-4">Bar Chart</h2>
            <BarChartComponent />
          </div>
        </div>
        <UpcomingBookings className="bg-gray-800 border border-gray-700" />
      </main>
    </div>
  </div>
);

export default MHomePage;
