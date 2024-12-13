import React from "react";

const Calculator = () => {
  const arrMathOperators = ["+", "-", "*", "/"];
  const numbers = [5, 3];

  const results = arrMathOperators.map((operator) => {
    const [a, b] = numbers;
    switch (operator) {
      case "+":
        return `${a} + ${b} = ${a + b}`;
      case "-":
        return `${a} - ${b} = ${a - b}`;
      case "*":
        return `${a} * ${b} = ${a * b}`;
      case "/":
        return `${a} / ${b} = ${a / b}`;
      default:
        return null;
    }
  });

  return (
    <div className="p-4">
      {results.map((result, index) => (
        <p key={index}>{result}</p>
      ))}
    </div>
  );
};

export default Calculator;
