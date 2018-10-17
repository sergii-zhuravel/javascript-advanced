function numbers() {
    let randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
    let userNumber = +prompt('Введите число');
    if(randomNumber === userNumber) {
        alert('Вы угадали!!!');
    } else {
        alert('Вы не угадали, попробуйте еще раз после обновления страницы');
    }
}
function plus() {
    var a = document.getElementById('enteredNumberOne').value;
    var a = parseInt(a, 10);
    var b = document.getElementById('enteredNumberTwo').value;
    var b = parseInt(b, 10);
    console.log(a);
    let sum = a + b;
    document.getElementById('result').innerHTML = sum;
}

function minus() {
    var a = document.getElementById('enteredNumberOne').value;
    var a = parseInt(a, 10);
    var b = document.getElementById('enteredNumberTwo').value;
    var b = parseInt(b, 10);
    console.log(a);
    let sum = a - b;
    document.getElementById('result').innerHTML = sum;
}

function times() {
    var a = document.getElementById('enteredNumberOne').value;
    var a = parseInt(a, 10);
    var b = document.getElementById('enteredNumberTwo').value;
    var b = parseInt(b, 10);
    console.log(a);
    let sum = a * b;
    document.getElementById('result').innerHTML = sum;
}

function divide() {
    var a = document.getElementById('enteredNumberOne').value;
    var a = parseInt(a, 10);
    var b = document.getElementById('enteredNumberTwo').value;
    var b = parseInt(b, 10);
    console.log(a);
    let sum = a / b;
    document.getElementById('result').innerHTML = sum;
}

function reset() {
    document.getElementById('enteredNumberOne').value = "";
    document.getElementById('enteredNumberTwo').value = "";
    document.getElementById('result').innerHTML = "";
} 


    word=s=>s==[...s].reverse().join("");
    console.log(word('lol'));
    

//numbers();