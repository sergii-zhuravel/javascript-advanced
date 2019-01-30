//Pizza
// - toppings []
// - bortik Boolean
// - size String
// - makePizza (return a string that lists all Pizza fields in format - "{size} Pizza with {bortik} and with toppings {toppings})
// - packPizza (return a string like "Pizza packed into {size}box)

//Toppings: "Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra cheese", "Black olives", "Green peppers", "Pineapple", "Spinach"

var pizza = {
  toppings: [],
  bortik: true,
  size: "40cm",
  makePizza: function() {
    var args = this.toppings.slice.call(arguments);
    return (this.size + " pizza " + (this.bortik ? "with bortik " : "without bortik ") + "and with toppings: " + args.join(", ") + ".");
  },
  packPizza: function() {
    return ("Pizza packed into " + this.size + " box.");
  }
};

console.log(pizza.makePizza("Pepperoni", "Mushrooms"));
console.log(pizza.makePizza("Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra cheese"));
console.log(pizza.makePizza("Black olives"));

console.log(pizza.packPizza());
