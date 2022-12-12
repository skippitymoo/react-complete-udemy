import { useState } from 'react';
import ExpenseFormControls from './ExpenseFormControls';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const clearForm = () => {
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    clearForm();
  };

  const cancelHandler = () => {
    props.onCancel();

    clearForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <ExpenseFormControls
        title={enteredTitle}
        amount={enteredAmount}
        date={enteredDate}
        onTitleChange={titleChangeHandler}
        onAmountChange={amountChangeHandler}
        onDateChange={dateChangeHandler}
      />
      <div className='new-expense__actions'>
        <button type='button' onClick={cancelHandler}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
