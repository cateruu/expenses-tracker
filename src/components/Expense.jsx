import React from 'react';
import classes from './css/expense.module.css';

const Expense = (props) => {
  return (
    <div className={classes.expense}>
      <div className={classes.container}>
        <p className={classes.date}>{props.date}</p>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.category}>{props.category}</p>
      </div>
      <p className={classes.amount}>${props.amount}</p>
    </div>
  );
};

export default Expense;
