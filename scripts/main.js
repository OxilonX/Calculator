import {
  result,
  numberButtons,
  operator,
  equalButton,
  eraseAllButton,
  inverseButton,
  percentageButton,
  dotButton,
  negativeButton,
  displayNumbers,
  keyDisplayNumbers,
  arithmeticOperationsButtons,
  arithmeticOperaitions,
  keyPressedByUser,
  buttonsOnThePage,
} from "./app.js";
document.addEventListener("DOMContentLoaded", function () {
  numberButtons.forEach(displayNumbers);
  keyDisplayNumbers();
  operator.forEach(arithmeticOperationsButtons);
  arithmeticOperaitions();
  buttonsOnThePage(
    equalButton,
    eraseAllButton,
    inverseButton,
    percentageButton,
    dotButton,
    negativeButton
  );
  keyPressedByUser();
});
