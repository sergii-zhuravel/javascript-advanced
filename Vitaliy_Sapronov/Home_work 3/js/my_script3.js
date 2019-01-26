// Задача 3.3
// Привести пример использования привязки контекста с помощью call/apply/bind

console.log("Задача 3.3");
console.log("Bind:")
var toppings = {
  ingredient1: "chicken",
  ingredient2: "tomate",
  ingredient3: "cheese",
  ingredient4: "champignon",
  orderPizza: function () {
    console.log("Add topping : " + this.ingredient1 + ", " + this.ingredient2 + ", " + this.ingredient3);
  }
};

var toppingNew = toppings.orderPizza;
toppingNew();
toppingNew = toppings.orderPizza.bind(toppings);
toppingNew();

console.log('\n');
console.log("Call:")
function orderPizzaNew(a, b, c, d) {
  console.log("Add topping : " + this[a] + ", " + this[b] + ", " + this[c] + ", " + this[d]);
};
orderPizzaNew();
orderPizzaNew.call(toppings, "ingredient2", "ingredient1", "ingredient4", "ingredient3");

console.log('\n');
console.log("Apply:")
var arr = ["ingredient4", "ingredient3", "ingredient2", "ingredient1"];
orderPizzaNew();
orderPizzaNew.apply(toppings, arr);
