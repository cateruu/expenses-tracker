import React from 'react';
import { useContext } from 'react';
import classes from './css/expense.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
// context
import { CategoriesContext } from '../App';

const Expense = (props) => {
  const setCategories = useContext(CategoriesContext);

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

    setCategories((prevState) => {
      return prevState.map((category) => {
        if (category.category === props.category) {
          category.amount -= props.amount;
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
      <FontAwesomeIcon
        icon={faTrashCan}
        className={classes.delete}
        onClick={deleteExpense}
      />
      <p className={classes.amount}>${props.amount}</p>
    </div>
  );
};

export default Expense;
