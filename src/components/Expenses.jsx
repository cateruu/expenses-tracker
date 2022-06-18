import React from 'react';
import { useState, useEffect } from 'react';
import classes from './css/expenses.module.css';
import { nanoid } from 'nanoid';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
// components
import ExpensesInput from './ExpensesInput';
import Expense from './Expense';

const Expenses = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem('expenses')) || []
  );

  const addingExpense = () => {
    setIsAddingExpense((prevState) => !prevState);
  };

  useEffect(() => {
    const expensesJSON = JSON.stringify(expenses);
    localStorage.setItem('expenses', expensesJSON);
  }, [expenses]);

  const expenseElemets = expenses.map((expense) => {
    return (
      <Expense
        key={nanoid()}
        title={expense.title}
        amount={expense.amount}
        category={expense.category}
        date={expense.date}
      />
    );
  });

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
      {isAddingExpense && (
        <ExpensesInput
          handleSubmit={addingExpense}
          setExpenses={setExpenses}
          setCategories={props.setCategories}
        />
      )}
      <div className={classes.expensesContainer}>{expenseElemets}</div>
    </section>
  );
};

export default Expenses;
