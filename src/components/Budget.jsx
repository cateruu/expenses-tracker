import React from 'react';
import { useState, useEffect } from 'react';
import classes from './css/budget.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
// components
import BudgetInput from './BudgetInput';

const Budget = (props) => {
  const [isAddingBudget, setIsAddingBudget] = useState(false);
  const [budget, setBudget] = useState(localStorage.getItem('budget') || 0);

  const addBudget = () => {
    setIsAddingBudget((prevState) => !prevState);
  };

  useEffect(() => {
    localStorage.setItem('budget', budget);
  }, [budget]);

  const actualBudget = () => {
    let currentBudget = budget;
    props.categories.forEach((category) => {
      currentBudget -= category.amount;
    });

    return currentBudget;
  };

  return (
    <section className={classes.budget}>
      <h2 className={classes.header}>Budget</h2>
      {isAddingBudget ? (
        <FontAwesomeIcon
          icon={faCircleMinus}
          className={classes.remove}
          onClick={addBudget}
        />
      ) : (
        <FontAwesomeIcon
          icon={faCirclePlus}
          className={classes.add}
          onClick={addBudget}
        />
      )}
      <p
        className={`${classes.money} ${
          actualBudget() < 0 ? classes.minus : null
        }`}
      >
        {actualBudget() < 0 ? `-$${actualBudget() * -1}` : `$${actualBudget()}`}
      </p>
      {isAddingBudget && (
        <BudgetInput handleSubmit={addBudget} setBudget={setBudget} />
      )}
    </section>
  );
};

export default Budget;
