
function Pizza(size, bortik) {
  this.toppings = [];
  this.bortik = bortik || false;
  this.size = size;
};


Pizza.prototype.addToppings = function (ingredients) {
  if(Array.isArray(ingredients)) {
    for(var i = 0; i < ingredients.length; i++) {
      this.addToppings(ingredients[i]);
    }
  } else {
    this.toppings.push(ingredients);
  }  
};


Pizza.prototype.makePizza = function () {
  return this.bortik == true ? this.size + ' Pizza with bortik and with toppings: ' + this.toppings.toString() : this.size + ' Pizza without bortik and with toppings' + this.toppings.toString();
};

Pizza.prototype.pack = function () {
  return 'Pizza packed into a ' + this.size + ' box';
};


var myPizza = new Pizza('Big', true);
console.log(myPizza.addToppings(['cheese', 'mushrooms', 'olives', 'salami']));
console.log(myPizza.makePizza());
console.log(myPizza.pack());



