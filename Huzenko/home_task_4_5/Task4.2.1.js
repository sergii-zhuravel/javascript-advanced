// Задача 4.2
// ------------------------
// 1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)


var bird = {
    weight: 5,
    eat: function(food) {
        console.log('Eating '+food+'...');
    },
    walk: function() {
       console.log('Bird can walk');
    }, 
    canFly: function() {return undefined;}
};

var flyingBird = {
    flyingSpeed: 15, 
    canFly:function() {
        return true;
    }
};
var parrot = {
    knownWords: ['Hi', "I am", "funny", "parrot"]
};

var nonFlyingBird = {
    canFly:function(){return false;}
};
var penguin = {
    swim: function() {
        console.log('I\'m swimming in cold water and I like it so much:)');
    }
};

// Bird <- FlyingBird <- Parrot
flyingBird.__proto__ = bird;
parrot.__proto__ = flyingBird;
// Bird <- NonFlyingBird <- Penguin 
nonFlyingBird.__proto__ = bird;
penguin.__proto__ = nonFlyingBird;

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
