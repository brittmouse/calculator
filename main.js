const operate = function(x, operator, y) {
  if (operator === "+") return add(x, y);
  if (operator === "-") return subtract(x, y);
  if (operator === "*") return multiply(x, y);
  if (operator === "/") return divide(x, y);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let num1 = 3;
let num2 = 5;
let operator;

console.log(add(5, 3), subtract(3, 5), multiply(3, 5), divide(3, 5));
