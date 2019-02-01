class Rectangle {
  // only one
  // super
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Hoisting
// const p = new Rectangle(); // ReferenceError

// class Rectangle {}


// не bменований
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};


// methods
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);

console.log(square.area);


// static methods


// inherritance
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}


// with classic

function Animal (name) {
  this.name = name;  
}
Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
  speak() {
    super.speak(); // !!!!
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();