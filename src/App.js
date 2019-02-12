import React, { Component } from "react";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import "./App.css";

class App extends Component {
  state = {
    inputValue: "0",
    stack: [],
    wasCalculated: false
  };

  calculateValue = (value1, operator, value2) => {
    switch (operator) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "x":
        return value1 * value2;
      case "÷":
        return value1 / value2;
      default:
        return this.state.value;
    }
  };

  operatorPressHandler = operator => {
    const stack = [...this.state.stack];
    if (this.state.stack.length === 0) {
      stack.push(this.state.inputValue, operator);
      this.setState({ stack: stack, wasCalculated: true });
    } else if (operator === "=") {
      console.log(
        "calculatedValue: ",
        parseInt(stack[0], 10),
        stack[1],
        parseInt(this.state.inputValue, 10)
      );

      const calculatedValue = this.calculateValue(
        parseInt(stack[0], 10),
        stack[1],
        parseInt(this.state.inputValue, 10)
      );
      console.log(" = : ", calculatedValue);
      this.setState({
        inputValue: calculatedValue.toString(),
        wasCalculated: true,
        stack: []
      });
    } else {
      console.log(
        "calculatedValue: ",
        parseInt(stack[0], 10),
        stack[1],
        parseInt(this.state.inputValue, 10)
      );
      const calculatedValue = this.calculateValue(
        parseInt(stack[0], 10),
        stack[1],
        parseInt(this.state.inputValue, 10)
      );
      console.log(operator, " : ", calculatedValue);
      this.setState({
        stack: [calculatedValue, operator],
        inputValue: calculatedValue.toString(),
        wasCalculated: true
      });
    }
  };

  inputDigitHandler = value => {
    if (this.state.wasCalculated) {
      this.setState({ inputValue: parseInt(value, 10), wasCalculated: false });
    } else {
      const currentDigits = this.state.inputValue;
      this.setState({ inputValue: parseInt(currentDigits + value, 10) });
    }
  };

  clearInputValueHandler = () => {
    this.setState({ inputValue: "0" });
  };

  allClearHandler = () => {
    this.setState({
      inputValue: "0",
      stack: [],
      wasCalculated: false
    });
  };

  render() {
    return (
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <div>
          <Display value={this.state.inputValue} />
        </div>
        <div className="grid">
          <Button val="AC" action={this.allClearHandler} />
          <Button val="C" action={this.clearInputValueHandler} />
          <Button val="=" action={() => this.operatorPressHandler("=")} />
          <Button val="-" action={() => this.operatorPressHandler("-")} />

          <Button val="1" action={() => this.inputDigitHandler("1")} />
          <Button val="2" action={() => this.inputDigitHandler("2")} />
          <Button val="3" action={() => this.inputDigitHandler("3")} />
          <Button val="+" action={() => this.operatorPressHandler("+")} />

          <Button val="4" action={() => this.inputDigitHandler("4")} />
          <Button val="5" action={() => this.inputDigitHandler("5")} />
          <Button val="6" action={() => this.inputDigitHandler("6")} />
          <Button val="x" action={() => this.operatorPressHandler("x")} />

          <Button val="7" action={() => this.inputDigitHandler("7")} />
          <Button val="8" action={() => this.inputDigitHandler("8")} />
          <Button val="9" action={() => this.inputDigitHandler("9")} />
          <Button val="÷" action={() => this.operatorPressHandler("÷")} />
        </div>
      </div>
    );
  }
}

export default App;
