// Задача 5.1
// ------------------------
// Создать 2 класса ES6 с конструкторами, один класс с конструктором без параметров и второй класс с конструктором с 2 параметрами


class Audio {
    constructor() {
    	this.name = 'Audio';
        }

        sayName() {
        	console.log("Hi, I am " + this.name + " collections");
    }
};
class MyAudio extends Audio{
    constructor(title, quantity) {
        super();
        this.title = title;
        this.quantity = quantity;
        }
        
        complete() {
            this.play = true;
            console.log(this.title + " is playing now");
    }
};
var audio = new Audio();
var myAudio = new MyAudio("Lyrics", 20);

audio.sayName();
myAudio.complete();
console.log(myAudio.title);
console.log(myAudio.quantity);
console.log(myAudio.play);

// console.dir(audio);