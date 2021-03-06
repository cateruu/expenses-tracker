import React from 'react';
import { useState, useContext } from 'react';
import classes from './css/expensesInput.module.css';
import './css/calendar.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faAngleDown } from '@fortawesome/free-solid-svg-icons';
// helper functions
import { nanoid } from 'nanoid';
import { getCurrentDay } from './getCurrentDay';
// components
import Calendar from 'react-calendar';
// context
import { CategoriesContext } from '../App';

const ExpensesInput = (props) => {
  const setCategories = useContext(CategoriesContext);
  const [isChangingDate, setIsChangingDate] = useState(false);
  const [isError, setIsError] = useState({
    error: false,
    text: '',
  });

  const [formData, setFormData] = useState({
    title: '',
    money: '',
    category: '',
    date: getCurrentDay(),
  });

  const changingDate = () => {
    setIsChangingDate((prevState) => !prevState);
  };

  const changeDate = (value) => {
    let day = value.getDate();
    let month = value.getMonth() + 1;

    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }

    setFormData((prevState) => {
      return {
        ...prevState,
        date: `${day}/${month}`,
      };
    });
    setIsChangingDate((prevState) => !prevState);
  };

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

    if (!formData.title && !formData.category && !formData.money) {
      setIsError({ error: true, text: 'Empty Title, Amount & Category' });
      return;
    } else if (!formData.title && !formData.category) {
      setIsError({ error: true, text: 'Empty Title & Category' });
      return;
    } else if (!formData.title && !formData.money) {
      setIsError({ error: true, text: 'Empty Title & Amount' });
      return;
    } else if (!formData.category && !formData.money) {
      setIsError({ error: true, text: 'Empty Amount & Category' });
      return;
    } else if (!formData.title) {
      setIsError({ error: true, text: 'Empty Title' });
      return;
    } else if (!formData.category) {
      setIsError({ error: true, text: 'Empty Category' });
      return;
    } else if (!formData.money) {
      setIsError({ error: true, text: 'Empty Amount' });
      return;
    } else if (formData.money > 99999999.99) {
      setIsError({ error: true, text: 'Has to be lower than 99999999.99' });
      return;
    }

    props.setExpenses((prevState) => {
      return [
        {
          id: nanoid(),
          title: formData.title,
          amount: formData.money,
          category: formData.category,
          date: formData.date,
        },
        ...prevState,
      ];
    });

    setCategories((prevState) => {
      return prevState.map((category) => {
        if (category.category === formData.category) {
          category.amount += +formData.money;
        }

        return category;
      });
    });

    props.handleSubmit();
  };

  return (
    <form
      className={`${classes.form} ${isError.error ? classes.error : null}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <p className={classes.titleIcon}>T</p>
      <input
        type='text'
        placeholder='Title'
        maxLength='20'
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
        <option value='Travel'>Travel</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Food'>Food</option>
        <option value='Shopping'>Shopping</option>
        <option value='Housing'>Housing</option>
        <option value='Investments'>Investments</option>
      </select>
      <div className={classes.date} onClick={changingDate}>
        {formData.date}
        <FontAwesomeIcon icon={faAngleDown} className={classes.dateArrow} />
      </div>
      <button className={classes.submit}>
        <FontAwesomeIcon icon={faCirclePlus} className={classes.add} />
      </button>
      {isChangingDate ? (
        <Calendar
          className={classes.calendar}
          tileClassName={classes.day}
          showNavigation={false}
          showNeighboringMonth={false}
          locale={'en-EN'}
          onChange={(value, event) => changeDate(value)}
        />
      ) : null}
      {isError.error ? (
        <p className={classes.errorText}>{isError.text}</p>
      ) : null}
    </form>
  );
};

export default ExpensesInput;
