// Task-3.1

var pizza = {
    toppings: ['Mozzarella','Bacon','Ham','Mushrooms'],
    bortik: true,
    size: '30',
    makePizza: function(){
        var pizzaEdge = this.bortik ? 'standard edges' : 'filled edges'
        return 'Pizza fields in format - ' + this.size + '. Pizza with ' + pizzaEdge + ' and with toppings: ' + this.toppings
    },
    packPizza: function(){
        return 'Pizza packed into ' + this.size + ' box'
    }

}

console.log(pizza.makePizza());
console.log(pizza.packPizza());


// Task-3.2

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}
  
function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}
  
function applyAll(func){
    var newArr = [].slice.call(arguments, 1);
    return func.apply( null, newArr);
}
  console.log(applyAll(Math.min, 2, -2, 3) );
  console.log(applyAll(Math.max, 2, -2, 3) );
  console.log(applyAll(sum, 1, 2, 3) );
  console.log(applyAll(mul, 2, 3, 4) );

  // Task-3.3

var car = {
    carBrand: 'Mercedes',
    carModel: 'Gelandewagen G-63 AMG'
}

function carName(text) {
    console.log(this.carBrand + " " + this.carModel + " " + text);
}

carName.call(car,'cool car');
carName.apply(car,['cool car']);

function func() {
    console.log(this);
}
  
var a = func.bind("some text");
a();