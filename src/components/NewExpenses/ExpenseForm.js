import "./ExpenseForm.css";

import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const changeDate = ({ target }) => {
    setEnteredDate(target.value);
  };
  const changeTitle = ({ target }) => {
    setEnteredTitle(target.value);
  };

  const changeAmount = ({ target }) => {
    setEnteredAmount(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    props.saveExpense(newExpense);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={changeAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-2-21"
            max="2024-5-2"
            onChange={changeDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
