// Задание 1 - иерархия

/*
Monkey(social=true, brainsize = 'big', findFood())
Caveman(usesTools=true, makeFire())
MiddleAgesPerson(isReligious=true, lifeSpan=40, praiseKing())

Peasant(wealth='poor', qualityOfLife='poor', workOnFarm())
Noble( wealth='rich', drinkWine())*/


function CarWithMechTransmission(wheels, color, engineOn){
	this.wheels = wheels;
	this.color = color;
	this.engineOn = engineOn;

	this.switchEngine = function(){
		if(this.engineOn){
			console.log('turning engine off');
			this.engineOn = false;
		}else{
			console.log('turning on');
			this.engineOn = true;
		}


	};

	this.drive = function(){
		this.switchEngine();
		this.setTransmission(1);
		console.log("I'm driving, I'm a " +this.color+ " car");
	}

	this.transmission = 0;
	this.setTransmission = function(m){
		this.transmission = m;
	}
}

function CarWithAutomaticTransmission(wheels, color, engineOn){
	this.wheels = wheels;
	this.color = color;
	this.engineOn = engineOn;

	this.switchEngine = function(){
		if(this.engineOn){
			console.log('turning engine off');
			this.engineOn = false;
		}else{
			console.log('turning on');
			this.engineOn = true;
		}


	};

	this.drive = function(){
		this.switchEngine();
		console.log("I'm driving, I'm a " +this.color+ " car");
	}
}

var ford = new CarWithAutomaticTransmission(4, 'white', true);
var subaru = new CarWithAutomaticTransmission(4, 'purple', false);
var audi = new CarWithAutomaticTransmission(4, 'blue', false);

audi.drive();
