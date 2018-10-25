// Задача 4.2
// ------------------------
// 
// 2) Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
// конструктора - new и задание прототипа через Function.prototype)

function Bird(weight){
    this.weight = weight;
}
Bird.prototype.eat = function(food) {
    console.log('Eating '+food+'...');
};
Bird.prototype.walk = function() {
    console.log('Bird can walk');
 }; 
Bird.prototype.canFly = function() {return undefined;};


function FlyingBird(weight, flyingSpeed){
    Bird.call(this, weight);
    this.flyingSpeed = flyingSpeed;
}
FlyingBird.prototype = Object.create(Bird.prototype);
FlyingBird.prototype.constructor = FlyingBird;
FlyingBird.prototype.canFly = function() {return true;};

function NonFlyingBird(weight){
    Bird.call(this, weight);
}
NonFlyingBird.prototype = Object.create(Bird.prototype);
NonFlyingBird.prototype.constructor = NonFlyingBird;
NonFlyingBird.prototype.canFly = function() {return false;};

function Parrot(weight, flyingSpeed){
    FlyingBird.call(this, weight, flyingSpeed);
    this.knownWords = ['Hi', "I am", "funny", "parrot"];
}
Parrot.prototype = Object.create(FlyingBird.prototype);
Parrot.prototype.constructor = Parrot;

function Penguin(weight) {
    NonFlyingBird.call(this, weight);
}
Penguin.prototype = Object.create(NonFlyingBird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.swim = function() {
    console.log('I\'m swimming in cold water and I like it so much:)');
};

var parrot = new Parrot(3,15);
var penguin = new Penguin(5);

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
