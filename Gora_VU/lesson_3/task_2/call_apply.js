//call, apply
var obj1 = {
    prop:9,
    method: function(x,y) {
        return (this.prop+x+y);
    }
}
console.log(obj1.method(1,3));
var obj2 = {
    prop:13
}
console.log(obj1.method.call(obj2,1,3));//вызвать метод объекта 1 с контекстом объекта 2
console.log(obj1.method.apply(obj2,[1,3]));
//2nd example
function User(name,year) {
	this.name = name;
	this.year = year;
	this.canSpeak = true;
	this.sayHello = function() {
		return "Hi! My name is " + this.name;
	};
	var d = new Date();
	this.calcAge =  function() {
		return (d.getFullYear() - this.year);
	};
	this.print = function() {
		document.write('Hi! My name is '+this.name+'. I was born in '+this.year+'. I am '+this.calcAge()+'.<br>');
	}

};
var Lera = new User("Lera",1993);//новый объект из конструктора User
var Alex = new User("Alex",1990);//новый объект из конструктора User
console.log(Lera.name);
console.log(Lera.year);
console.log(Lera.canSpeak);
console.log(Lera.sayHello.call(Alex));
console.log(Lera.calcAge.call(Alex));
console.log(Lera.calcAge());
Lera.print();
Alex.print.call(Lera);//данные объекта Lera
Alex.print();////данные объекта Alex