// Насследование

// Initialize a constructor function for a new Hero
function Hero(name, level) {
  // var name = name;
  // var level = level;
  // this.getName = function() {
  //   return name;
  // }
  // this.setName = function(n) {
  //   name = n;
  // }
  this.name = name; // public
  this._level = level;

  this.leveUp = function(level) {
    this._level = level;
  }
}


// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  'use strict'
  // Chain constructor with call
  Hero.call(this, name, level);
  //  {
  //   name: 'Mitita',
  //   level: 1
  //  }
  // Add a new property
  this.weapon = weapon;
  this.exp = 0;
  var parentLevelUp = this.leveUp.bind(this);
  var _self = this;
  this.leveUp = function(level) {
    if (_self.exp > 1000) {
      parentLevelUp(1);
    } else {
      parentLevelUp(level);
    }
  }

}


var mikita = new Warrior('Mikita', 1, 'sword');
console.log(mikita)
// mikita.setName("Kiril");
console.log(mikita._level)
mikita.leveUp(3)
console.log(mikita._level)

var myFunc = mikita.leveUp;

myFunc(5);
console.log(mikita._level)
// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}