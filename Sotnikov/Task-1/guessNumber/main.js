function getNumberFromUser() {
    var numberFromUser = prompt('Введите число от 1 до 10');
    checkValue(numberFromUser);
}

function checkValue() {
    var randomNumber = (Math.floor(Math.random() * 10) + 1);
    if (randomNumber == this) {
        alert('Угадал');
    } else {
        alert('Повезет в следующий раз');
    }
}

getNumberFromUser();