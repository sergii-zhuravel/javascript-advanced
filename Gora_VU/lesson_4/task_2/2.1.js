// 2.1
// Реализовать SimpleCalculator и AdvancedCalculator  (Задача 1.1)  
// с помощью F.prototype и создания обьектов с помощью конструктора
function SimpleCalculator() {
    this.read = function() {
        a = +prompt("Input 1st number: ");
        b = +prompt("Input 1st number: ");
        this.a = a;
        this.b = b;
    };
    this.sub = function() {
        return this.a - this.b;
    };
    this.sum = function() {
        return this.a + this.b;
    };
};
var obj1 = new SimpleCalculator();
obj1.read();
console.log("Object 1: ");
console.log("Sum: "+obj1.sum());
console.log("Subtraction: "+obj1.sub());

function AdvancedCalculator() {
    this.div = function() {
        return this.a / this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
};
AdvancedCalculator.prototype = obj1;
var obj2 = new AdvancedCalculator();
console.log("Object 2: ");
console.log("Sum: "+obj2.sum());
console.log("Multiplication: "+obj2.mul());
console.log("Subtraction: "+obj2.sub());
console.log("Division: "+obj2.div());

