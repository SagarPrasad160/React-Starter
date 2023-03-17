import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function Expense(props) {
  const [amount, setAmount] = useState(props.amount);
  function handleChange() {
    const newAmount = prompt("enter new amount");
    if (!isNaN(newAmount)) setAmount(newAmount);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${amount}</div>
        <div>{props.location}</div>
        <button onClick={handleChange}>Update!</button>
      </div>
    </Card>
  );
}

export default Expense;
