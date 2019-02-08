function Cat(name) {
  this.name = name;
}
Cat.prototype.species = "Cat";
Cat.prototype.talk = function() {
  alert("Meow");
};
var tom = new Cat("Tom");
var jerry = new Cat("Jerry");
var tim = new Cat("Tim");

tom.talk();
