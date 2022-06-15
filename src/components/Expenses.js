import React from 'react';
import { useState } from 'react';
import classes from './css/expenses.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
// components
import ExpensesInput from './ExpensesInput';

const Expenses = () => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  // const [expenses, setExpenses] = useState(
  //   localStorage.getItem('expenses') || []
  // );

  const addingExpense = () => {
    setIsAddingExpense((prevState) => !prevState);
  };

  return (
    <section className={classes.expenses}>
      <h2 className={classes.header}>Expenses</h2>
      {isAddingExpense ? (
        <FontAwesomeIcon
          icon={faCircleMinus}
          className={classes.remove}
          onClick={addingExpense}
        />
      ) : (
        <FontAwesomeIcon
          icon={faCirclePlus}
          className={classes.add}
          onClick={addingExpense}
        />
      )}
      {isAddingExpense && <ExpensesInput handleSubmit={addingExpense} />}
      <div className={classes.expensesContainer}></div>
    </section>
  );
};

export default Expenses;
