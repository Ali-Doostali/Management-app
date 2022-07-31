import { useState } from "react";
import { XyzTransitionGroup } from "@animxyz/react";
import Swal from 'sweetalert2'

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
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Expense Added successfully',
      showConfirmButton: false,
      timer: 1000,
      width: "500px",
      height : 200,
      background : "#f6fff2",
    })
  };

  return (
    <XyzTransitionGroup
      appear
      xyz="fade small out-down out-rotate-right appear-stagger"
    >
      <form className="form-expense" onSubmit={submitHandler}>
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
            style={{ marginLeft: "3px", marginRight: "20px" }}
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
    </XyzTransitionGroup>
  );
};

export default TranseActionForm;
