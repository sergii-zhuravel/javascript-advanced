class Animal {
    constructor(){
        this.animal = 'Yes, animal';
    }

    animalCreate() {
        console.log('animal')
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super();
        this.name = name;
        this.weight = age;
    }
}

var cat1 = new Cat("Мацько",5);
cat1.animalCreate();
console.log(cat1.animal)