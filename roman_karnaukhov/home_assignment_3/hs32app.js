
// var pizza = {
//   toppings: ('cheese, bacon, tomatoes'),
//   bortik: false,
//   size: 'mid',
//   makePizza: function () {
//     return console.log(this.size + ' pizza with ' + (this.bortik ? 'bortik' : 'no bortik') + ' and with ' + this.toppings + ' toppings !')
//   },
//   packPizza: function () {
//     return console.log('Pizza packed into ' + this.size + ' box.')
//   },
// }

function applyAll (func, a, b, c) {
  //for (i = 1; i < arguments.length; i++) {}
  //var ff = func.call (a, b, c);
  //return ff;
}; 

//console.log (applyAll);
//console.log (applyAll (Math.max, 2, 3, 5));
applyAll (Math.max, 3, 6, 5, 8);

// ------------------------
// Задача 3.2
// ------------------------
// Написать функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.

// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

// Например:

// // Применить Math.max к аргументам 2, -2, 3
// console.log( applyAll(Math.max, 2, -2, 3) ); // 3

// // Применить Math.min к аргументам 2, -2, 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2
// Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:


// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//   return [].reduce.call(arguments, function(a, b) {
//     return a + b;
//   });
// }

// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//   return [].reduce.call(arguments, function(a, b) {
//     return a * b;
//   });
// }

// console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
// console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24

// ------------------------
// Задача 3.3
// ------------------------

// Привести пример использования привязки контекста с помощью call/apply/bind