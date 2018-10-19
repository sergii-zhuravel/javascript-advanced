// Задача 1.2
// Используя существующие обьектьі смоделировать нелетающую птицу (например пингвин)
// Можно ли пингвина наследовать от воробья?
var bird = {
  eats: true
};

var sparrow = {
  jumps: true,
  flies: true
};

sparrow.__proto__ = bird;

var penguin = {};

penguin.__proto__ = sparrow;
penguin.flies = false;
console.log('penguin flies: '+penguin.flies);
console.log('sparrow flies: '+sparrow.flies);
console.log('penguin eats: '+penguin.eats);