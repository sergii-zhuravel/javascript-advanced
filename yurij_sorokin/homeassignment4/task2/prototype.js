function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
}

Animal.prototype.say = function(say) {
  console.log(say);
};

function Predator(type, legs) {
  Animal.call(this, type, legs);
  this.hunts = true;
}

Predator.prototype = Object.create(Animal.prototype);

var predator = new Predator("tiger", 4);

console.log(predator.say("roar"));

console.log(predator);
