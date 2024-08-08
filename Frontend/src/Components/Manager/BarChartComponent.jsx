// components/Manager/BarChartComponent.js
// import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title } from 'chart.js';

// Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title);

const BarChartComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [40, 50, 60, 70, 80, 90, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Revenue Overview', // Title for the Bar Chart
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

  return <Bar data={data} options={options} />;
};

export default BarChartComponent;
