class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
  }

  say(say) {
    console.log(this.name + " " + say);
  }

  hasHair() {
    console.log(this.name + " has hair");
  }
}

class Tiger extends Animal {
  constructor(name) {
    super(name);
  }
  hasHair() {
    super.hasHair();
    console.log(this.name + " " + "has stripes");
  }
}

let animal = new Animal("animal");
console.log(animal);
animal.hasHair();

let tiger = new Tiger("tiger");
console.log(tiger);
tiger.say("roars");
tiger.hasHair();
