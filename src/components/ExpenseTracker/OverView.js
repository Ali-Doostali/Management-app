import { useState } from "react";
import TranseActionForm from "./TranseActionForm";

const OverView = ({ expense, income , addTransaction }) => {
  const [isSohw, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p style={{ color: "#949d93 " }}>
          Balance :
          <span style={{ color: "#6411ad " ,marginLeft: "3px" , paddingTop: "1px" }}>{income - expense} $</span>
        </p>
        <button
          className={`btn ${isSohw ? "btnCancel" : ""}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isSohw ? "Cancel" : "Add"}
        </button>
      </div>
      {isSohw && <TranseActionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
      <div className="resultSection">
        <div
          className="expenseBox"
          style={{
            borderColor: "#e9cac3",
            backgroundColor: "#e9cac3",
            color: "#949d93",
          }}
        >
          Expense <span style={{ color: "#ff0000" }}>{expense} $</span>
        </div>
        <div
          className="expenseBox"
          style={{
            borderColor: "#bbefa9",
            backgroundColor: "#bbefa9",
            color: "#949d93",
          }}
        >
          Income <span style={{ color: "#27a300" }}>{income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverView;
