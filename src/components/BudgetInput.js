import React from 'react';
import { useState } from 'react';
import classes from './css/budgetInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const BudgetInput = (props) => {
  const [money, setMoney] = useState('');

  const handleChange = (e) => {
    setMoney(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p className={classes.dollar}>$</p>
      <input
        type='number'
        placeholder='9999.99'
        max='99999999.99'
        step='0.01'
        value={money}
        onChange={handleChange}
        className={classes.input}
      />
      <button className={classes.submit}>
        <FontAwesomeIcon icon={faCirclePlus} className={classes.add} />
      </button>
    </form>
  );
};

export default BudgetInput;
