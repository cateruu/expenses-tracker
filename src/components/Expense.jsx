import React from 'react';
import classes from './css/expense.module.css';

const Expense = (props) => {
  const deleteExpense = () => {
    props.setExpenses((prevState) => {
      let newState = [];

      prevState.forEach((expense) => {
        if (expense.id !== props.id) {
          newState.push(expense);
        }
      });

      return newState;
    });

    props.setCategories((prevState) => {
      return prevState.map((category) => {
        if (category.category === props.category) {
          category.amount -= props.amount / 2;
        }

        return category;
      });
    });
  };

  return (
    <div className={classes.expense}>
      <div className={classes.container}>
        <p className={classes.date}>{props.date}</p>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.category}>{props.category}</p>
      </div>
      <p className={classes.amount}>${props.amount}</p>
      <p onClick={deleteExpense}>usun</p>
    </div>
  );
};

export default Expense;
