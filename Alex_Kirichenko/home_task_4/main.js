/////////////////4.1///////////////////

function makeAdder(count) {
  function mathOperation(num) {
    return (count += num);
  }
  return mathOperation;
}

var add10 = makeAdder(10);
console.log(add10(25));

//////////////////4.2//////////////////

var grandfather = {
  name: "grandfather",
  legs: 2,
  arms: 2,
  head: 1
};
var father = {
  name: "father",
  baldSpot: " Unfortunately I am bald.",
  sport: "football.",
  hi: function() {
    console.log(
      "Hello, i am " +
        this.name +
        " . I am a human and i like play " +
        this.sport +
        this.baldSpot
    );
  }
};
father.__proto__ = grandfather;
var son = {
  name: "sun",
  baldSpot: " I'm not bald like my father.",
  sport: "basketball."
};
son.__proto__ = father;

function Human(name) {
  this.name = name || "human";
  this.legs = 2;
  this.arms = 2;
  this.head = 1;
}

var grandfather = new Human("grandfather");

function FatherConstr() {
  this.sport = "football";
  this.baldSpot = " Unfortunately I am bald.";
  this.hi = function() {
    console.log(
      "Hello, i am " +
        this.name +
        " . I am a human and i like play " +
        this.sport +
        this.baldSpot
    );
  };
}

FatherConstr.prototype = new Human("father");

var father = new FatherConstr();

function SonConstr() {
  this.name = "son";
  this.sport = "basketball.";
  this.baldSpot = " I'm not bald like my father.";
}

SonConstr.prototype = new FatherConstr();

var son = new SonConstr();
