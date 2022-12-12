import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [currentfilter, setCurrentFilter] = useState({
    year: 2021,
  });
  const filteredExpenses = (filter) => {
    const filtered = props.expenses.filter(
      (e) => e.date.getFullYear() === filter.year
    );
    return [...filtered];
  };
  const [items, setItems] = useState(filteredExpenses(currentfilter));

  const filterChangeHandler = (event) => {
    setCurrentFilter((prevState) => {
      prevState.year = +event.target.value;
      setItems(filteredExpenses(prevState));
      return prevState;
    });
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={currentfilter}
        onChangeFilter={filterChangeHandler}
      />
      {items.map((exp) => {
        return (
          <ExpenseItem
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
            key={exp.id}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;
