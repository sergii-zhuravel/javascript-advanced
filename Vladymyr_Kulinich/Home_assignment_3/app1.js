function Pizza(topping, bortik, size) {
  this.topping = topping;
  this.bortik = bortik;
  this.size = size;
  this.makepizza = function() {
    return " Pizza with " + this.bortik + " and with toppings " + this.topping;
  };
  this.packpizza = function() {
    return "Pizza packed in " + this.size + " box";
  };
}
var pizzaMargarita = new Pizza("ketchup", "cheese bortik", "32'");
var pizzaCheese = new Pizza("mayonez", "big cheese bortik", "48'");
document.writeln(
  pizzaMargarita.makepizza() + " " + pizzaMargarita.packpizza() + ". "
);
document.writeln(
  pizzaCheese.makepizza() + " " + pizzaCheese.packpizza() + " ."
);
