import { useState } from "react";
import { XyzTransitionGroup } from "@animxyz/react";
import TranseActionForm from "./TranseActionForm";
import Chart from "./Chart";

const OverView = ({ expense, income, addTransaction }) => {
  const [isSohw, setIsShow] = useState(false);
  return (
    <>
      <XyzTransitionGroup
        appear
        xyz="fade small out-down out-rotate-right appear-stagger"
      >
        <div className="topSection">
          <p style={{ color: "#949d93 ", fontSize: "25px" }}>
            Balance :
            <span
              style={{
                color: "#6411ad ",
                marginLeft: "3px",
                paddingTop: "1px",
              }}
            >
              {income - expense} $
            </span>
          </p>
            <button
              className={` btn ${isSohw ? "btnCancel" : ""}`}
              onClick={() => setIsShow((prevState) => !prevState)}
            >
              {isSohw ? "Cancel" : "Add"}
            </button>
        </div>
        {isSohw && (
          <TranseActionForm
            addTransaction={addTransaction}
            setIsShow={setIsShow}
          />
        )}
        <div className="resultSection">
          <div
            className="expenseBox"
            style={{
              borderColor: "#e9cac3",
              backgroundColor: "#e9cac3",
              color: "#949d93",
              fontSize: "25px",
            }}
          >
            Expense{" "}
            <span style={{ color: "#ff0000", fontSize: "25px" }}>
              {expense} $
            </span>
          </div>
          <Chart expense={expense} income={income}/>
          <div
            className="expenseBox"
            style={{
              borderColor: "#bbefa9",
              backgroundColor: "#bbefa9",
              color: "#949d93",
              fontSize: "25px",
            }}
          >
            Income{" "}
            <span style={{ color: "#27a300", fontSize: "25px" }}>
              {income} $
            </span>
          </div>
        </div>
      </XyzTransitionGroup>
    </>
  );
};

export default OverView;
