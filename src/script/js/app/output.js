import { computationNumber } from "./computatino";
export class Calculator {
    constructor(previous, current) {
        this.operationElement = null;
        this.previousOperandTextElement = previous;
        this.currentOperandTextElement = current;
        this.allClear();
    }
    allClear() {
        this.previousOperandTextElement.innerHTML = " ";
        this.currentOperandTextElement.innerHTML = "0";
    }
    clear() {
        if (this.currentOperandTextElement.innerText !== "0") {
            this.currentOperandTextElement.innerHTML =
                this.currentOperandTextElement.innerText.slice(0, -1);
        }
        if (this.currentOperandTextElement.innerHTML === "") {
            this.currentOperandTextElement.innerHTML = "0";
        }
    }
    appendNumber(number) {
        if (this.currentOperandTextElement.innerHTML === "0" &&
            number === ".") {
            this.currentOperandTextElement.innerHTML =
                this.currentOperandTextElement.innerHTML;
        }
        else {
            if (this.currentOperandTextElement.innerHTML === "0") {
                this.currentOperandTextElement.innerHTML = "";
            }
            if (this.currentOperandTextElement.innerHTML.length <= 6) {
                this.currentOperandTextElement.innerHTML += number;
            }
        }
    }
    appendOperation(operation) {
        if (this.previousOperandTextElement.innerHTML !== "0") {
            this.operationElement += operation;
            this.previousOperandTextElement.innerHTML =
                this.currentOperandTextElement.innerHTML;
            this.currentOperandTextElement.innerHTML = "0";
        }
    }
    appendEquals() {
        if (this.previousOperandTextElement.innerHTML !== ' ') {
            const resultNumber = computationNumber();
            this.currentOperandTextElement.innerHTML = String(resultNumber);
            this.previousOperandTextElement.innerHTML = ' ';
        }
    }
}
