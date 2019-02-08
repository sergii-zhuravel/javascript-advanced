// прототипное наследование. можно поменять на функциональное в файле HTML.
var flyer = {
    fly: true,
    sail: false,
}


function Airplane (manufacturer) {
    this.manufacturer = manufacturer;
    this.flaps = false;
    this.gears = true;
}
Airplane.prototype = flyer;
Airplane.prototype.flapsOnOff = function () {this.flaps ? this.flaps = false : this.flaps = true};
Airplane.prototype.gearsOnOff = function () {this.gears ? this.gears = false : this.gears = true};


function Messerchmitt (model) {
    this.manufacturer = 'messerchmitt';
    this.model = model;
    this.flaps = false;
    this.gears = true;
    this.weapon = true;
}
Messerchmitt.prototype = Object.create (Airplane.prototype);
Messerchmitt.prototype.toShoot = function () {this.weapon ? console.log('Ta-Ta-Ta-Ta...') : console.log ('No weapon')};


// ------------------------
// Задача 4.2
// ------------------------
// 1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
// 2) Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
// конструктора - new и задание прототипа через Function.prototype)







// var airbus = new Airplane ('airbus');
// console.log (airbus);
// for (var key in airbus) {
//     console.log (key + ' : ' + airbus[key])
// }

// var bf109g = new Messerchmitt ('bf109g');
// console.log (bf109g);
// for (var key in bf109g) {
//     console.log (key + ' : ' + bf109g[key])
// }

//console.log (Object.getOwnPropertyNames(Airplane.prototype))
//console.log (Object.getOwnPropertyNames(Messerchmitt.prototype))


// ------------------------
// Задача 4.2
// ------------------------
// 1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
// 2) Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
// конструктора - new и задание прототипа через Function.prototype)
