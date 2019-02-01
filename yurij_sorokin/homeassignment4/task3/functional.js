function Animal(type, color, say) {
  this.type = type;
  this.color = color;
  this.say = function(say) {
    console.log(say);
  };
}

function Pet(type, color, say, name, breed) {
  Animal.apply(this, arguments);
  this.name = name;
  this.breed = breed;
}

var myDog = new Pet("dog", "black", "spike", "pitbul", true, true);

console.log(myDog.say("bark"));

console.log(myDog);
