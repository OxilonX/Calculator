export {
  result,
  hiddenResult,
  numberButtons,
  allNumbers,
  operator,
  percentageButton,
  equalButton,
  eraseAllButton,
  inverseButton,
  dotButton,
  negativeButton,
  MaxDigits,
  adjustMaxDigits,
  displayNumbers,
  showHiddenResult,
  keyDisplayNumbers,
  arithmeticOperaitions,
  handleOperator,
  arithmeticOperationsButtons,
  dotClicked,
  minusButton,
  keyPressedByUser,
  buttonsOnThePage,
};
const result = document.querySelector(".result");
let hiddenResult = "";
const numberButtons = document.querySelectorAll(".js-number");
const allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operator = document.querySelectorAll(".operator");
const percentageButton = document.querySelector(".js-percentage");
const equalButton = document.querySelector(".equal-sign");
const eraseAllButton = document.querySelector(".js-c");
const inverseButton = document.querySelector(".js-inv");
const dotButton = document.querySelector(".js-dot");
const negativeButton = document.querySelector(".js-negative");
let MaxDigits;
/*functions*/
adjustMaxDigits();
function adjustMaxDigits() {
  const mediaQuery = window.matchMedia("(max-width: 430px)");

  if (mediaQuery.matches) {
    MaxDigits = 10;
  } else {
    MaxDigits = 15;
  }
}
window
  .matchMedia("(max-width: 430px)")
  .addEventListener("change", adjustMaxDigits);
function displayNumbers(button) {
  button.addEventListener("click", function () {
    if (result.value.length < MaxDigits) {
      result.value += button.textContent;
    }
  });
}
function showHiddenResult() {
  document.querySelector(".js-calcs").innerText = hiddenResult;
}
function keyDisplayNumbers() {
  document.addEventListener("keydown", function (event) {
    if (allNumbers.includes(event.key) && result.value.length < MaxDigits) {
      result.value += event.key;
    } else if (event.key === "Backspace") {
      result.value = result.value.slice(0, -1);
    } else if (event.key === "c") {
      result.value = "";
      hiddenResult = "";
    }
    showHiddenResult();
  });
}

function arithmeticOperaitions() {
  document.addEventListener("keydown", (event) => {
    if (["+", "/", "*", "-"].includes(event.key)) {
      if (
        result.value &&
        !["+", "/", "*", "-"].includes(
          result.value.charAt(result.value.length - 1)
        )
      ) {
        hiddenResult += result.value + event.key;
        result.value = "";
      }
    }
    showHiddenResult();
  });
}
function handleOperator(operator) {
  if (result.value && !["+", "/", "*", "-"].includes(result.value.slice(-1))) {
    hiddenResult += result.value + operator;
    result.value = "";
    showHiddenResult();
  }
}

function arithmeticOperationsButtons(button) {
  button.addEventListener("click", () => {
    handleOperator(button.textContent);
  });
}
function dotClicked() {
  const lastResultNumber = result.value
    .split(/[\+\-\*\/]/)
    .pop()
    .trim();
  if (
    !result.value.endsWith(".") &&
    result.value !== "" &&
    lastResultNumber.split(".").length <= 1
  ) {
    result.value += ".";
  }
}
function minusButton() {
  if (!result.value.startsWith("-")) {
    result.value += "-";
  } else if (result.value.startsWith("-")) {
    result.value = result.value.substring(1);
  }
}
function keyPressedByUser() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "=" || event.key === "Enter") {
      hiddenResult += result.value;
      if (eval(hiddenResult) === Infinity || eval(hiddenResult) === -Infinity) {
        result.value = "error";
        hiddenResult = "";
      } else {
        result.value = eval(hiddenResult);
        hiddenResult = "";
      }
    } else if (event.key === "i") {
      hiddenResult = "";
      parseFloat(result.value);
      if (result.value === "0") {
        result.value = "error";
      } else {
        result.value = (1 / result.value).toString();
      }
    } else if (event.key === "%") {
      hiddenResult = "";
      parseFloat(result.value);
      if (result.value === "0") {
        result.value = "error";
      } else {
        result.value = (result.value / 100).toString();
      }
    } else if (event.key === ".") {
      dotClicked();
    } else if (event.key === "n") {
      minusButton();
    }
  });
}

function buttonsOnThePage(
  button1,
  button2,
  button3,
  button4,
  button5,
  button6
) {
  button1.addEventListener("click", () => {
    hiddenResult += result.value;
    if (eval(hiddenResult) === Infinity || eval(hiddenResult) === -Infinity) {
      result.value = "error";
      hiddenResult = "";
    } else {
      result.value = eval(hiddenResult);
      hiddenResult = "";
    }
  });
  button2.addEventListener("click", () => {
    result.value = "";
    hiddenResult = "";
    showHiddenResult();
  });
  button3.addEventListener("click", () => {
    hiddenResult = "";
    parseFloat(result.value);
    if (result.value === "0") {
      result.value = "error";
    } else {
      result.value = (1 / result.value).toString();
    }
  });
  button4.addEventListener("click", () => {
    hiddenResult = "";
    parseFloat(result.value);
    if (result.value === "0") {
      result.value = "error";
    } else {
      result.value = (result.value / 100).toString();
    }
  });
  button5.addEventListener("click", () => {
    dotClicked();
  });
  button6.addEventListener("click", () => {
    minusButton();
  });
}
