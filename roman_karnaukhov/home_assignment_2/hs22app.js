function CarWithAutomaticTransmission (wheels, color){
     this.wheels = wheels || 4;
     this.color = color || 'transparent';
     this.engineOn = false;
     this.transmission = 'auto';
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
     }
   };

renault = new CarWithAutomaticTransmission(4, "black");
hindustan = new CarWithAutomaticTransmission(3, 'blue');


