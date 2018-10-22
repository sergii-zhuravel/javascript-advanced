// Задача 4.1
//Задача 4.2
//1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
//2) Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
//конструктора - new и задание прототипа через Function.prototype)
//1
var HumanProto = {
    constructor: function (name) {
        this.name = name;
        return this;
    },
    rib: true,
    printMsg: function (name) {
        console.log( "Hi, my name is " + this.name );
    }
};
var adam = Object.create (HumanProto).constructor("Adam");
console.log(adam.name);
console.log(adam.rib);
console.log(adam.printMsg());
var eva = Object.create(adam).constructor("Eva");
eva.hasApple = true;
console.log(eva.name);
console.log(eva.rib);
console.log(eva.printMsg());
console.log(eva.hasApple);
HumanProto.breakTheCommandment = function() {
    console.log("Apple is eaten");
};
adam.breakTheCommandment();
eva.breakTheCommandment();
var child = Object.create(eva).constructor("Child");
child.hasApple = false;
console.log(child.name);
console.log(child.rib);
child.printMsg();
console.log(child.hasApple);
child.breakTheCommandment = function () {
    return false
};
console.log(child.breakTheCommandment());
// 2
var HumanProto = function(name) {
    this.rib = true;
    this.name = name;
    this.printMsg = function() {
        console.log( "Hi, my name is "+this.name );
    };
};

var adam = new HumanProto ("Adam");
console.log( adam.rib );
console.log( adam.name );
adam.printMsg();

var WomanProto = function() {
    HumanProto.apply(this,arguments);
    this.apple = true;
};
HumanProto.prototype.breakTheCommandment = function() {
    console.log("Apple is eaten");
}
WomanProto.prototype = Object.create(HumanProto.prototype);
WomanProto.prototype.constructor = WomanProto;

var eva = new WomanProto ("Eva");
console.log(eva.name);
console.log(eva.rib);
console.log(eva.apple);
eva.printMsg();

adam.breakTheCommandment();
eva.breakTheCommandment();

function ChildProto () {
    WomanProto.apply(this,arguments);
};
ChildProto.prototype = Object.create(WomanProto.prototype);
ChildProto.prototype.constructor = ChildProto;
ChildProto.prototype.breakTheCommandment = function () {
    return false;
};
var child = new ChildProto ("Child");
console.log(child.apple);
console.log(child.rib);
child.breakTheCommandment();
