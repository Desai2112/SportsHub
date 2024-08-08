import { Chart as ChartJS, LineElement, PointElement, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Register the components you need
ChartJS.register(
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale
);
