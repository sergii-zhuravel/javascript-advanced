// функциональное наследование. можно поменять на прототипное в файле HTML.
function Flyer () {
    this._fly = true;
    this._sail = false;
}

function Airplane (manufacturer) {
    Flyer.apply (this, arguments);
    this._manufacturer = manufacturer;
    this._flaps = false;
    this._gears = true;
    this.flapsOnOff = function () {this._flaps ? this._flaps = false : this._flaps = true};
    this.gearsOnOff = function () {this._gears ? this._gears = false : this._gears = true};
}

function Messerchmitt (model) {
    Airplane.apply (this, arguments);
    this._manufacturer = 'messerchmitt';
    this._model = model;
    this._weapon = true;
    this.toShoot = function () {this._weapon ? console.log('Ta-Ta-Ta-Ta...') : console.log ('No weapon')};
}


// ------------------------
// Задача 4.2
// ------------------------
// 1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
// 2) Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
// конструктора - new и задание прототипа через Function.prototype)







// var airbus = new Airplane ('airbus');
// for (var key in airbus) {
//     console.log (key + ' : ' + airbus[key])
// }

// var bf109g = new Messerchmitt ('bf109g');
// for (var key in bf109g) {
//     console.log (key + ' : ' + bf109g[key])
// }
