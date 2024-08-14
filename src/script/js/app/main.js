import { Navigation } from "./navigation.js";
import { Calculator } from "./output.js";
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const clearButton = document.querySelector('[data-clear]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const changeNavigation = new Navigation();
const calculator = new Calculator(previousOperand, currentOperand);
const computation = calculator.operationElement;
const previousOperandTextElement = calculator.previousOperandTextElement;
const currentOperandTextElement = calculator.currentOperandTextElement;
menuIcon.addEventListener("click", () => changeNavigation.showNavigation());
closeIcon.addEventListener("click", () => changeNavigation.closeNavigation());
numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        calculator.appendNumber(number.innerHTML);
    });
});
operationButtons.forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.appendOperation(operation.innerHTML);
    });
});
clearButton.addEventListener('click', () => {
    calculator.clear();
});
allClearButton.addEventListener('click', () => {
    calculator.allClear();
});
equalsButton.addEventListener('click', () => {
});
export { computation, previousOperandTextElement, currentOperandTextElement };
