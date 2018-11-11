// Task-4.1
function makeAdder(a) {
    return function(b) {
        return a+b;
    }
}
var add10 = makeAdder(10)
console.log(add10(25)) 
  
// Task-4.2.1
  
var objOne = {
    firstName: "Иван"
}

var objTwo = {
    lastName: "Иванович"
}

objTwo.__proto__ = objOne;

var objThree = {
    age: 35
}

objThree.__proto__ = objTwo;

console.log(objThree)
  
  
// Task-4.2.2  

function ObjectOne(){
    this.firstName = 'Иван'
}
function ObjectTwo(){
    this.lastName = 'Иванович'
}
function ObjectThree(){
    this.age = 35
}
var newObjectOne = new ObjectOne;
ObjectTwo.prototype = newObjectOne;
var newObjectTwo = new ObjectTwo; 
ObjectThree.prototype = newObjectTwo;
var newObjectThree = new ObjectThree;

console.log(newObjectThree)