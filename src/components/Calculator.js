import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import React, {useState} from 'react';
import '../App.css';

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */

  // useState handle to keep track of the display value - number
  const [number, setNumber] = useState("0");

  // helper function to create the buttons for numbers
  const createNumbers = () => {
    const nbr = [];

    for (let i = 0; i < 10; i++)
    {
      nbr.push(
          <Number value={i.toString()} onClick={handleNumberClick} />
      )
    }

    return nbr;


  }

  const opers = ['+', '-', '/', '*'];

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (value) => {
    // Adds the userInput if number to the number
    /*
    console.log(event.target.innerHTML);
    newNumber = event.target.innerHTML; */
    //console.log("I am here with butoon click");
    //console.log(typeof(value));
    //console.log(Object.values(value)[0]);
    //console.log(number);
    let userInput = Object.values(value)[0];
    //console.log("checking for zero", number.slice(0, -1))
    if (number === '0'){
      setNumber(userInput);
    }
    else {
      setNumber(number + userInput);
    }


  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (value) => {
    // Does more of the hard work when adding an operator

    //console.log("I am here with operator click");
    //console.log(number);
    let userInput = Object.values(value)[0];
    //console.log("operas includes", opers.includes(number.slice(-1)));

    // CASE 1: Operator is "=" - then evaluates and sets the Number
    if (userInput === '=') {
      setNumber(eval(number).toString());
    }

    // CASE 2: If Clear - set to zero
    else if (userInput === 'clear') {
      setNumber('0');
      //console.log("after clear", number)
    }

    // Case 3: if preceding input is an operator return with no change (policy)
    else if (number === '' || opers.includes(number.slice(-1))) {
      return
    }

    // Case 4: None of the above - add the operator
    else {
      setNumber(number + userInput);
    }

  };

  return (
    <div className = "calculator">


      <Screen value={number} />


      <div className = "numbers">
        { createNumbers () }

      </div>

      
        <div className = "operators">
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="*" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
    </div>

  );
};

export default Calculator;
