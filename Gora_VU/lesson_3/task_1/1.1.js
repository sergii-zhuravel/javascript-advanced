// Создайте объект calculator с тремя методами:

// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений
var calculator = {
  read: function() {
    var a = +prompt('Input first number: ');
    var b = +prompt('Input 2nd number: ');
    this.firstNum = a;
    this.secondNum = b;
  },
  sum: function() {
    return this.firstNum + this.secondNum;
  },
  mul: function() {
    return this.firstNum * this.secondNum;
  }
};
calculator.read();
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());