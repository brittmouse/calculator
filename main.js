const display = document.querySelector(".display");
display.innerText = "";

const handleNumClick = function(btn) {
  display.innerText += btn.innerText;
}

const numButtons = document.querySelectorAll(".num");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", function() {
    handleNumClick(numButtons[i]);
  });
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
