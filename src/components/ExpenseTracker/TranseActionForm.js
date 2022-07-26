import { useState } from "react";

const TranseActionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "text",
    amount: [],
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="input"
        type="text"
        name="desc"
        placeholder="Description"
        value={formValues.desc}
        onChange={changeHandler}
      />
      <input
        className="input"
        type="number"
        name="amount"
        placeholder="Amount"
        value={formValues.amount}
        onChange={changeHandler}
      />
      <div className="radioBox">
        <input
          className="radioInput"
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
          id="expense"
        />
        <label
          style={{ marginLeft: "1px", marginRight: "5px" }}
          htmlFor="expense"
        >
          Expense
        </label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
          id="income"
        />
        <label
          style={{ marginLeft: "1px", marginRight: "5px" }}
          htmlFor="income"
        >
          Income
        </label>
      </div>
      <button className="btn primary" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TranseActionForm;
