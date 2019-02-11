class Animal {
  constructor() {
    this.name = "lion";
    this.legs = 4;
  }
}

let animal = new Animal();

console.log(animal);

class Animal_1 {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }
}

let newAnimal = new Animal_1("lion", 4);

console.log(newAnimal);
