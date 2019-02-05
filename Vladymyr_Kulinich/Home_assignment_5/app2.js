class Cat {
  constructor(name) {
    this.name = name;
    this.species = "Cat";
    this.talk = function() {
      alert("Meow");
    };
  }
}
let tom = new Cat("Tom");
let jerry = new Cat("Jerry");
let tim = new Cat("Tim");

tom.talk();
