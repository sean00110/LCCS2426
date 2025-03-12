function calculate() {
    const operand1 = document.getElementById('operand1');
    const operand2 = document.getElementById('operand2');
    const result = document.getElementById('result');
    const operation = document.getElementById('operation').value;

    // Validate inputs
    const num1 = parseFloat(operand1.value);
    const num2 = parseFloat(operand2.value);

    if (isNaN(num1) || isNaN(num2)) {
        operand1.classList.toggle('invalid', isNaN(num1));
        operand2.classList.toggle('invalid', isNaN(num2));
        result.value = 'Error: Invalid input';
        return;
    }

    operand1.classList.remove('invalid');
    operand2.classList.remove('invalid');

    let calculationResult;
    switch (operation) {
        case 'add':
            calculationResult = num1 + num2;
            break;
        case 'subtract':
            calculationResult = num1 - num2;
            break;
        case 'multiply':
            calculationResult = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result.value = 'Error: Division by zero';
                return;
            }
            calculationResult = num1 / num2;
            break;
        default:
            result.value = 'Error: Invalid operation';
            return;
    }

    result.value = calculationResult;
}
