import React from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    //detecting enter key press and tiggering equal
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });
  //buttons layout
  return (

  
    <div className="show-btn">
      <div>
        <button className="btn clr" onClick={clearInput}>
          AC
        </button>
        <button className="btn clr" onClick={backspace}>
          ⌫
        </button>
        <button className="btn exp" onClick={inputHandler}>
          ÷
        </button>
        <button className="btn exp" onClick={inputHandler}>
          %
        </button>
      </div>
      <div>
        <button className="btn" onClick={inputHandler}>
          7
        </button>
        <button className="btn" onClick={inputHandler}>
          8
        </button>
        <button className="btn" onClick={inputHandler}>
          9
        </button>
        <button className="btn exp" onClick={inputHandler}>
          x
        </button>
      </div>
      <div>
        <button className="btn" onClick={inputHandler}>
          4
        </button>
        <button className="btn" onClick={inputHandler}>
          5
        </button>
        <button className="btn" onClick={inputHandler}>
          6
        </button>
        <button className="btn exp" onClick={inputHandler}>
          -
        </button>
      </div>
      <div>
        <button className="btn" onClick={inputHandler}>
          1
        </button>
        <button className="btn" onClick={inputHandler}>
          2
        </button>
        <button className="btn" onClick={inputHandler}>
          3
        </button>
        <button className="btn exp" onClick={inputHandler}>
          +
        </button>
      </div>
      <div>
        <button className="btn" onClick={inputHandler}>
          0
        </button>
        <button className="btn exp" onClick={inputHandler}>
          .
        </button>
        <button className="btn exp equal" id="equalbtn" onClick={calculateAns}>
          =
        </button>
      </div>
    </div>
  );
};

export default Buttons;
