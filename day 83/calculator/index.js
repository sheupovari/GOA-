function clearResult() {
    document.getElementById('result').value = '';
}

function deleteDigit() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function addDigit(digit) {
    document.getElementById('result').value += digit;
}

function addOperator(operator) {
    let result = document.getElementById('result').value;
    if (result) {
        document.getElementById('result').value += operator;
    }
}

function addDecimal() {
    let result = document.getElementById('result').value;
    if (!result.includes('.')) {
        document.getElementById('result').value += '.';
    }
}

function calculate() {
    let result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}