// components/Manager/BarChartComponent.js
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
        text: 'Monthly Revenue Overview',
        padding: {
          top: 10,
          bottom: 30
        },
        color: '#fff', // Title color for dark mode
      },
      legend: {
        position: 'top',
        labels: {
          color: '#fff', // Legend color for dark mode
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
        },
        backgroundColor: '#333', // Tooltip background color for dark mode
        titleColor: '#fff', // Tooltip title color for dark mode
        bodyColor: '#fff', // Tooltip body color for dark mode
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff', // X-axis labels color for dark mode
        },
        grid: {
          color: '#444', // X-axis grid color for dark mode
        },
      },
      y: {
        ticks: {
          color: '#fff', // Y-axis labels color for dark mode
        },
        grid: {
          color: '#444', // Y-axis grid color for dark mode
        },
      },
    },
    elements: {
      bar: {
        borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChartComponent;
