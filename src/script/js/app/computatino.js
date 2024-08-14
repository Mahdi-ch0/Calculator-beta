import { computation, previousOperandTextElement, currentOperandTextElement, } from "./main";
export const computationNumber = function () {
    let computationResult = 0;
    const previous = Number(previousOperandTextElement.innerHTML);
    const current = Number(currentOperandTextElement.innerHTML);
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
            }
            else {
            }
            break;
        default:
            return 'Non in percent';
    }
    return computationResult;
};
