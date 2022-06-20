import React from 'react';
import classes from './css/overview.module.css';
import { nanoid } from 'nanoid';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Overview = (props) => {
  const data = {
    labels: props.categories.map((category) => category.category),
    datasets: [
      {
        label: 'Spent this month',
        data: props.categories.map((category) => category.amount),
        backgroundColor: props.categories.map((category) => category.color),
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

  const categoryElements = props.categories.map((category) => {
    const style = {
      backgroundColor: category.color,
    };

    return (
      <div key={nanoid()} className={classes.legendItem}>
        <div className={classes.color} style={style}></div>
        <p>{category.category}:</p>
        <p className={classes.amount}>${category.amount}</p>
      </div>
    );
  });

  const calculateTotalSpent = () => {
    let total = 0;
    props.categories.forEach((category) => (total += category.amount));

    return total;
  };
  return (
    <section className={classes.overview}>
      <h2 className={classes.header}>Overview</h2>
      <Doughnut data={data} options={options} className={classes.chart} />
      <p className={classes.total}>Total: ${calculateTotalSpent()}</p>
      <div className={classes.legend}>{categoryElements}</div>
    </section>
  );
};

export default Overview;
