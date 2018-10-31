function makeAdder(number) {
    return numberTwo => number + numberTwo;
}

add10 = makeAdder(10);
console.log(add10(25));

//////////////////////

var ObjectOne = {
    property: 'one'
}

var ObjectTwo = {
    property: 'two'
}

var ObjectThree = {
    property: 'three'
}

ObjectThree._proto_ = ObjectTwo;
ObjectTwo._proto_ = ObjectOne;

console.log(ObjectThree);

/////////////////////

function ObjectConstructor1() {
    this.property1 = 'concOne'
}

function ObjectConstructor2() {
    this.property2 = 'concTwo'
}

function ObjectConstructor3() {
    this.property3 = 'concThree'
}

value1 = new ObjectConstructor1();
ObjectConstructor2.prototype = value1;

value2 = new ObjectConstructor2();
ObjectConstructor3.prototype = value2;

value3 = new ObjectConstructor3();


console.log(value3);