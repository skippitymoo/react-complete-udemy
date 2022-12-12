import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <p className='expenses-list__fallback'>No expenses found.</p>;
  }

  return (
    <ul className='expenses-list'>
      {props.expenses.map((exp) => {
        return (
          <li key={exp.id}>
            <ExpenseItem
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            ></ExpenseItem>
          </li>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
