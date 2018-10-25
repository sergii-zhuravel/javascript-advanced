// ------------------------
// Задача 3.1
// ------------------------
// Создать объект с 3 свойствами и 2мя методами которые работают с this

// Pizza
//  - toppings []
//  - bortik Boolean
//  - size String
//  - makePizza (return a string that lists all Pizza fields in format - "{size} Pizza with {bortik} and with toppings {toppings})
//  - packPizza (return a string like "Pizza packed into {size}box)

//  Подумайте и предложите как можно улучшить модель/абстракцию


var body = {
    name : "Alkash1",
    weight: "90",
    alcohol: "2",

    hello: function() {
        return "My name is " + this.name;
    },

    countAlcohol: function() {
        return "I'm weight " + this.weight + " .I drank " + this.alcohol + " bottles of vodka today" 
    }
}
console.log(body.hello());
console.log(body.countAlcohol());


function Pizza(toppings,bortic,size) {
    this.toppings = toppings,
    this.bortic = bortic ? "with bortic":"without bortic",
    this.size = size,
    this.makePizza = function () {
        return this.size + " pizza " + this.bortic + " and with toppings: " + toppings.join(", ");
    },
    this.packPizza = function() {
        return "Pizza packed into " + this.size+ " box"; 
    }
}

var pizza1 = new Pizza(["cheese", "chicken"], false, "large");
var pizza2 = new Pizza(["cheese", "pork"], true, "medium");

console.log(pizza1.makePizza())
console.log(pizza1.packPizza())
console.log(pizza2.makePizza())
console.log(pizza2.packPizza())