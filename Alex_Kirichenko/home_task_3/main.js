/////////////3.1/////////////////

var pizza = {
  toppings: ["cheese"],
  bortik: this.bortik || false,
  size: "16",
  toppings: ["cheese"],
  hasBortik: function(bortik) {
    return bortik ? " bortik " : "out bortik ";
  },
  makePizza: function(size = this.size, bortik, toppings = this.toppings) {
    this.size = size;
    return (
      size +
      " Pizza with" +
      this.hasBortik(bortik) +
      "and with toppings: " +
      toppings
    );
  },
  packPizza: function() {
    return "Pizza packed into " + this.makePizza(arguments.size) + " box =)";
  }
};
pizza.makePizza("32", true, ["tobasko", "chicken"]);
pizza.packPizza();

// СДЕЛАЛ ОБЬЕКТ PIZZA БОЛЕЕ УНИВЕРСАЛЬНЫМ

/////////////3.2/////////////////

function applyAll(func, ...args) {
  return func(...args);
}

console.log(applyAll(Math.min, 3, 4, 1, 7));
console.log(applyAll(Math.min, 2, -2, 3));

function sum() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() {
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

console.log(applyAll(sum, 1, 2, 3));
console.log(applyAll(mul, 2, 3, 4));

////////////////3.3///////////////////

var myObj = {
  teacher: "Sergey"
};
function please() {
  console.log("And give me a good mark =)");
}

function sayHello() {
  console.log("Hello " + this.teacher + "! Look at this beautiful code");
}

var sayFunc = sayHello.bind(myObj);
sayFunc();

sayHello.call(myObj);

sayHello.apply(myObj, please());