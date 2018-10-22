// ------------------------
// Задача 4.1
// ------------------------
// Написать функцию makeAdder(n) которая получает целое число и возвращает функцию которая увеличивает переданный ей
// параметр на заданное заранее значение (использовать замыкание)

// Пример вызова функций:
// var add10 = makeAdder(10)
// console.log(add10(25)) // должно вывести 35

function makeAdder(sumTo){
    let val1 = sumTo;
    function addMore(addAmount){
        return val1 + addAmount;
    }
    return addMore;
}

let add20 = makeAdder(20);
add20(45);
// ------------------------
// Задача 4.2
// ------------------------
// 1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)

let terrestrial = {
    age: 0,
    breath: function(){
        console.log('breath');
    }
}

let bird = {
    canFly: true,
    canRun: true,
    fly: function(){
        if (this.canFly){
            console.log('fly');
        }
    }
}
bird.__proto__ = terrestrial;

let ostrich = {
    canFly: false,
    hideHead: function(){
        console.log('hide head');
    }
}

ostrich.__proto__ = bird;

ostrich.breath();



// 2) Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
// конструктора - new и задание прототипа через Function.prototype)

function Terrestrial(){
    this.age = 0;
    this.breath = function(){
        console.log('breath');
    }
}

function Bird(){
    Terrestrial.call(this);
    this.canFly = true;
    this.canRun = true;
    this.fly = function(){
        if (this.canFly){
            console.log('fly');
        }
    }
}
function Ostrich(){
    Bird.call(this);
    this.canFly = false;
    this.hideHead = function(){
        console.log('hide head');
    }
}

Ostrich.prototype = Object.create(Bird);

let lu = new Ostrich();

lu.fly();
lu.breath();