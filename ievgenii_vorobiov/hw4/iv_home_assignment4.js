// ------------------------
// Задача 4.1
// ------------------------
// Написать функцию makeAdder(n) которая получает целое число и возвращает функцию которая увеличивает переданный ей
// параметр на заданное заранее значение (использовать замыкание)

function makeAdderShort (n){ return (a) => a == undefined ? result : result = n + a; };

function makeAdder (n){
	function sum (a){
		if (a == undefined){
			return result
		}
		return result  = n + a;
	}
	return sum;
}

// Пример вызова функций:
var add10 = makeAdder(10)
console.log(add10(25)) // должно вывести 35
console.log(add10()) // должно вывести 35

//Пример вызова функций Short Type:
var add10s = makeAdderShort(10)
console.log(add10s(25)) // должно вывести 35
console.log(add10s()) // должно вывести 35

// ------------------------
// Задача 4.2
// ------------------------
// 1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
// 2) Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
// конструктора - new и задание прототипа через Function.prototype)

class Display {
	constructor (type){
		this.type = type;
		this.pixels = true,
		this.hasConection = true;
	}
}

