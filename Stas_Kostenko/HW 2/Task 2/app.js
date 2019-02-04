function CarWithManulTransmission(wheels, color) {
  this.wheels = wheels || 4;
  this.color = color || "white";
  this.engineOn = false;
  this.transmission = "p";
  this.switchEngine = function() {
    if (this.engineOn && (this.transmission == 'p')) {
      console.log("Turning engine off");
      this.engineOn = false;
    } else {
      console.log("Turning engine on");
      this.engineOn = true;
    }
  };
  this.drive = function() {
    if (this.engineOn == false) {
      this.switchEngine();
    }
    if (this.transmission == "p") {
      this.transmission = "d";
    } else {
      this.transmission = "p";
    }
    console.log(
      "I'm a " +
        this.color +
        " car " +
        (this.transmission == "p" ? " I'm driving" : " I'm parking")
    );
  };
}

ford = new CarWithManulTransmission(4, "blue");

ford.drive();

mazda = new CarWithManulTransmission(4, "red");
mazda.engineOn = true;
console.log(mazda.engineOn)
mazda.transmission = "p";
mazda.switchEngine();
console.log(mazda.engineOn)
mazda.drive();
