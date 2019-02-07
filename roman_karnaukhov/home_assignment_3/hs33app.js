var car = {
  run: "Др-Др-Др...",
  signal: ["Би", "Би", "п"],
  sound: function() {
    console.log(this.run);
  }
};
var train = {
  run: "ТыДыХ-ТыДых...ТыДыХ-ТыДых",
  signal: ["Ту", "Ту", "у", "у"],
  sound: function() {
    console.log(this.signal);
  }
};

car.sound(); // вызывается в своем контексте.
train.sound(); // вызывается в своем контексте.
car.sound.call(train); // выполнили функцию из объекта car в контексте объекта train.
train.sound.apply(car); // выполнили функцию из объекта train в контексте объекта car.

var vehicle = car.sound; // в vehicle контектст car потерялся.

var vehicle1 = car.sound.bind(car); // теперь контекст привязан
console.log(vehicle1()); // вызов работает в контексте car.

var vehicle1 = car.sound.bind(train); // пере при вяжем к контексту train.
console.log(vehicle1()); // вызов работает в контексте train.

// ------------------------
// Задача 3.3
// ------------------------

// Привести пример использования привязки контекста с помощью call/apply/bind
