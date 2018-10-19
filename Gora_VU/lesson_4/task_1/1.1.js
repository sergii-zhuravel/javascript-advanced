var simpleCalculator = {
    read: function () {
        var a = +prompt('input a');
        var b = +prompt('input b');
        this.a = a;
        this.b = b;
    }
}
simpleCalculator.read();
console.log('a: '+simpleCalculator.a+',b: '+simpleCalculator.b);

simpleCalculator.sum = function() {
    console.log('The result of addition: '+(this.a+this.b));
}
simpleCalculator.sum();

simpleCalculator.sub = function() {
    console.log('The result of subtraction: '+(this.a-this.b));
}
simpleCalculator.sub();

var advancedCalculator = new Object();
advancedCalculator.__proto__ = simpleCalculator;

advancedCalculator.div = function() {
    console.log('The result of division: '+this.a/this.b);
}

advancedCalculator.div();
advancedCalculator.pow = function() {
    console.log('The result of multiplication: '+this.a*this.b);
}
advancedCalculator.pow();