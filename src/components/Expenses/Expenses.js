import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

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

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length) {
    expensesContent = filteredExpenses.map((exp) => {
      return (
        <ExpenseItem
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
          key={exp.id}
        ></ExpenseItem>
      );
    });
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={currentfilter}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
