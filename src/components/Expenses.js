import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className='expenses'>
      {props.expenses.map((exp) => {
        return (
          <ExpenseItem
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
            key={exp.id}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;
