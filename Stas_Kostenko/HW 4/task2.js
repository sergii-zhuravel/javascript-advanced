var animal = {
    eats: true
}

var wolf = {
    run: true
}

var dog = {
    name: 'bim'
}

wolf.__proto__ = animal;
dog.__proto__ = wolf;

console.log(dog.eats)