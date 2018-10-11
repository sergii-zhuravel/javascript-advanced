document.addEventListener('DOMContentLoaded', function() {
    var minValue = 0;
    var maxValue = 11;
    var randomNumber = getRandomInt(minValue, maxValue);

    function wheelFortune(randomNumber, min, max) {
        var userNumber = +prompt("Введіть рандомне число");

        if ((typeof(userNumber) === "number") && userNumber > min && userNumber < max) {

            if (randomNumber === userNumber) {
                alert("Угадал");
            } else {
                alert("Повезет в следующий раз");
            }
        } else {
            alert("Введите действительные числа от " + min + " до " + max + "");
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    wheelFortune(randomNumber, minValue, maxValue);
})
