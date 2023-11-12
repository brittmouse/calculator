const display = document.querySelector(".display");
display.innerText = "0";
let firstOperand = null;
let firstOperator = null;
let secondOperand = null;
let secondOperator = null;
let result = null;

const operate = function(x, operator, y) {
  if (operator === "+") return add(x, y);
  else if (operator === "-") return subtract(x, y);
  else if (operator === "X") return multiply(x, y);
  else if (operator === "/") {
    if (y === 0) {
      return "Nice try";
    } else {
      return divide(x, y);
    }
  }
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const roundResult = function(num, sigfig) {
  return parseFloat(Math.round(num + "e" + sigfig) + "e-" + sigfig);
}

const handleDecClick = function(btn) {
  if (!display.innerHTML.includes(".")) {
    if (display.innerHTML === firstOperand || display.innerHTML === secondOperand) {
      display.innerHTML = "0";
    }
    display.innerHTML += btn.innerText;
  }
}

const handleNumClick = function(btn) {
  if (!firstOperator) {
    if (display.innerHTML === "0" ||
      display.innerHTML === 0 ||
      display.innerHTML === firstOperand) {
      display.innerHTML = btn.innerText;
    } else {
      display.innerHTML += btn.innerText;
    }
  } else {
    if (display.innerHTML === firstOperand) {
      display.innerHTML = btn.innerText;
    } else {
      display.innerHTML += btn.innerText;
    }
  }
}

const handleOprClick = function(btn) {
  if (firstOperator && !secondOperator) {
    secondOperator = btn.innerText;
    secondOperand = display.innerHTML;
    result = operate(Number(firstOperand), firstOperator, Number(secondOperand));
    display.innerHTML = roundResult(result, 9).toString();
    firstOperand = display.innerHTML;
    result = null;
  } else if (firstOperator && secondOperator) {
    secondOperand = display.innerHTML;
    result = operate(Number(firstOperand), secondOperator, Number(secondOperand));
    secondOperator = btn.innerText;
    display.innerHTML = roundResult(result, 9).toString();
    firstOperand = display.innerHTML;
    result = null;
  } else {
    firstOperator = btn.innerText;
    firstOperand = display.innerHTML;
  }
}

const handleCalcClick = function() {
  if (!firstOperator) {
    display.innerHTML = display.innerHTML;
  } else if (secondOperator) {
    secondOperand = display.innerHTML;
    result = operate(Number(firstOperand), secondOperator, Number(secondOperand));
    if (result === "Nice try") {
      display.innerHTML = "Nice try";
    } else {
      display.innerHTML = roundResult(result, 9).toString();
      firstOperand = display.innerHTML;
      secondOperand = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  } else {
    secondOperand = display.innerHTML;
    result = operate(Number(firstOperand), firstOperator, Number(secondOperand));
    if (result === "Nice try") {
      display.innerHTML = "Nice try";
    } else {
      display.innerHTML = roundResult(result, 9).toString();
      firstOperand = display.innerHTML;
      secondOperand = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  }
}

const numBtns = document.querySelectorAll(".num");
for (let i = 0; i < numBtns.length; i++) {
  if (numBtns[i].innerHTML !== ".") {
    numBtns[i].addEventListener("click", function() {
      handleNumClick(numBtns[i]);
    });
  } else {
    numBtns[i].addEventListener("click", function() {
      handleDecClick(numBtns[i]);
    });
  }
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
  display.innerText = "0";
  firstOperand = null;
  firstOperator = null;
  secondOperand = null;
  secondOperator = null;
  result = null;
})
