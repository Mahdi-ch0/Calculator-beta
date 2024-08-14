import { computationNumber } from "./computation.js";

const result = new computationNumber();

export class Calculator {
    previousOperandTextElement: HTMLDivElement;
    currentOperandTextElement: HTMLDivElement;
    constructor(previous: HTMLDivElement, current: HTMLDivElement) {
        this.previousOperandTextElement = previous;
        this.currentOperandTextElement = current;
        this.allClear();
    }
    allClear(): void {
        this.previousOperandTextElement.innerHTML = " ";
        this.currentOperandTextElement.innerHTML = "0";
    }

    clear(): void {
        if (this.currentOperandTextElement.innerText !== "0") {
            this.currentOperandTextElement.innerHTML =
                this.currentOperandTextElement.innerText.slice(0, -1);
        }
        if (this.currentOperandTextElement.innerHTML === "") {
            this.currentOperandTextElement.innerHTML = "0";
        }
    }

    appendNumber(number: string): void {
        if (
            this.currentOperandTextElement.innerHTML === "0" &&
            number === "."
        ) {
            this.currentOperandTextElement.innerHTML =
                this.currentOperandTextElement.innerHTML;
        } else {
            if (this.currentOperandTextElement.innerHTML === "0") {
                this.currentOperandTextElement.innerHTML = "";
            }
            if (this.currentOperandTextElement.innerHTML.length <= 6) {
                this.currentOperandTextElement.innerHTML += number;
            }
        }
    }

}
