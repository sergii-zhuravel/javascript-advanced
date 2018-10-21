// Задача 4.1
// Написать функцию makeAdder(n) которая получает целое число и возвращает функцию которая увеличивает переданный ей
// параметр на заданное заранее значение (использовать замыкание)

// Пример вызова функций:
// var add10 = makeAdder(10)
// console.log(add10(25)) // должно вывести 35

function makeAdder(num) {

    function add(n) {
        return num+n;
    }
    return add;
};

var add10 = makeAdder(10);
console.log(add10(25));
