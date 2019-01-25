function CarWithManulTransmission(model, wheels, color) {
  this.model = model || "BMW";
  this.wheels = wheels || 4;
  this.color = color || "white";
  this.engineOn = false;
  this.transmission = 0;
  this.setTransmission = function(n) {
    this.transmission = n;
  };
  this.switchEngine = function() {
    if (this.engineOn) {
      console.log("Turning engine off");
      this.engineOn = false;
    } else {
      console.log("Turning engine on");
      this.engineOn = true;
    }
  };
  this.drive = function() {
    this.switchEngine();
    this.setTransmission(1);
    this.model = prompt("Car model with manual transmission?", this.model);
    this.color = prompt("Car color?", this.color);
    console.log("Im driving on " + this.model + ". I'm a " + this.color + " car");
    var body = document.querySelector("body");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    p1.innerHTML = "Car model: " + this.model;
    p2.innerHTML = "Color: " + this.color;
    p3.innerHTML = "Wheels number: " + this.wheels;
    p4.innerHTML = "Transmission: manual";
    body.appendChild(p1);
    body.appendChild(p2);
    body.appendChild(p3);
    body.appendChild(p4);
  };
}

function CarWithAutomaticTransmission(model, wheels, color) {
  this.model = model || "BMW";
  this.wheels = wheels || 4;
  this.color = color || "white";
  this.engineOn = false;
  this.transmission = "auto";
  this.switchEngine = function() {
    if (this.engineOn) {
      console.log("Turning engine off");
      this.engineOn = false;
    } else {
      console.log("Turning engine on");
      this.engineOn = true;
    }
  };
  this.drive = function() {
    this.switchEngine();
    console.log("Im driving. I'm a " + this.color + " car");
    this.model = prompt("Car model with automatic transmission?", this.model);
    this.color = prompt("Car color?", this.color);
    console.log("Im driving on " + this.model + ". I'm a " + this.color + " car");
    var body = document.querySelector("body");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    p1.innerHTML = "Car model: " + this.model;
    p2.innerHTML = "Color: " + this.color;
    p3.innerHTML = "Wheels number: " + this.wheels;
    p4.innerHTML = "Transmission: auto";
    body.appendChild(p1);
    body.appendChild(p2);
    body.appendChild(p3);
    body.appendChild(p4);
  };
}

mazda = new CarWithManulTransmission("Mazda", 4, "red");
ford = new CarWithManulTransmission("Ford", 4, "blue");
audi = new CarWithAutomaticTransmission("Audi", 4, "grey");
lexus = new CarWithAutomaticTransmission("Lexus", 4, "grey");

mazda.drive();
lexus.drive();

carManual = new CarWithManulTransmission();
carAutomatic = new CarWithAutomaticTransmission();
