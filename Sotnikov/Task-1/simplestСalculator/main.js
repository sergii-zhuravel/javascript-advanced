function addition() {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    let result = number1 + number2;
    document.getElementById('result').innerHTML = result;
}

function subtraction() {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    let result = number1 - number2;
    document.getElementById('result').innerHTML = result;
}

function division() {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    let result = number1 / number2;
    document.getElementById('result').innerHTML = result;
}

function multiplication() {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    let result = number1 * number2;
    document.getElementById('result').innerHTML = result;
}