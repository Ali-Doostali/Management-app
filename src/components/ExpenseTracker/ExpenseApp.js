import { useState } from "react";
import { useEffect } from "react";
import "./ExpenseApp.css";
import OverView from "./OverView";
import TranseAction from "./TranseAction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValues) => {
    const data = { ...formValues, id: Date.now() };
    setTransaction([...transaction, data]);
  };

  const removeTnx = (id) => {
    const filtered = transaction.filter((t) => t.id !== id);
    setTransaction(filtered);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transaction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transaction]);

  return (
    <div className="container">
      <section className="section">
      <h2>ExpenseTracker</h2>
        <OverView
          expense={expense}
          income={income}
          addTransaction={addTransaction}
        />
        <TranseAction transaction={transaction} onDelete={removeTnx} />
      </section>
    </div>
  );
};

export default ExpenseApp;
