//5.1

class Animal{
	constructor(){
		this.legs = 4;
		this.carnivore = false;
	}
}

class Person{
	constructor(age, gender){
		this.age = age;
		this.gender = gender;
	}
}

//5.2

class Pet{
	constructor(){
		this.isCute = true;
		this.askForFood = function(){
			console.log('feed me pls');
		}
	}
}

class LargeDog extends Pet{
	constructor(){
		super();
		this.size = 'large';
		this.getSize = function(){
		console.log('i am a '+this.size+' dog');
		}
	}
}

class GermanShepherd extends LargeDog{
	constructor(breed){
		super();
		this.breed = breed;
	}
}

var doggy = new GermanShepherd('GSP');
doggy.askForFood();