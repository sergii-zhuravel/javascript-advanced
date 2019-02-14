// Задача 5.1
// Создать 2 класса ES6 с конструкторами, один класс с конструктором без параметров и второй класс с конструктором с 2 параметрами
console.log("5.1\n");
console.log("5.1.1\n");

class Task1 {
  constructor() {
    console.log("Создан экземпляр конструктора без параметров!");
  }
};

var task = new Task1();

console.log("5.1.2\n");

class Task2 {
  constructor(distance, speed) {
    this.distance = distance;
    this.speed = speed;
  }
};

var time = new Task2(1000, 100);
function timeList() {
  for (key in time) {
    console.log(key + ": " + time[key]);
  }
};
timeList();


// Задача 5.2
// 1) Создать иерархию объектов из задания 4.2 с помощью классов ES6
console.log("\n5.2\n");

class ClassMammal {
  constructor(childrenEat, hairCoat, paws) {
    this.childrenEat = childrenEat;
    this.hairCoat = hairCoat;
    this.paws = paws;
  }
};

class SquadPredatory extends ClassMammal {
  constructor(childrenEat, hairCoat, paws, areEating) {
    super(childrenEat, hairCoat, paws);
    this.areEating = areEating;
  }
};

class FamilyСanine extends SquadPredatory {
  constructor(childrenEat, hairCoat, paws, areEating, tail, habitat) {
    super(childrenEat, hairCoat, paws, areEating);
    this.tail = tail;
    this.habitat = habitat;
  }
};

var wolf = new FamilyСanine('milk', 'wool', 4, 'meat', true, 'ground');

function wolfList() {
  for (key in wolf) {
    console.log(key + ": " + wolf[key]);
  }
};
wolfList();

