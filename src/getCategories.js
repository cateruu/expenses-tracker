export const getCategories = () => {
  const expenses = JSON.parse(localStorage.getItem('expenses'));
  const categories = [
    {
      category: 'Travel',
      color: '#F25E5E',
      amount: 0,
    },
    {
      category: 'Entertainment',
      color: '#EFF25E',
      amount: 0,
    },
    {
      category: 'Food',
      color: '#61F25E',
      amount: 0,
    },
    {
      category: 'Shopping',
      color: '#5ECFF2',
      amount: 0,
    },
    {
      category: 'Housing',
      color: '#BA5EF2',
      amount: 0,
    },
    {
      category: 'Investments',
      color: '#F25EEC',
      amount: 0,
    },
  ];

  if (expenses) {
    expenses.forEach((expense) => {
      categories.forEach((category) => {
        if (expense.category === category.category) {
          category.amount += +expense.amount;
        }
      });
    });
  }

  return categories;
};
