// ------------------------
// Задача 5.2
// ------------------------
// 1) Создать иерархию объектов из задания 4.2 с помощью классов ES6



class Flyer {
    constructor() {
        this.fly = true;
        this.sail = false;
    }
}
//var myFlyer = new Flyer();
//console.log (myFlyer);


class Airplane extends Flyer {
    constructor(manufacturer) {
        super();
        this.manufacturer = manufacturer;
        this.flaps = false;
        this.gears = true;
    }
    flapsOnOff() {this.flaps ? this.flaps = false : this.flaps = true};
    gearsOnOff() {this.gears ? this.gears = false : this.gears = true};
}
// var myAirplane = new Airplane ('airbus');
// console.log(myAirplane);
// myAirplane.flapsOnOff();
// myAirplane.gearsOnOff();
// console.log(myAirplane);


class Messerchmitt extends Airplane {
    constructor(model) {
        super();
        this.manufacturer = 'messerchmitt';
        this.model = model;
        this.weapon = true;
    }
    toShoot() {this.weapon ? console.log('Ta-Ta-Ta-Ta...') : console.log ('No weapon')}
}
// var myMesserchmitt = new Messerchmitt ('bf109g');
// console.log(myMesserchmitt);
// myMesserchmitt.flapsOnOff();
// myMesserchmitt.gearsOnOff();
// myMesserchmitt.toShoot();
// console.log(myMesserchmitt);

