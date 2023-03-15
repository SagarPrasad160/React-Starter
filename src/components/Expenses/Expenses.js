import Expense from "./ExpenseTracker";
import "./Expenses.css";

import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <Expense
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].location}
      />
      <Expense
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].location}
      />
      <Expense
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].location}
      />
      <Expense
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location={props.items[3].location}
      />
    </Card>
  );
}

export default Expenses;
