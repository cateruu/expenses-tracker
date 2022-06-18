import React from 'react';
import classes from './css/overview.module.css';
import { nanoid } from 'nanoid';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const labels = [
  {
    category: 'Travel',
    color: '#F25E5E',
  },
  {
    category: 'Entertainment',
    color: '#EFF25E',
  },
  {
    category: 'Food',
    color: '#61F25E',
  },
  {
    category: 'Shopping',
    color: '#5ECFF2',
  },
  {
    category: 'Housing',
    color: '#BA5EF2',
  },
  {
    category: 'Investments',
    color: '#F25EEC',
  },
];

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: labels.map((label) => label.category),
  datasets: [
    {
      label: 'Spent this month',
      data: [12, 4, 33, 123, 55, 33],
      backgroundColor: labels.map((label) => label.color),
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,

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
  const labelElements = labels.map((label) => {
    const style = {
      backgroundColor: label.color,
    };

    return (
      <div key={nanoid()} className={classes.legendItem}>
        <div className={classes.color} style={style}></div>
        <p>{label.category}:</p>
        <p className={classes.amount}>$123</p>
      </div>
    );
  });
  return (
    <section className={classes.overview}>
      <h2 className={classes.header}>Overview</h2>
      <Doughnut data={data} options={options} />
      <p className={classes.total}>Total: $123123</p>
      <div className={classes.legend}>{labelElements}</div>
    </section>
  );
};

export default Overview;
