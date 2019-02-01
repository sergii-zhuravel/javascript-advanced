class Rectangle {
  // only one
  // super()
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Hoisting
// var p = new Rectangle(10,20);
// p
// class Rectangle2 {}


// // не bменований
// var Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };


// // methods
// class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
  
//   get area() {
//     return this.calcArea();
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Polygon(10, 10);
// square

// console.log();



// // // static methods


// // inherritance
// class Animal { 
//   constructor(name) {
//     this.name = name;
//   }
  
//   speak() {
//     console.log(this.name + ' makes a noise.');
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(this.name + ' barks.');
//   }
// }

// var bim = new Dog('Bim');
// console.log(bim instanceof Animal)


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
d
console.log(d.speak());