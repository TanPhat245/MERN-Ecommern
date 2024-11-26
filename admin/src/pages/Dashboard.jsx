import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const Dashboard = () => {
  // Data for Bar Chart
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [12000, 19000, 30000, 50000, 20000, 30000],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for Line Chart
  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Orders",
        data: [10, 20, 30, 40],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
    ],
  };

  // Options for charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Statistics",
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-9">
        {/* Total Users */}
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-700">Total Users</h3>
          <p className="text-3xl font-bold text-green-800 mt-2">2292</p>
        </div>
        {/* Total Orders */}
        <div className="bg-purple-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-700">Total Orders</h3>
          <p className="text-3xl font-bold text-purple-800 mt-2">80</p>
        </div>
        {/* Total Products */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-700">
            Total Products
          </h3>
          <p className="text-3xl font-bold text-blue-800 mt-2">86</p>
        </div>
        {/* Total Reviews */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-yellow-700">
            Total Reviews
          </h3>
          <p className="text-3xl font-bold text-yellow-800 mt-2">86</p>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Sub Category</th>
              <th className="px-4 py-2">Brand</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            
        
          </tbody>
        </table>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Monthly Sales</h3>
          <Bar data={barData} options={options} />
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Weekly Orders</h3>
          <Line data={lineData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
