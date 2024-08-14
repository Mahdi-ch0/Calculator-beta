import { previousOperand, currentOperand } from "./main.js";
export class computationNumber {
    constructor() {
        this.operationElement = null;
        this.secondOperation = null;
    }
    appendOperation(operation) {
        this.operationElement = operation;
        previousOperand.innerHTML = `${currentOperand.innerHTML} ${operation}`;
        this.secondOperation = currentOperand.innerHTML;
        currentOperand.innerHTML = '0';
    }
    computationOperation() {
        let computationResult = null;
        const previous = Number(this.secondOperation);
        const current = Number(currentOperand.innerHTML);
        switch (this.operationElement) {
            case "+":
                computationResult = previous + current;
                break;
            case "-":
                computationResult = previous - current;
                break;
            case "×":
                computationResult = previous * current;
                break;
            case "+":
                computationResult = previous + current;
                break;
            case '÷':
                computationResult = previous / current;
                break;
            case "%":
                if (previous && current) {
                    computationResult = previous + current;
                }
                else {
                    alert("No percent operation number");
                }
                break;
            default:
                alert("Failure in computation");
        }
        previousOperand.innerHTML += ` ${currentOperand.innerHTML} =`;
        currentOperand.innerHTML = String(computationResult);
    }
}
