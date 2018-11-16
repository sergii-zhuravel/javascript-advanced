// ------------------------
// Задача 5.1
// ------------------------
// Создать 2 класса ES6 с конструкторами, один класс с конструктором без параметров и второй класс с конструктором с 2 параметрами

class Army {
    constructor(){
        this.general = {
            minAge: 30,
            graduation: 'General'
        };
        this.movementSpeedPerDay = 10;
    }

    move(days) {
        return this.movementSpeedPerDay * days;
    }
}

class Tank {
    constructor(type, weight, speed, projectile){
        this.type = type;
        this.weight = weight;
        this.speed = speed;
        this.projectile = projectile;
    }
}

// ------------------------
// Задача 5.2
// ------------------------
// 1) Создать иерархию объектов из задания 4.2 с помощью классов ES6

class Terrestrial {
    constructor(){
        this.age = 0;
    }
    breath(){
        console.log('breath');
    }
}

class Bird extends Terrestrial {
    constructor(){
        super();
        this.canFly = true;
        this.canRun = true;
    }
    fly(){
        if (this.canFly){
            console.log('fly');
        }
    }
}

class Ostrich extends Bird {
    constructor(){
        super();
        this.canFly = false;
    }
    hideHead(){
        console.log('hide head');
    }
}

let lu = new Ostrich();

lu.fly();
lu.breath();