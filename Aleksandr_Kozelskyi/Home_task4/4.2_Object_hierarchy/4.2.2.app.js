function Animal(name) {
  this.name = name;
  this.gender = "male";
  this.color = "black";
  this.wild = false;
}

Animal.prototype.isWild = function() {
  return this.name + (this.wild ? " is a wild animal." : " is a pet.");
};

function Predator(name) {
  Animal.apply(this, arguments);
  this.likesMeat = true;
}

Predator.prototype = Object.create(Animal.prototype);

function Cat(name) {
  Predator.apply(this, arguments);
  this.say = "myau";
}

Cat.prototype = Object.create(Predator.prototype);

Cat.prototype.likesFood = function(food) {
  return (
    "This is a cat " + this.name +
    ", it's gender is " + this.gender +
    ", it's wool is " + this.color +
    ". He likes say " + "'" + this.say + "'," +
    (this.likesMeat ? " likes to eat meat " : " don't likes to eat meat ") +
    "and likes drinks " + food + "."
  );
};

var myCat = new Cat("Murchik");
console.log(myCat.name);
console.log(myCat.isWild());
console.log(myCat.say);
console.log(myCat.likesFood("milk"));
