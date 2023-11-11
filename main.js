const display = document.querySelector(".display");
display.innerHTML = "";

const numButtons = document.querySelectorAll(".num");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", handleNumClick(numButtons[i].innerHTML));
}

function handleNumClick(text) {
  // if (text !== ".") Number(text);
  display.innerHTML += text;
}

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
