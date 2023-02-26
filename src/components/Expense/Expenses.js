import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Common/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    props.items[0].date.getFullYear().toString()
  );
  const getUniqueYears = (expenses) => {
    const years = expenses
      .map((expense) => {
        return expense.date.getFullYear();
      })
      .filter((value, index, self) => self.indexOf(value) === index);
    return years;
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const updateFilteredYear = (event) => {
    setFilteredYear(event.target.value);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        yearslist={getUniqueYears(props.items)}
        onChangeHandler={updateFilteredYear}
        selected={filteredYear}
      />
      {filteredExpenses.length === 0 ? (
        <p>No expense found</p>
      ) : (
        filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          );
        })
      )}
    </Card>
  );
};

export default Expenses;
