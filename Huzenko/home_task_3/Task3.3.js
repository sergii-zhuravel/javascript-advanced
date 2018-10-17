// Пример использования привязки контекста с помощью bind
var obj = {
    x: 4,
    f: function() {
        console.log(this.x);
    }
}
setTimeout(obj.f.bind(obj), 1000);
console.log(obj);


// Пример использования привязки контекста с помощью call
var person = {
    name: "Ivan",
    hello: function(thing) {
        console.log(this.name + 'say hello' + thing) 
    }
}
person.hello("world");
person.hello.call({name:'Pavel'}, "world");


// Пример использования привязки контекста с помощью apply
var person1 = {firstName: 'Ivan', lastName: 'Ivanov'};
var person2 = {firstName: 'John', lastName: 'Smith'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); 
say.apply(person2, ['Hello']); 
