import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [expenses, setExpenses] = useState(props.expenses);
  const [currentfilter, setCurrentFilter] = useState({
    year: 2021,
  });

  const filterExpenses = (filter, expenses) => {
    expenses.forEach((e) => {
      e.visible = filter.year ? e.date.getFullYear() === filter.year : true;
    });
    setExpenses([...expenses]);
  };

  const filterChangeHandler = (event) => {
    currentfilter.year = +event.target.value;
    filterExpenses(currentfilter, expenses);
    setCurrentFilter(currentfilter);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={currentfilter}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses
        .filter((exp) => exp.visible)
        .map((exp) => {
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
