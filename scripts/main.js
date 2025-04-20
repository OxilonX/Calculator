document.addEventListener("DOMContentLoaded", function () {
  const result = document.querySelector(".result");
  let hiddenResult = "";
  const numberButtons = document.querySelectorAll(".js-number");
  const allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operator = document.querySelectorAll(".operator");
  const equalButton = document.querySelector(".equal-sign");
  const eraseAllButton = document.querySelector(".js-c");
  const inverseButton = document.querySelector(".js-inv");
  /*Functions*/

  function displayNumbers(button) {
    button.addEventListener("click", function () {
      result.value += button.textContent;
    });
  }
  function showHiddenResult() {
    document.querySelector(".js-calcs").innerText = hiddenResult;
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
    if (
      result.value &&
      !["+", "/", "*", "-"].includes(result.value.slice(-1))
    ) {
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
  function keyPressedByUser() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "=" || event.key === "Enter") {
        hiddenResult += result.value;
        if (
          eval(hiddenResult) === Infinity ||
          eval(hiddenResult) === -Infinity
        ) {
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
      } else if (allNumbers.includes(event.key)) {
        result.value += event.key;
      } else if (event.key === "Backspace") {
        result.value = result.value.slice(0, -1);
      } else if (event.key === "c") {
        result.value = "";
        hiddenResult = "";
      }
    });
  }
  function buttonsOnThePage(button1, button2, button3) {
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
  }

  numberButtons.forEach(displayNumbers);
  keyDisplayNumbers();
  operator.forEach(arithmeticOperationsButtons);
  arithmeticOperaitions();
  buttonsOnThePage(equalButton, eraseAllButton, inverseButton);
  keyPressedByUser();
});
