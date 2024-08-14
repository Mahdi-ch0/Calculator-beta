import { computationNumber } from "./computation.js";
const result = new computationNumber();
export class Calculator {
    constructor(previous, current) {
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
}
