class Animal {
  constructor(name) {
    this.name = name;
    this.gender = "male";
    this.color = "black";
    this.wild = false;
  }
  isWild() {
    return this.name + (this.wild ? " is a wild animal." : " is a pet.");
  }
};

class Predator extends Animal {
  constructor(name) {
    super(name);
    this.likesMeat = true;
  }
};

class Cat extends Predator {
  constructor(name) {
    super(name);
    this.say = "myau";
  };
  isWild() {
    return super.isWild(); 
  }
  likesFood(food) {
    return (
      "This is a cat " + this.name +
      ", it's gender is " + this.gender +
      ", it's wool is " + this.color +
      ". He likes say " + "'" + this.say + "'," +
      (this.likesMeat ? " likes to eat meat " : " don't likes to eat meat ") +
      "and likes drinks " + food + ".");
    }
  };
  
  var myCat = new Cat('Murchik');
  console.log(myCat.name);
  console.log(myCat.isWild());
  console.log(myCat.say);
  console.log(myCat.likesFood("milk"));
  