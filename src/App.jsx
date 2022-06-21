import React from 'react';
import { useState } from 'react';
import classes from './css/app.module.css';
// helper functions
import { getCategories } from './getCategories';
// components
import Budget from './components/Budget';
import Overview from './components/Overview';
import Expenses from './components/Expenses';

export const CategoriesContext = React.createContext();

const App = () => {
  const [categories, setCategories] = useState(getCategories());

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Budget categories={categories} />
        <CategoriesContext.Provider value={setCategories}>
          <Expenses />
        </CategoriesContext.Provider>
        <Overview categories={categories} />
      </main>
    </div>
  );
};

export default App;
