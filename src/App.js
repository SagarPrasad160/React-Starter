import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "NYC",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "DN",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "TN",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "LA",
    },
  ];

  const [allExpense, setAllExpense] = useState(expenses);

  const [showForm, setShowForm] = useState(false);

  const addExpense = (newExpense) => {
    console.log("In APP");
    console.log(newExpense);
    setAllExpense((prev) => [...prev, newExpense]);
    setShowForm((prev) => !prev);
  };

  const addNewExpense = (
    <button
      onClick={() => {
        setShowForm((prev) => !prev);
      }}
    >
      Add New Expense
    </button>
  );

  return (
    <div>
      {showForm ? <NewExpense addExpense={addExpense} /> : addNewExpense}
      <Expenses items={allExpense} />
    </div>
  );
}

export default App;
