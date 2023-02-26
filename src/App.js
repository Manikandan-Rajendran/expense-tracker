import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/Expense/NewExpense";
import { useState } from "react";

function App() {
  const DEFAULT_EXPENSE = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DEFAULT_EXPENSE);

  const onSubmitHandle = (expense) => {
    setExpenses((prevStates) => {
      expense["id"] = "e".concat((prevStates.length + 1).toString());
      return [expense, ...prevStates];
    });
  };

  return (
    <div className="App">
      <NewExpense onSubmitHandler={onSubmitHandle} title="" amount="" date="" />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
