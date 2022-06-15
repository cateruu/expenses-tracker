import React from 'react';
import classes from './css/expensesInput.module.css';

const ExpensesInput = (props) => {
  return (
    <form className={classes.form} noValidate>
      <input type='text' placeholder='Title' />
    </form>
  );
};

export default ExpensesInput;
