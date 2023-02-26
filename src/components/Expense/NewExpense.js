import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSubmitHandler = (new_expense) => {
    props.onSubmitHandler(new_expense);
    setIsEditing(false);
  };

  const onClickHandler = () => {
    setIsEditing(true);
  };

  const onCancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onCancelHandler={onCancelHandler}
          onSubmitHandler={onSubmitHandler}
        />
      )}
      {!isEditing && <button onClick={onClickHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
