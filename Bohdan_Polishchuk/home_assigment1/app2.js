// Task 2

function addNumber() {
    var num1, num2, result;
    num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById("out").innerHTML = result;
}

function subtractNumber() {
    var num1, num2, result;
    num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById("out").innerHTML = result;
}

function divideNumber() {
    var num1, num2, result;
    num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);

    result = num1 / num2;
    document.getElementById("out").innerHTML = result;
}

function multiplyNumber() {
    var num1, num2, result;
    num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById("out").innerHTML = result;
}
