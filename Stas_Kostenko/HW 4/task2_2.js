function Animal(name) {
    this.eats = true;
  }
  
  function Wolf() {
    this.run = true;
  }
  
  function Dog(name) {
    this.name = name;
  }
  
  var animal = new Animal;
  
  Wolf.prototype = animal;
  
  var wolf = new Wolf();
  
  Dog.prototype = wolf;
  var dog = new Dog("Bim");
  
  console.log(dog.eats);