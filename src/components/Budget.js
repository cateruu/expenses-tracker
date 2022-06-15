import React from 'react';
import { useState } from 'react';
import classes from './css/budget.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// components
import BudgetInput from './BudgetInput';

const Budget = () => {
  const [isAddingBudget, setIsAddingBudget] = useState(false);
  const [budget, setBudget] = useState(0);

  const addBudget = () => {
    setIsAddingBudget((prevState) => !prevState);
  };

  return (
    <section className={classes.budget}>
      <h2 className={classes.header}>Budget</h2>
      <FontAwesomeIcon
        icon={faCirclePlus}
        className={classes.add}
        onClick={addBudget}
      />
      <p className={classes.money}>${budget}</p>
      <FontAwesomeIcon icon={faPenToSquare} className={classes.edit} />
      {isAddingBudget && <BudgetInput handleSubmit={addBudget} />}
    </section>
  );
};

export default Budget;
