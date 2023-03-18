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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <Expense
          amount={expense.amount}
          title={expense.title}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
