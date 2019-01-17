var num = prompt("Загадай число от 1 до 10", "");
var random = Math.ceil(Math.random()*10);

window.onload = function guessNum(num, random) {
    if (num == random) {
        alert("Угадал");
    } else {
        alert("Повезет в следующий раз");
    }
}

guessNum(num, random);
