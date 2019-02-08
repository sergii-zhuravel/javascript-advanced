//without parameters
class Car {
  constructor() {
    this.wheel = "4";
    this.say = "Bi-bi";
  }
  saySay() {
    console.log(this.say);
  }
}

var myCar = new Car();
console.log(myCar.say);
console.log(myCar.wheel);

//with parameters
class Ship {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

var myCruiser = new Ship("Cruiser", "Peter the Great");
console.log(myCruiser.type);
console.log(myCruiser.name);
