import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [val, setVal] = useState("");
  const backSpace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };

  const equal = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  const acHandler = () => {
    try {
      setVal(val.slice(0, 0));
    } catch (error) {
      setVal("");
    }
  };

  const percent = () => {
    setVal(val / 100);
  };
  return (
    <div className="container">
      <div className="h1-box">
        <h1 className="h1-calculator">CALCULATOR</h1>
        <hr />
      </div>
      <div className="body-calculator">
        <div className="input-calculator">
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <div className="col-3">
          <button
            className="btn-calculator-delete"
            style={{fontSize: "25px"}}
            value="C"
            onClick={() => backSpace()}
          >
            C/CE
          </button>
          <button
            className="btn-calculator"
            style={{fontSize: "25px"}}
            value="Rnd"
            onClick={() => setVal(Math.random())}
          >
            Rnd
          </button>
          <button
            className="btn-calculator-delete"
            style={{fontSize: "25px"}}
            value="AC"
            onClick={() => acHandler()}
          >
            AC
          </button>
          <button
            className="btn-calculator"
            value="%"
            onClick={() => percent()}
          >
            %
          </button>
        </div>
        <div className="col-3">
          <button
            className="btn-calculator"
            value="1"
            onClick={(e) => setVal(val + e.target.value)}
          >
            1
          </button>
          <button
            className="btn-calculator"
            value="2"
            onClick={(e) => setVal(val + e.target.value)}
          >
            2
          </button>
          <button
            className="btn-calculator"
            value="3"
            onClick={(e) => setVal(val + e.target.value)}
          >
            3
          </button>
          <button
            className="btn-calculator"
            value="*"
            onClick={(e) => setVal(val + e.target.value)}
          >
            X
          </button>
        </div>

        <div className="col-3">
          <button
            className="btn-calculator"
            value="4"
            onClick={(e) => setVal(val + e.target.value)}
          >
            4
          </button>
          <button
            className="btn-calculator"
            value="5"
            onClick={(e) => setVal(val + e.target.value)}
          >
            5
          </button>
          <button
            className="btn-calculator"
            value="6"
            onClick={(e) => setVal(val + e.target.value)}
          >
            6
          </button>
          <button
            className="btn-calculator"
            value="/"
            onClick={(e) => setVal(val + e.target.value)}
          >
            /
          </button>
        </div>

        <div className="col-3">
          <button
            className="btn-calculator"
            value="7"
            onClick={(e) => setVal(val + e.target.value)}
          >
            7
          </button>
          <button
            className="btn-calculator"
            value="8"
            onClick={(e) => setVal(val + e.target.value)}
          >
            8
          </button>
          <button
            className="btn-calculator"
            value="9"
            onClick={(e) => setVal(val + e.target.value)}
          >
            9
          </button>
          <button
            className="btn-calculator"
            value="-"
            onClick={(e) => setVal(val + e.target.value)}
          >
            -
          </button>
        </div>

        <div className="col-3">
          <button
            className="btn-calculator"
            value="."
            onClick={(e) => setVal(val + e.target.value)}
          >
            .
          </button>
          <button
            className="btn-calculator"
            value="0"
            onClick={(e) => setVal(val + e.target.value)}
          >
            0
          </button>
          <button className="btn-calculator" value="="  onClick={() => equal()}>
            =
          </button>
          <button
            className="btn-calculator"
         
            value="+"
            onClick={(e) => setVal(val + e.target.value)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
