//3.1

function Pizza(toppings, bortik, size) {
	this.toppings = toppings;
	this.bortik = bortik;
	this.size = size;

	this.makePizza = function() {
		if (this.bortik == true) {
			var bortikValue = 'bortik';
		} else {
			var bortikValue = 'no bortik';
		}

		var toppingsString = this.toppings.join();

		return size + " Pizza with " + bortikValue + " and with these toppings - " + toppingsString;
	};

	this.packPizza = function() {
		return "Pizza packed into " + size + " box";
	}

}

var smallPizza = new Pizza(['pineapple', 'pepperoni', 'tomato'], false, 'small');
//console.log(smallPizza.makePizza());

//3.2

function applyAll(func) {
	var args2 = Array.prototype.slice.call(arguments, 1);
	var result = func.apply(document, args2);
	console.log(result);
}

applyAll(Math.min, 2, -2, 3);

//3.3

//когда нужно использовать метод обьекта для другого обьекта например
var animal = {
	name: 'Sparky',
	callName: function() {
		console.log("my name is " + this.name);
	}
}

var cat = {
	name: 'Snowball'
}
//animal.callName.call(cat);