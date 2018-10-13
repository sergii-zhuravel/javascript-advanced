// Объекты в JavaScript — динамические "контейнеры",
//  наполненные свойствами (называемыми собственными свойствами). 
//  Каждый объект содержит ссылку на свой объект-прототип. (__proto__)


var obj = {}

console.log(obj.__proto__)
console.log(obj.hasOwnProperty('toString'))

var bird = {
    eats: true
  };
  var sparrow = {
    jumps: true,
    flies: true
  };
  
  sparrow.__proto__ = bird;
  
  // в rabbit можно найти оба свойства
  print( sparrow.jumps ); // true
  print( sparrow.eats ); // true


  ///////
  function print(m) {console.log(m)}