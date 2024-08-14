import { previousOperand, currentOperand } from "./main.js";

export class computationNumber {
    operationElement: null | string = null;
    secondOperation: string | null = null;
    appendOperation(operation: string): void {
        this.operationElement = operation;
        previousOperand.innerHTML = `${currentOperand.innerHTML} ${operation}`;
        this.secondOperation = currentOperand.innerHTML;
        currentOperand.innerHTML = '0';
    }

    computationOperation(): void {
        let computationResult: number | null = null;
        const previous: number = Number(this.secondOperation);
        const current: number = Number(currentOperand.innerHTML);

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
                } else {
                    alert("No percent operation number");
                }
                break;
            default:
                alert("Failure in computation");
        }

        previousOperand.innerHTML += ` ${currentOperand.innerHTML} =`

        currentOperand.innerHTML = String(computationResult);
    }
}
