import React from 'react';
import classes from './css/app.module.css';
// components
import Budget from './components/Budget';
import Overview from './components/Overview';
import Expenses from './components/Expenses';

const App = () => {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Budget />
        <Expenses />
        <Overview />
      </main>
    </div>
  );
};

export default App;
