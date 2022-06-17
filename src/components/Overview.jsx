import React from 'react';
import classes from './css/overview.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: [
    'Travel',
    'Entertainment',
    'Food',
    'Shopping',
    'Housing',
    'Investments',
  ],
  datasets: [
    {
      label: 'Spent this month',
      data: [12, 4, 33, 123, 55, 33],
      backgroundColor: [
        '#F25E5E',
        '#EFF25E',
        '#61F25E',
        '#5ECFF2',
        '#BA5EF2',
        '#F25EEC',
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'bottom',
      align: 'start',

      labels: {
        font: {
          size: 12,
          family: "'Inter', 'sans-serif'",
          weight: '500',
        },
      },
    },
  },
};

const Overview = () => {
  return (
    <section className={classes.overview}>
      <h2 className={classes.header}>Overview</h2>
      <Doughnut data={data} options={options} />
    </section>
  );
};

export default Overview;
