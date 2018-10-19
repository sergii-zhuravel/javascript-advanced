// Задача 3.1
// Реализовать SimpleCalculator и AdvancedCalculator (Задача 1.1)  с помощью классов ES6
class SimpleCalc {
    constructor () {
        this.a = +prompt('Input first number: ');
        this.b = +prompt('Input 2nd number: ');
    }
    sum () {
        return this.a + this.b;
    }
    sub () {
        return this.a - this.b;
    }
}
var calc1 = new SimpleCalc();
class AdvancedCalc extends SimpleCalc{
    mul () {
        return this.a * this.b;
    }
    div () {
        return this.a / this.b;
    }
}
var calc2 = new AdvancedCalc();
console.log(calc1.sum());
console.log(calc2.sum());
console.log(calc2.div());
