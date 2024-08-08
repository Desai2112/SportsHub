// components/Manager/LineChartComponent.js
// import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title } from 'chart.js';

// Register the required components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title);

const LineChartComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Overview', // Title for the Line Chart
        padding: {
          top: 10,
          bottom: 30
        }
      },
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChartComponent;
