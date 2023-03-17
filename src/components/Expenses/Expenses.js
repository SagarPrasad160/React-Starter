import Expense from "./ExpenseTracker";
import "./Expenses.css";

import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
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
