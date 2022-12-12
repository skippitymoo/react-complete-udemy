import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [currentfilter, setCurrentFilter] = useState({
    year: 2021,
  });

  const filterChangeHandler = (event) => {
    setCurrentFilter((prevState) => {
      prevState.year = +event.target.value;
      return { ...prevState };
    });
  };

  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear() === currentfilter.year
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={currentfilter}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
