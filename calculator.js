let currentInput = '';
let currentOperation = null;
let previousInput = null;

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    previousInput = null;
    updateDisplay();
}

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput !== '') {
        if (previousInput !== null) {
            calculateResult();
        }
        currentOperation = operation;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculateResult() {
    if (currentInput !== '' && previousInput !== null && currentOperation !== null) {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (currentOperation) {
            case '+':
                currentInput = (num1 + num2).toString();
                break;
            case '-':
                currentInput = (num1 - num2).toString();
                break;
            case '*':
                currentInput = (num1 * num2).toString();
                break;
            case '/':
                currentInput = (num1 / num2).toString();
                break;
        }

        currentOperation = null;
        previousInput = null;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}