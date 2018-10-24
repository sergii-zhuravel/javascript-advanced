// Задача 5.2
// ------------------------
// 1) Создать иерархию объектов из задания 4.2 с помощью классов ES6

class Bird {
    constructor(weight) {
        this.weight = weight;
    }
    eat(food){
        console.log('Eating '+food+'...');
    }
    walk(){
        console.log('Bird can walk');
    }
    canFly(){
        return undefined;
    }
}

class FlyingBird extends Bird{
    constructor(weight, flyingSpeed) {
        super(weight);
        this.flyingSpeed = flyingSpeed;
    }
    canFly() {
        return true;
    }
}

 class NonFlyingBird extends Bird {
     constructor(weight) {
         super(weight);
     }
     canFly() {
         return false;
     }
 }

class Parrot extends FlyingBird {
     constructor(weight, flyingSpeed){
     super(weight, flyingSpeed);
     this.knownWords = ['Hi', "I am", "funny", "parrot"];
 
     }
}

class Penguin extends NonFlyingBird{
    constructor(weight) {
        super(weight);
    }
    swim() {
        console.log('I\'m swimming in cold water and I like it so much:)');
    }
}

var parrot = new Parrot(2,10);
var penguin = new Penguin(2);

// example of parrot usage 
console.log("Parrot knows following words: "+parrot.knownWords);
console.log('Can parrots fly? -'+(parrot.canFly()?'Yes':'No'));
console.log("What is the flying speed of parrot? - "+parrot.flyingSpeed);
parrot.eat('carrot');

console.log('------------------------------------------------------------------')

// example of penguin usage
penguin.swim();
console.log('Can penguins fly? -'+(penguin.canFly()?'Yes':'No'));
penguin.eat('fish');
penguin.walk();

console.log('------------------------------------------------------------------')

console.log(parrot);
console.log(penguin);

