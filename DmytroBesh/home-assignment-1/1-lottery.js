var getnumber = prompt("Задай число, 0-9", "5");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
        
var mynumber = String.fromCharCode(getRandomInt(48, 57));


if (getnumber == mynumber) {
    document.write("You win");
}
else {
    document.write("You lost, look at the console");
}

console.log(mynumber);