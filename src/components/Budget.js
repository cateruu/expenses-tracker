import React from 'react';
import classes from './css/budget.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Budget = () => {
  return (
    <section className={classes.budget}>
      <h2 className={classes.header}>Budget</h2>
      <FontAwesomeIcon icon={faCirclePlus} className={classes.add} />
      <p className={classes.money}>$99999999,99</p>
      <FontAwesomeIcon icon={faPenToSquare} className={classes.edit} />
    </section>
  );
};

export default Budget;
