var robot = {
  name: "Qbot",
  humanLike: false,
  greating: function() {
    console.log(
      "Hello, I'm a " +
        this.name +
        " - " +
        (this.humanLike ? "human like" : "not a human like") +
        " robot"
    );
  }
};
var robot2 = {
  name: "Rbot",
  humanLike: true
};
outerFunction = robot.greating;
// robot.greating();
outerFunction.call(robot);
outerFunction.call(robot2);

//////////////////////////////////
// var robot = {
//   name: "Qbot",
//   humanLike: false,
//   greating: function() {
//     console.log(
//       "Hello, I'm a " +
//         this.name +
//         " - " +
//         (this.humanLike ? "human like" : "not a human like") +
//         " robot"
//     );
//   }
// };
// var robot2 = {
//   name: "Rbot",
//   humanLike: true
// };
// function myBind (func, context){
// return function () {
//     return
//     func.apply(context);
// }
// }
// var test = myBind(robot.greating, robot2)
// test();
///////////////////////////////////////////////////////////
//Объект калькулятор у которого будут поля а и б, метод рид который запрашивает у пользователя через промпт 2 значения и записывает их, метод сумм который будет суммировать и метод мультипликейшен
// var calculator = {
    // a: undefined,
    // b: undefined,
//    getNum: this.read() {
//        var a = prompt("Введите число a");
//        var b = prompt("Введите число b");
//    },
//    summary: sum() {
//      return this.getNum(a + b)
//     },
//    multiplication:  this.mul () {
//         return this.getNum(a * b)
//        },
// };
