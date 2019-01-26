// 1.Задача 3.1
// Создать объект с 3 свойствами и 2мя методами которые работают с this

console.log("Задача 3.1");

var pizza = {
  toppings: ['chicken', 'sausages', 'tomate'],
  bortik: true,
  size: 30,
  makePizza: function () {
    return console.log(this.size + " Pizza with bortik " + this.bortik + " and with toppings " + this.toppings);
  },
  packPizza: function () {
    return console.log("Pizza packed into " + this.size + " box");
  }
};

pizza.makePizza();
pizza.packPizza();

// Подумайте и предложите как можно улучшить модель/абстракцию
console.log('\n');
console.log("1.1. Улучшение:")


function Pizza(size, bortik) {
  this.toppings = [].slice.call(arguments, 2);
  this.bortik = bortik;
  this.size = size;
};

Pizza.prototype.makePizza = function () {
  return console.log(this.size + "cm Pizza with bortik-" + this.bortik + " and with toppings: " + this.toppings + ".");
};

Pizza.prototype.packPizza = function () {
  return console.log("Pizza packed into " + this.size + " box");
};

var pizzaOrder0001 = new Pizza(30, true, 'chicken', 'sausages', 'tomate', 'champignon');
var pizzaOrder0002 = new Pizza(20, false, 'sausages', 'tomate', 'cheese');

pizzaOrder0001.makePizza();
pizzaOrder0001.packPizza();
console.log('\n');
pizzaOrder0002.makePizza();
pizzaOrder0002.packPizza();