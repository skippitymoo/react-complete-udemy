import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expensesList = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      visible: true,
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
      visible: true,
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      visible: true,
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      visible: true,
    },
  ];
  const [expenses, setExpenses] = useState(expensesList);
  const [currentfilter, setCurrentFilter] = useState({
    year: null,
  });

  const filterExpenses = (filter, expenses) => {
    expenses.forEach((e) => {
      e.visible = filter.year ? e.date.getFullYear() === filter.year : true;
    });
    setExpenses([...expenses]);
  };

  const addExpenseHandler = (expense) => {
    expenses.push(expense);
    filterExpenses(currentfilter, expenses);
  };

  const filterChangeHandler = (event) => {
    currentfilter.year = +event.target.value;
    setCurrentFilter(currentfilter);
    filterExpenses(currentfilter, expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
