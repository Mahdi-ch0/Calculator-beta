import {
    computation,
    previousOperandTextElement,
    currentOperandTextElement,
} from "./main";

export const computationNumber = function (): any {
    let computationResult: number = 0;
    const previous: number = Number(previousOperandTextElement.innerHTML);
    const current: number = Number(currentOperandTextElement.innerHTML);

    switch (computation) {
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

        case "%":
            if (previous && current) {
                computationResult = previous + current;
            } else {
            }
            break;
        default:
        return 'Non in percent';
    }
    return computationResult;
};



