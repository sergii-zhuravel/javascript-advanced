

function makeAdder (n) {
  return function (x) {return x += n}
}

var add7 = makeAdder(7);
console.log (add7(11));

var add12 = makeAdder(12);
console.log (add12(10));


// ------------------------
// Задача 4.1
// ------------------------
// Написать функцию makeAdder(n) которая получает целое число и возвращает функцию которая увеличивает переданный ей
// параметр на заданное заранее значение (использовать замыкание)
//
// Пример вызова функций:
// var add10 = makeAdder(10)
// console.log(add10(25)) // должно вывести 35
// ------------------------
