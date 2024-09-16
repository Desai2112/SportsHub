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
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjusted for dark mode
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
        },
        color: '#ffffff', // Text color for dark mode
      },
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff', // Text color for dark mode
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
        },
        backgroundColor: '#333', // Tooltip background color for dark mode
        titleColor: '#ffffff', // Tooltip title color for dark mode
        bodyColor: '#ffffff', // Tooltip body color for dark mode
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff', // X-axis ticks color for dark mode
        },
        grid: {
          color: '#444', // X-axis grid color for dark mode
        },
      },
      y: {
        ticks: {
          color: '#ffffff', // Y-axis ticks color for dark mode
        },
        grid: {
          color: '#444', // Y-axis grid color for dark mode
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChartComponent;
