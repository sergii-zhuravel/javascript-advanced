var animal = {
  name: "Murchik",
  gender: "male",
  color: "black",
  wild: false,
  isWild: function() {
    return (this.wild ? " is a wild animal" : " is a pet");
  }
};

var predator = {
  likesMeat: true,
  __proto__: animal
};

var cat = {
  say: "myau",
  likesFood: function(food) {
    return (
      "This is a cat " + this.name +
      ", it's gender is " + this.gender +
      ", it's wool is " + this.color +
      ". He likes say " + "'" + this.say + "'," +
      (this.likesMeat ? " likes to eat meat " : " don't likes to eat meat ") +
      "and likes drinks " + food + "."
    );
  },
  __proto__: predator
};

console.log(cat.name);
console.log(cat.likesFood("milk"));
