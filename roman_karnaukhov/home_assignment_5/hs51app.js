
// ------------------------
// Задача 5.1
// ------------------------
// Создать 2 класса ES6 с конструкторами, один класс с конструктором без параметров 
// и второй класс с конструктором с 2 параметрами


class Guitar1 {
    constructor () {
        this.strings = 6;
        this.type = 'acoustic';
    }
    play() {console.log ('gently weeps')} 
}

var myGuit = new Guitar1;
console.log (myGuit);
myGuit.play();



class Guitar2 {
    constructor (strings, type) {
        this.strings = strings;
        this.type = type;
    }
    play() {console.log ('sounds amazing')}
}

var myGuitNew = new Guitar2(4, 'bass');
console.log (myGuitNew);
myGuitNew.play();
