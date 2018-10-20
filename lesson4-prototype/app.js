// Объекты в JavaScript — динамические "контейнеры",
//  наполненные свойствами (называемыми собственными свойствами). 
//  Каждый объект содержит ссылку на свой объект-прототип. (__proto__)


var obj = {}

console.log(typeof obj.__proto__.__proto__)
console.log(typeof null)

// console.log(obj.hasOwnProperty('toString'))

var bird = {
    eats: true
  }

  var sparrow = {
    jumps: true,
    flies: true
  }

   sparrow.__proto__ = bird

  // в sparrow можно найти оба свойства
  console.log( sparrow.jumps)
  console.log( sparrow['I am sparrow'] )

  for (var key in sparrow) {
    if (sparrow.hasOwnProperty(key))
    console.log(key + " = " + sparrow[key])
  }

   console.log(Object.keys(sparrow))

 Object.create(null)
///////////////////////////////////////////////////////
// Методы для работы с proto

// В современных браузерах есть два дополнительных метода для работы с __proto__. 

// Чтение: Object.getPrototypeOf(obj)
//     Возвращает obj.__proto__ (кроме IE8-)
// Запись: Object.setPrototypeOf(obj, proto)
//     Устанавливает obj.__proto__ = proto (кроме IE10-).

// Кроме того, есть ещё один вспомогательный метод:

// Создание объекта с прототипом: Object.create(proto, descriptors)
//     Создаёт пустой объект с __proto__, равным первому аргументу (кроме IE8-),
//      второй необязательный аргумент может содержать дескрипторы свойств.
///////////////////////////////////////////////////////
// F.prototype

// В реальных проектах объекты обычно создаются функцией-конструктором через new.
//  Посмотрим, как указать прототип в этом случае.

// new Function()

// function TestFunction() {}

// Show contructor and prototype property

// var bird = {
//   eats: true
// };

// function Sparrow(name) {
//   this.name = name;
//   this.__proto__ = bird;
// }

// var sparrow = new Sparrow("Sparrow");

// print( sparrow.eats ); // true, из прототипа

// doesn't work in IE 10-

// var bird = {
//   eats: true
// }

// function Sparrow(name) {
//   this.name = name;
// }

// Sparrow.prototype = bird

// var sparrow = new Sparrow("Sparrow 1")

// console.log(sparrow.eats)