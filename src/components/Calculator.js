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

    // I had trouble getting eval() into github so implemented my own. but
    //  with caveat that I executed any operation as soon as it was valid


    const evaluating = (first_number, second_number, operator) => {
      // helper function that takes first, second number and operator

      // as numbers are strings - I convert to integer with parseInt
      let n1 = parseInt(first_number);
      let n2 = parseInt(second_number);

      // switch implemented as collection of if-else

      if (operator === '+'){
        return (n1+n2).toString();
      }
      else if (operator === '-'){
        return (n1-n2).toString();
      }
      else if (operator === '*'){
        return (n1*n2).toString();
      }
      else if (operator === '/'){
        return (n1/n2).toString();
      }
      else {
        return;
      }
    }




    //console.log("I am here with operator click");
    //console.log(number);
    let userInput = Object.values(value)[0];
    //console.log("operas includes", opers.includes(number.slice(-1)));

    // CASE 1: Operator is "=" - then evaluates and sets the Number

    if (userInput === '=') {

      // parameters to track any previous operator
      let prev_operator = false;
      let existing_operator = "";

      // parses each of the operator list
      opers.forEach((item, i) => {

        // if the existing number string has the operator - get the
        // operator and boolean counter to true
        if (number.includes(item)) {
          prev_operator = true;
          existing_operator = item;
        }
      });

      // if no previous operator exists - then return the number as is
      if (prev_operator === false){
        //console.log("no previous operator");
        return;
      }

      // if there is an existing operator - we need to evaluate and store and
      // display the result
      else {
        //console.log("existing_operator", existing_operator);

        // parsing number into three parts
        // number 1
        // operator
        // number 2
        let operator_index = number.indexOf(existing_operator);
        //console.log(operator_index);
        let first_number = number.slice(0,operator_index);
        let operator = number[operator_index];
        let second_number = number.slice(operator_index + 1);
        //console.log("first number", first_number);
        //console.log("second_number", second_number);
        //console.log("operator", operator);

        // send to our evaluating internal helper function
        // get result
        let result = evaluating(first_number, second_number, operator);
        //console.log("I am here")

        // setNumber (result)
        setNumber(result);
      }
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
    // again we need to see if there is a previous operator. By our policy
    // of evaluating an expression as soon as it becomes ready for evaluation
    else {

      // parameters to track any previous operator
      let prev_operator = false;
      let existing_operator = "";

      // parses each of the operator list
      opers.forEach((item, i) => {
        if (number.includes(item)) {

          // if the existing number string has the operator - get the
          // operator and boolean counter to true
          prev_operator = true;
          existing_operator = item;
        }
      });

      // if no previous operator exists - then concat operator to the
      // nunber string and display
      if (prev_operator === false){
        //console.log("no previous operator");
        setNumber(number + userInput);
      }
      else {

        //console.log("existing_operator", existing_operator);

        // parsing number into three parts
        // number 1
        // operator
        // number 2
        let operator_index = number.indexOf(existing_operator);
        //console.log(operator_index);
        let first_number = number.slice(0,operator_index);
        let operator = number[operator_index];
        let second_number = number.slice(operator_index + 1);
        //console.log("first number", first_number);
        //console.log("second_number", second_number);
        //console.log("operator", operator);

        // send to our evaluating internal helper function
        // get result
        let result = evaluating(first_number, second_number, operator);
        //console.log("I am here")

        // setNumber (result + new operator input by the user)
        setNumber(result + userInput);
      }

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
