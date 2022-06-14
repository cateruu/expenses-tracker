import React from 'react';
import classes from './css/app.module.css';
// components
import Budget from './components/Budget';

const App = () => {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Budget />
      </main>
    </div>
  );
};

export default App;
