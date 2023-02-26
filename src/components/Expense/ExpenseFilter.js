const ExpenseFilter = (props) => {
  // const classes = "card " + props.className;
  //   const [yearslist] = useState(props.yearslist);

  return (
    <div>
      <select onChange={props.onChangeHandler} value={props.selected}>
        {props.yearslist.sort().map((element) => {
          return (
            <option key={element} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpenseFilter;
