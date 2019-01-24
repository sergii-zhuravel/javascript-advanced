function CarWithManulTransmission (wheels, color){
    this.wheels = wheels || 4;
    this.color = color || 'white';
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
      console.log("Im driving. I'm a " + this.color + " car");
    }
  }
  
  mazda = new CarWithManulTransmission(4, 'red');
  ford = new CarWithManulTransmission(4, 'blue');
  lexus = new CarWithManulTransmission(4, 'black');
  
  
   ford.drive();
  
  console.log( ford == mazda)

  function CarWithAutomaticTransmission (wheels, color){
    this.wheels = wheels || 4;
    this.color = color || 'white';
    this.engineOn = false;
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
      console.log("Im driving. I'm a " + this.color + " car");
    }
  }

  opel = new CarWithAutomaticTransmission(4, 'green');
  audi = new CarWithAutomaticTransmission(4, 'grey');
  BMW = new CarWithAutomaticTransmission(4, 'blue');

  console.log(opel);
  console.log(audi);
  console.log(BMW);