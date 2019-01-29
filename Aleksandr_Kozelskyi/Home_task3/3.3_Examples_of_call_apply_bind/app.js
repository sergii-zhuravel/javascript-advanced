// call и apply позволяют нам вызывать функцию с нужным контекстом:
var user = {
    name: "Alex",
}
 
var displayName = function() {
    console.log(this.name);
}

displayName(); 
displayName.call(user);

////////////////////////////////////////////////////////////////////
var sum = function(a, b) {
    return a + b;
}

array = [2, 8];
console.log(sum(array)); 
console.log(sum.apply(null, array));

//call() и apply() применяется так же для заимствования методов, например,чтобы
//получить список переданных параметров в виде массива в задаче "PizzaMaker":
function makePizza() {
    var args = [].slice.call(arguments);
    console.log(args);
}
makePizza("Pepperoni", "Mushrooms", "Onions");

//метод bind() используется как для установки значения this, так и для каррирования функции:
function fullUserName(name, surname) {
    return name + " " + surname;
}

console.log(fullUserName("Alex", "Kotov"));

var onlyName = fullUserName.bind(null, name);
console.log(onlyName("Peter"))

