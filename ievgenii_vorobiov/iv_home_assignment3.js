// ------------------------
// Задача 3.1
// ------------------------
// Создать объект с 3 свойствами и 2мя методами которые работают с this

// Pizza
//  - toppings []
//  - bortik Boolean
//  - size String
//  - makePizza (return a string that lists all Pizza fields in format - "{size} Pizza with {bortik} and with toppings {toppings})
//  - packPizza (return a string like "Pizza packed into {size}box)

//  Подумайте и предложите как можно улучшить модель/абстракцию

class Pizza {
  constructor(bortik, size) {
      this.toppings = [];
      this.bortik = false,
          this.size = size;
  }
};

Pizza.prototype.makePizza = () => {
  console.log(this.size + '- Pizza with selected bortik: ' + this.bortik + 'and with topings:' + this.toppings)
};
Pizza.prototype.packPizza = () => {
  console.log('Pizza packed into ' + this.size + ' box!')
};
Pizza.prototype.addToppings = function (toping) {
  if (!Array.isArray(toping)) {
      this.toppings.push(toping)
  } else {
      this.toppings.push(...toping)
  }
};
myPizza = new Pizza (true, 40);
arrToping = ['mush', 'tomato', 'pepper'];
myPizza.addToppings(arrToping);
myPizza.addToppings('cheese');



// ------------------------
// Задача 3.2
// ------------------------
// Написать функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.

// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

function applyAll (func, ...args){return func(...args)}
  // var result = 0;
  // if (func == 'sum'){
  //  for (let i = 1; i < arguments.length; i++){
  //      result += arguments[i];
  //  }
  // } else if (func == 'mult') {
  //  result = 1
  //  for (let i = 1; i < arguments.length; i++){
  //      result *= arguments[i];
  //  }
  // } else {
  //  result = 'Incorrect statment';
  // }
  // return result;
  // return result = func(args)
// }

function sum (){
  let result = 0
  for (let i = 0; i < arguments.length; i++){
      result += arguments[i];
  }
  return result;
}

function mul (){
  let result = 1
  for (let i = 0; i < arguments.length; i++){
      result *= arguments[i];
  }
  return result;
}

// Например:

// // Применить Math.max к аргументам 2, -2, 3
// console.log( applyAll(Math.max, 2, -2, 3) ); // 3

// // Применить Math.min к аргументам 2, -2, 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2

// Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:
// var numbers = [5, 6, 2, 3, 7];

// var max = Math.max.apply(null, numbers);

// console.log(max);
// expected output: 7

// var min = Math.min.apply(null, numbers);

// console.log(min);
// expected output: 2


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

console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24

// ------------------------
// Задача 3.3
// ------------------------
// Привести пример использования привязки контекста с помощью call/apply/bind
var car_1 = {
  brand: 'aka',
  color: "green",
  engine: "one stroke",
  price: 15000
}
var car_2 = {
  brand: 'bmw',
  color: "black",
  engine: "two stroke",
  price: 10000
}
var car_3 = {
  brand: 'volvo',
  color: "red",
  engine: "one stroke",
  price: 40000
}

function updateCar (newEngine, newColor, risePrice){
  this.engine = newEngine;
  this.color = newColor;
  this.price += risePrice;

  return 'The ' + this.brand + ' has the engine \'' + this.engine + '\', color: ' + this.color + ' and current price is: ' + this.price;
}

updateCar.call(car_1,"v8","white",15000) //"The aka has the engine 'v8', color: white and current price is: 30000"

updateCar.apply(car_3,["rotary","brown", 16500]) //"The volvo has the engine 'rotary', color: brown and current price is: 56500"

updateCar.bind(car_2) //"disel","blue",7000) //
