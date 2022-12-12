import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
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
