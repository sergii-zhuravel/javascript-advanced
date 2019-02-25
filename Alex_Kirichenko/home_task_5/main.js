//////////////////5.1//////////////////

class ClassOne {
  constructor() {
    console.log((this.discript = "I am a good class without params"));
  }
}

class ClassTwo {
  constructor(classStatus, paramsCount) {
    console.log(
      "I am a " + classStatus + " class with " + paramsCount + " params"
    );
  }
}

var one = new ClassOne();
var two = new ClassTwo("good", 2);

///////////////////5.2//////////////////

class Human {
  constructor(name) {
    this.name = name;
  }
  legs = 2;
  arms = 2;
  head = 1;
}

var grandfather = new Human("granfather");

class FatherConstr extends Human {
  constructor(name) {
    super(name);
    this.sport = "football.";
  }
  baldSpot = " Unfortunately I am bald.";
  hi = function() {
    console.log(
      "Hello, i am " +
        this.name +
        " . I am a human and i like play " +
        this.sport +
        this.baldSpot
    );
  };
}

var father = new FatherConstr("father");

class SonConstr extends FatherConstr {
  constructor(name) {
    super(name);
    this.sport = "basketball.";
    this.baldSpot = " I'm not bald like my father.";
  }
}
var son = new SonConstr("son");
