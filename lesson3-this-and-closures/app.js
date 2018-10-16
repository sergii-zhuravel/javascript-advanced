// var myCar = new Object();
// myCar.make = 'ZAZ';
// myCar.model = 'Tavria';
// myCar.year = '1989';

//////////////////////////

// var myCar = {
//     make: 'ZAZ',
//     model: 'Tavria',
//     year: '1989'
// }

/////////////////////////

// var o = Object.create()

// function testFunction() {
//     console.log(this)
// }

// testFunction()

////////////////////////
// method borrowing

// function printArgs() {
//     arguments.join = [].join; // одолжили метод (1)
  
//     var argStr = arguments.join(':'); // (2)
  
//     console.log( argStr ); // сработает и выведет 1:2:3
//   }
  
//   printArgs(1, 2, 3);

// function printArgs() {
//     // вызов arr.slice() скопирует все элементы из this в новый массив
//     var args = [].slice.call(arguments);
//     console.log( args.join(', ') ); // args - полноценный массив из аргументов
//   }
  
//   printArgs('Ok', 'google', '!'); 

////////////////////////

// function showFullName() {
//     alert( this.firstName + " " + this.lastName );
//   }
  
//   var user = {
//     firstName: "Микита",
//     lastName: "Кожум'яка"
//   };
  
//   // функция вызовется с this=user
//   showFullName.call(user)

// После контекста в call можно передать аргументы для функции. Вот пример с более сложным вариантом showFullName, который конструирует ответ из указанных свойств объекта:
// var user = {
//     firstName: "Василий",
//     surname: "Петров",
//     patronym: "Иванович"
//   };
  
//   function showFullName(firstPart, lastPart) {
//     console.log( this[firstPart] + " " + this[lastPart] );
//   }
  
//   // f.call(контекст, аргумент1, аргумент2, ...)
//   showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
//   showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"


///// apply
var arr = [3, 5, 6, 1]
console.log(Math.max(null, arr))


