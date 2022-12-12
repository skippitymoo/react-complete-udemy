import './ExpenseFormControls.css';

const ExpenseFormControls = (props) => {
  return (
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input
          type='text'
          defaultValue={props.title}
          onChange={props.onTitleChange}
        />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input
          type='number'
          min='0.01'
          step='0.01'
          defaultValue={props.amount}
          onChange={props.onAmountChange}
        />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input
          type='date'
          min='2019-01-01'
          max='2022-12-31'
          defaultValue={props.date}
          onChange={props.onDateChange}
        />
      </div>
    </div>
  );
};

export default ExpenseFormControls;
