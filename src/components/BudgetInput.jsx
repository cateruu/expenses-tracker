import React from 'react';
import { useState } from 'react';
import classes from './css/budgetInput.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const BudgetInput = (props) => {
  const [money, setMoney] = useState('');
  const [isError, setIsError] = useState({ error: false, text: '' });

  const handleChange = (e) => {
    setMoney(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = e.target.input.value;
    if (inputValue === '') {
      setIsError({ error: true, text: 'Empty input' });
      return;
    } else if (inputValue < 1) {
      setIsError({ error: true, text: 'Has to be greater than 1' });
      return;
    } else if (inputValue > 99999999.99) {
      setIsError({ error: true, text: 'Has to be lower than 99999999.99' });
      return;
    }

    props.handleSubmit();
    props.setBudget(money);
  };

  return (
    <form
      className={`${classes.form} ${isError.error ? classes.error : null}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <p className={classes.dollar}>$</p>
      <input
        type='number'
        placeholder='9999.99'
        step='0.01'
        value={money}
        onChange={handleChange}
        className={classes.input}
        name='input'
      />
      {isError.error ? (
        <p className={classes.errorText}>{isError.text}</p>
      ) : null}
      <button className={classes.submit}>
        <FontAwesomeIcon icon={faCirclePlus} className={classes.add} />
      </button>
    </form>
  );
};

export default BudgetInput;
