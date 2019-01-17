var str = prompt("Введите слово или фразу", "");
var newStr = str.split(" ").join("").split("").join("");
var reverseStr = str.split(" ").join("").split("").reverse().join("");

function isPalindrome(newStr, reverseStr) {
    if (newStr == reverseStr) {
        alert (newStr + "\n" + reverseStr + "\n" + "Да, палиндром!");
    } else {
        alert (newStr + "\n" + reverseStr + "\n" + "Не является палиндромом((");
    }
}

isPalindrome(newStr, reverseStr);