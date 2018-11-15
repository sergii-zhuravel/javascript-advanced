class Transport {
    constructor(weight) {
        this.weight = weight;
    }
    eat(fuel) {
        console.log('Заправляем ' + fuel);
    }
    driving(fast) {
        console.log('едит ' + fast);
    }
}

class Bike extends Transport{
    constructor(weight, driveSpeed) {
        super(weight)
        this.driveSpeed = driveSpeed;
    }
}

class Car extends Transport{
    constructor(weight, driveSpeed) {
        super(weight)
        this.driveSpeed = driveSpeed;
    }
}

var bike = new Bike(10,20);
var car = new Car(1000,110);

console.log("Средий вес велоипеда " +bike.weight + "кг. Скорость: "+bike.driveSpeed + ' км/год.');
console.log("Средий вес авто " +car.weight + "кг. Скорость: "+car.driveSpeed + ' км/год.');