function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
}

function Animals(run, eat, age) {
  this.runType = run;
  this.eatType = last;
  this.age = age;
  this.action = function() {
    return this.run + " " + this.eat;
  };
}

function Car(color, model, engine) {
  this.color = color;
  this.model = model;
  this.engine = engine;
  this.name = function() {
    return this.color + " " + this.model;
  };
}

function Robots(model, type, humanity) {
  this.model = model;
  this.humanity = humanity;
  this.type = function() {
    return this.model + " " + this.humanity;
  };
}

function Birds(wings, fly, type) {
  this.wings = wings;
  this.fly = fly;
  this.type = function() {
    return "У меня есть " + this.wings + " крыла и я могу " + this.fly + " !";
  };
}
