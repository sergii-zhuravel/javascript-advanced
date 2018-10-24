// Задача 5.2
//1) Создать иерархию объектов из задания 4.2 с помощью классов ES6
class HumanProto {
    constructor(name) {
        this.name = name;
        this.rib = true;
    }
    printMsg() {
        console.log ( "Hi, my name is " + this.name );
    }
    breakTheCommandment () {
        console.log ( "Apple is eaten" );
    }
};

var adam = new HumanProto("Adam");
console.log( adam.name );
console.log( adam.rib );
adam.printMsg();
adam.breakTheCommandment();

class WomanProto extends HumanProto {
    constructor(name) {
        super(name);
        this.apple = true;
    }
};

var eva = new WomanProto("Eva");
eva.breakTheCommandment();
console.log( eva.apple );
console.log( eva.name );
console.log( eva.rib);
eva.printMsg();

class ChildProto extends WomanProto {
    constructor (name) {
        super(name);
        this.apple = false;
    }
    breakTheCommandment() {
        return false;
    }
};
var child = new ChildProto("Child");
console.log (child.name);
console.log ( child.apple);
console.log( child.rib);
console.log ( child.breakTheCommandment() );