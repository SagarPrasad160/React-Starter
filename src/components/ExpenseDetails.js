import "./ExpenseItem.css";

function ExpenseDetails(props) {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  return (
    <>
      <h2>{expenseTitle}</h2>
      <div className="expense-item__price">${expenseAmount}</div>
    </>
  );
}

export default ExpenseDetails;
