import Expense from "./ExpenseTracker";
import "./Expenses.css";

import Card from "../UI/Card";
import { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredArray = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expenseContent = <p>No Expenses Found!</p>;

  if (filteredArray.length === 1) {
    const expense = filteredArray[0];
    expenseContent = (
      <>
        <Expense
          key={expense.id}
          amount={expense.amount}
          title={expense.title}
          date={expense.date}
        />
        <p>Only single Expense here. Please add more...</p>
      </>
    );
  }

  if (filteredArray.length > 1) {
    expenseContent = filteredArray.map((expense) => (
      <Expense
        key={expense.id}
        amount={expense.amount}
        title={expense.title}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
}

export default Expenses;
