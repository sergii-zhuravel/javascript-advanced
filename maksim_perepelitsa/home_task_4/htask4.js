//4.1

function makeAdder(n){
	return function(m){
		return n+m;
	}
}

var add5 = makeAdder(5)
console.log(add5(17)) //

//4.2
//наследование с помощью __proto__
/*function Pet(){
	this.isCute = true;
	this.askForFood = function(){
		console.log('feed me pls');
	}
}

function LargeDog(){
	this.__proto__ = new Pet();
	this.size = 'large';
	this.getSize = function(){
		console.log('i am a '+this.size+' dog');
	}
}

function GermanShepherd(breed){
	this.__proto__ = new LargeDog();
	this.breed = breed;
}

var dog = new GermanShepherd();
dog.getSize();
dog.askForFood();
*/

function Pet(){
	this.isCute = true;
	this.askForFood = function(){
		console.log('feed me pls');
	}
}

function LargeDog(){
	this.size = 'large';
	this.getSize = function(){
		console.log('i am a '+this.size+' dog');
	}
}
LargeDog.prototype = new Pet();

function GermanShepherd(breed){
	this.breed = breed;
}
GermanShepherd.prototype = new LargeDog();

var dog = new GermanShepherd();
dog.getSize();
dog.askForFood();



