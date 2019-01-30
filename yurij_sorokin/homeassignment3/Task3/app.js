//Call

var cars = [
  {
    model: "bmw",
    plateNumber: "AA0010AA",
    color: "red"
  },
  {
    model: "toyota",
    plateNumber: "AA0020AA",
    color: "black"
  }
];

function CarInfo() {
  return "I have a " + this.color + " " + this.model + " " + "with " + this.plateNumber + " plate number";
}

console.log(CarInfo.call(cars[0]));

//Apply
function AddCarIfDoesntExist() {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].plateNumber === this.plateNumber) {
      return false;
    }
  }
  cars.push(this);
  return true;
}

var newCar = {
  model: "lada",
  plateNumber: "AA0011AA",
  color: "baklajan"
};

AddCarIfDoesntExist.apply(newCar, cars);

console.log(cars.length);

//bind
var getCarInfo = CarInfo.bind(cars[0]);

console.log(getCarInfo());
