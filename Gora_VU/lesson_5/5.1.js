// Задача 5.1
// Создать 2 класса ES6 с конструкторами, один класс с конструктором без параметров и второй класс с конструктором с 2 параметрами
class Human {
    constructor () {
        this.legs = 2;
        this.step = 0;
    }
    goForward() {
        this.step++;
    }
    goBack() {
        this.step--;
    }
};

var ann = new Human();
ann.goForward();
ann.goForward();
ann.goBack();
console.log( ann.step );

class Cat {
    constructor(name,crazy) {
        this.name = name;
        this.legs = 4;
        this.step = 0;
        this.crazy = crazy;
    }
    runForward() {
        (this.crazy==true) ? (this.step+=20) : (this.step+=5);
    }
    runBack() {
        (this.crazy==true) ? (this.step-=20) : (this.step-=5);
    }
};
var tiger = new Cat("Tiger",true);
console.log(tiger.name);
tiger.runForward();
tiger.runForward();
tiger.runBack();
console.log( tiger.step );

