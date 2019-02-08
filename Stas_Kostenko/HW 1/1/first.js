function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var randint = randomInteger(1, 10);

alert(randint);
var result = prompt('1 .. 10');
var number = +result;

if (number == randint)
  alert('Угадал');
else
  alert('Повезет в следующий раз');