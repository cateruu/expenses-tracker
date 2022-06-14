import React from 'react';
import classes from './css/expenses.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Expenses = () => {
  return (
    <section className={classes.expenses}>
      <h2 className={classes.header}>Expenses</h2>
      <FontAwesomeIcon
        icon={faCirclePlus}
        className={classes.add}
        onClick={() => console.log('hejka')}
      />
      <div className={classes.expensesContainer}></div>
    </section>
  );
};

export default Expenses;
