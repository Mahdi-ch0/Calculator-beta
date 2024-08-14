import { Navigation } from "./navigation.js";
import { Calculator } from "./output.js";
import { computationNumber } from "./computation.js";

 const menuIcon = document.querySelector(".menu-icon") as HTMLButtonElement;
 const closeIcon = document.querySelector(".close-icon") as HTMLButtonElement;
const numberButtons =
    document.querySelectorAll<HTMLButtonElement>("[data-number]");
const operationButtons =
    document.querySelectorAll<HTMLButtonElement>("[data-operation]");
const allClearButton = document.querySelector(
    "[data-all-clear]"
) as HTMLButtonElement;
const clearButton = document.querySelector("[data-clear]") as HTMLButtonElement;
const equalsButton = document.querySelector(
    "[data-equals]"
) as HTMLButtonElement;
const previousOperand = document.querySelector(
    "[data-previous-operand]"
) as HTMLDivElement;
const currentOperand = document.querySelector(
    "[data-current-operand]"
) as HTMLDivElement;

const changeNavigation = new Navigation();
const calculator = new Calculator(previousOperand, currentOperand);
const computation = new computationNumber();

menuIcon.addEventListener("click", (): void => {
    changeNavigation.showNavigation();
    console.log("pass");
});
closeIcon.addEventListener("click", (): void => {
    changeNavigation.closeNavigation();
});

numberButtons.forEach((number) => {
    number.addEventListener("click", () => {
        calculator.appendNumber(number.innerHTML);
    });
});
operationButtons.forEach((operation) => {
    operation.addEventListener("click", () => {
        computation.appendOperation(operation.innerHTML);
    });
});
clearButton.addEventListener("click", () => {
    calculator.clear();
});
allClearButton.addEventListener("click", () => {
    calculator.allClear();
});
equalsButton.addEventListener("click", () => {
    computation.computationOperation();
});

export { previousOperand, currentOperand};
