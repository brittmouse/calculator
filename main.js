const display = document.querySelector(".display");
display.innerText = "";
let mathStr = "";

const operate = function(x, operator, y) {
  if (operator === "+") return add(x, y);
  if (operator === "-") return subtract(x, y);
  if (operator === "X") return multiply(x, y);
  if (operator === "/") return divide(x, y);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const handleNumClick = function(btn) {
  if (btn.innerText === "." && !display.innerHTML.includes(".")
    || btn.innerText !== ".") {
    display.innerText += btn.innerText;
    mathStr += btn.innerText;
  }
}

const handleOprClick = function(btn) {
  display.innerText = ` ${btn.innerText} `;
  mathStr += ` ${btn.innerText} `;
}

const handleCalcClick = function() {
  mathArray = mathStr.split(" ");
  let numA = Number(mathArray[0]);
  let numB = Number(mathArray[2]);
  let oper = mathArray[1];
  if (numB) {
    display.innerText = operate(numA, oper, numB).toString();
    mathStr = display.innerText;
  }
}

const numBtns = document.querySelectorAll(".num");
for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function() {
    handleNumClick(numBtns[i]);
  });
}

const oprBtns = document.querySelectorAll(".operator");
for (let i = 0; i < oprBtns.length; i++) {
  oprBtns[i].addEventListener("click", function() {
    handleOprClick(oprBtns[i]);
  });
}

const calcBtn = document.querySelector(".calculate");
calcBtn.addEventListener("click", function() {
  handleCalcClick();
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", function() {
  display.innerText = "";
  mathStr = "";
})
