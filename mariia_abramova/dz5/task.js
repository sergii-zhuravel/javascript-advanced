// ------------------------
// Задача 5.1
// ------------------------
// Создать 2 класса ES6 с конструкторами, один класс с конструктором без параметров и второй класс с конструктором с 2 параметрами

// ------------------------
// Задача 5.2
// ------------------------
// 1) Создать иерархию объектов из задания 4.2 с помощью классов ES6



class Pizza {
    constructor (toppings, bortic, size) {
    this.toppings = toppings,
    this.bortic = bortic ? "with bortic":"without bortic",
    this.size = size
    }
    make() {
        return this.size + " pizza " + this.bortic + " and with toppings: " + this.toppings.join(", ");
    }
   
}

class BlackBurger {
    constructor() {
    this.type = "black";
    this.size = "big"
    }
    make() {
        return this.size + " " + this.type + " burger" ;
    }
   
}

var pizza1 = new Pizza(["cheese", "chicken"], false, "large");
var burger = new BlackBurger();

console.log(pizza1.make())

console.log(burger.make())

// ------------------------
// Задача 5.2
// ------------------------
// 1) Создать иерархию объектов из задания 4.2 с помощью классов ES6

console.log("5.2");

class Mammal {
    constructor () {
    this.legs = 4
    }
}


class Dog extends Mammal{
    constructor () {
        super()
    this.bark = true;
    }
   voice() {
        return "Bark!Bark!"
    }

}


class Buldog extends Dog{
    constructor () {
        super()
        this.wrinkedFace = true
    }
}

var buldog2 = new Buldog();

console.log(buldog2.voice());
console.log(buldog2.legs);
console.log(buldog2.wrinkedFace);
