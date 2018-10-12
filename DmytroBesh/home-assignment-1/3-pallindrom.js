var pal = prompt("палиндром", "Пустите, летит суп")

function isPalindrome(str) {
    var strLen = str.length,
        str = str.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, ''); //в нижний регистр
        strReverse = str.split('').reverse().join(''); //Разбиваем строку посимвольно  и превращаем ее в массив с помощью split(''), потом применяем к нему метод reverse() и собираем все символы в строку с помощью join('')
    if (strReverse == str) {
    return 'Yes';
    } else {
    return 'No';
    }
}

test = isPalindrome(pal);

console.log(test);
document.write('Result: ' + test + '<br>Слово: ' + pal);