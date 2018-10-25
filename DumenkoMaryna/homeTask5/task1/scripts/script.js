document.addEventListener('DOMContentLoaded', function() {
    class Animal {
        constructor() {
            this.animal = true;
        }

        checkAnimalCreate() {
            console.log("Animal Created");
        }
    }

    class Dog extends Animal {
        constructor(name, age) {
            super();
            this.name = name;
            this.age = age;
        }
    }

    var myDog = new Dog("Sharik", 5);
    myDog.checkAnimalCreate();
    console.log(myDog.animal);
})
