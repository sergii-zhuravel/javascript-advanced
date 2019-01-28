// Задача 4.1
// ------------------------
// Написать функцию makeAdder(n) которая получает целое число и возвращает функцию которая увеличивает переданный ей
// параметр на заданное заранее значение (использовать замыкание)

// Пример вызова функций:
// var add10 = makeAdder(10)
// console.log(add10(25)) // должно вывести 35
console.log("4.1");

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
};

var add10 = makeAdder(10);
console.log(add10(25)); // должно вывести 35

var add15 = makeAdder(15);
console.log(add15(2)); // должно вывести 17


// Задача 4.2
// ------------------------
// 1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
// 2) Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
// конструктора - new и задание прототипа через Function.prototype)
console.log("\n4.2.1");

var classMammal = {
  childrenEat: 'milk',
  hairCoat: 'wool',
  paws: 4
};

var squadPredatory = {
  areEating: 'meat'
};

var familyСanine = {
  tail: true,
  habitat: 'ground'
};

squadPredatory.__proto__ = classMammal;
familyСanine.__proto__ = squadPredatory;

console.log(familyСanine);


console.log("\n4.2.2");

function Class () {
  this.childrenEat = 'milk';
  this.hairCoat = 'wool';
  this.paws = 4
};

function Squad () {
  this.areEating = 'meat'
};

function Family () {
  this.tail = true;
  this.habitat = 'ground'
};

var mammal = new Class ();
var predatory = new Squad ();
var canine = new Family ();

canine.prototype = predatory;
predatory.prototype = mammal;

console.log(canine);




