import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: enteredExpenseData.title,
      visible: true,
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const cancelHandler = () => {
    setShowForm(false);
  };

  const addExpenseHandler = () => {
    setShowForm(true);
  };

  return (
    <div className='new-expense'>
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
      {!showForm && (
        <button type='button' onClick={addExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
