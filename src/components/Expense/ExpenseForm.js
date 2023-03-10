import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const [date, setDate] = useState(props.date);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "" || amount === "" || date === "") {
      return;
    }
    const new_expense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSubmitHandler(new_expense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const onClickHandler = (event) => {
    props.onCancelHandler(event);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="textbox"
            value={title}
            required
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            required
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            required
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onClickHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
