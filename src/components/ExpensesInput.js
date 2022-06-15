import React from 'react';
import { useState } from 'react';
import classes from './css/expensesInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ExpensesInput = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    money: '',
    category: '',
    date: '22/05',
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <p className={classes.titleIcon}>T</p>
      <input
        type='text'
        placeholder='Title'
        className={classes.title}
        onChange={handleChange}
        value={formData.title}
        name='title'
      />
      <p className={classes.moneyIcon}>$</p>
      <input
        type='number'
        placeholder='299.99'
        step='0.01'
        className={classes.money}
        onChange={handleChange}
        value={formData.money}
        name='money'
      />
      <select
        className={classes.category}
        onChange={handleChange}
        value={formData.category}
        name='category'
      >
        <option disabled value=''>
          Category
        </option>
        <option value='travel'>Travel</option>
        <option value='entertainment'>Entertainment</option>
        <option value='food'>Food</option>
        <option value='shopping'>Shopping</option>
        <option value='housing'>Housing</option>
        <option value='investments'>Investments</option>
      </select>
      <div className={classes.date}>
        {formData.date}{' '}
        <FontAwesomeIcon icon={faAngleDown} className={classes.dateArrow} />
      </div>
      <button className={classes.submit}>
        <FontAwesomeIcon icon={faCirclePlus} className={classes.add} />
      </button>
    </form>
  );
};

export default ExpensesInput;
