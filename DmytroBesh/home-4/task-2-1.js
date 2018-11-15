var transport = {
    eat: function(fuel) {
        console.log('Заправляем ' + fuel);
    },
    driving: function(fast) {
        console.log('едит ' + fast);
    }
};

var speed ={
    carSpeed: 110,
    bikeSpeed: 20
}

var bike = {
    eco: function(){
        return frue;
    },
    comfortable: function(){
        return false;
    } 
};

var car = {
    eco: function(){
        return false;
    },
    comfortable: function(){
        return frue;
    } 
};

speed.__proto__ = transport;
bike.__proto__ = speed;
car.__proto__ = speed;

bike.eat('ничего');
bike.driving('медлено');
car.driving('быстро')
car.eat('бензин');

console.log(car.eat)

/////////

console.log('Авто едит со скоростью ' + car.carSpeed + ' км/год');
console.log('Велосипед едит со скоростью ' + bike.bikeSpeed + ' км/год');