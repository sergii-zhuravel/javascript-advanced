let number = Math.floor(10*Math.random()) + 1
let cnt = 2

document.getElementById('check').onclick = function () {
    if (cnt > 0) {
        let usernum = document.getElementById('num').value
        usernum = parseInt(usernum)
        let result = document.getElementById('result')

        if (usernum == number) {
            alert ('Угадал!')
            location.reload()
        }
        else if (usernum > number) {
            result.innerHTML = 'Много'
        }
        else if (usernum < number) {
            result.innerHTML = 'Мало'
        }
        document.getElementById('cnt').innerHTML = 'Попыток: ' + cnt
        cnt = cnt - 1
    }
    else {
        alert ('Повезет в следующий раз')
        location.reload()
    }
}
