// ------------------------
// Задача 4.1
// ------------------------
// Написать функцию makeAdder(n) которая получает целое число и возвращает функцию которая увеличивает переданный ей
// параметр на заданное заранее значение (использовать замыкание)

// Пример вызова функций:
// var add10 = makeAdder(10)
// console.log(add10(25)) // должно вывести 35



function makeAdder(n) {

    return function(m) {
        return m + n;

    }
}

var add10 = makeAdder(10)
console.log(add10(25));


// ------------------------
// Задача 4.2
// ------------------------
// 1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
// 2) Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
// конструктора - new и задание прототипа через Function.prototype)

var mammal  = {
    legs: 4
}

var dog = {
    bark: true,
    voice: function() {
        return "Bark!Bark!"
    }

}

var buldog = {
    wrinkedFace: true
}

buldog.__proto__=dog;
dog.__proto__=mammal;

console.log(buldog.voice());
console.log(buldog.legs);
console.log(buldog.wrinkedFace);


function Mammal() {
    this.legs = 4
}


function Dog() {
    this.bark = true;
    this.voice = function() {
        return "Bark!Bark!"
    }

}


function Buldog() {
    this.wrinkedFace = true
}

var mammal2= new Mammal()

Dog.prototype =  mammal2;
var dog2= new Dog()
Buldog.prototype =  dog2;
var buldog2 = new Buldog();

console.log(buldog2.voice());
console.log(buldog2.legs);
console.log(buldog2.wrinkedFace);
