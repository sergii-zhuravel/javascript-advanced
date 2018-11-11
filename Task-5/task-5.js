// Task-5.2

class Car {
    constructor() {
        this.modelName = "Ford Edge";
    }
}
 class AdvancedSettingsCar extends Car {
    constructor(color, radius) {
        super();
        this.colorCar = color;
        this.wheelRadius = radius;
    }
}
var brandCar = new Car();
var generalInformationCar = new AdvancedSettingsCar("black", "19");
console.log(generalInformationCar);

// Task-5.2

class One {
    constructor() {
        this.animale = 'dog';
    }
}
 class Two extends One {
    constructor() {
        super();
        this.dogBreed = 'rottweiler';
    }
}
 class Three extends Two {
    constructor() {
        super();
        this.age = '2 yaer';
    }
}

var objOne = new One;
var objTwo = new Two;
var objThree = new Three;
console.log(objThree);