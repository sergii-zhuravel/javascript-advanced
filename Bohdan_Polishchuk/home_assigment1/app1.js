// Task 1

var randomNumber = Math.floor(Math.random() * 10) + 1;
var inputUserNumber = parseInt(prompt("Enter a number from 1 to 10"));

if (randomNumber === inputUserNumber) {
    document.writeln("Congratulations!!! You guessed the number = ", inputUserNumber);
} else {document.writeln("Ups...Try next time...")};
